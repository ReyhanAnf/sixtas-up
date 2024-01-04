import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '../ui/login-form';
import RegisterForm from '../ui/register-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div>
        <LoginForm />
        <RegisterForm />
      </div>
    </main>
  );
}