
import { useCookies } from "next-client-cookies";

export default function setTokenCookies(token: string){
  let cookies = useCookies();
  cookies.set('token', token.toString());
}