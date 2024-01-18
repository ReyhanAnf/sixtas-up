'user server';

import { cookies } from "next/headers";

export default function Cookie(){
  const cookieStore = cookies();
  console.log(cookieStore.getAll());
}