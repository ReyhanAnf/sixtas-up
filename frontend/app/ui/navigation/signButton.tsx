import { signIn, signOut, useSession } from "next-auth/react";


export default function SignButton() {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user ? (
        <>
          <p>{session.user.name}</p>
          <button
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn()}
          >
            Login
          </button>
        </>
      )}
    </div>
  )
}