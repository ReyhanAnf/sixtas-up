
export default async function getDataPost(){
  // const useCookies = cookies();

  // const accessToken = useCookies.get('accesstoken')?.value;
  // const refreshToken = useCookies.get('refreshtoken')?.value;
  // const headers =  {headers:{
  //   Authorization: 'Bearer ' + accessToken
  // }};

  // const decodejwt = jwtDecode(accessToken?.toString() || '');
  // console.log(decodejwt);


  const res_post = await fetch(`${process.env.BASE_URL}posts`)
 
  return res_post.json();
}