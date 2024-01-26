// import axios from 'axios';

// export default async function getUserAuthProfile(authuser: any){
//   // const useCookies = cookies();

//   // const accessToken = useCookies.get('accesstoken')?.value;
//   // const refreshToken = useCookies.get('refreshtoken')?.value;
//   // const headers =  {headers:{
//   //   Authorization: 'Bearer ' + accessToken
//   // }};

//   // const decodejwt = jwtDecode(accessToken?.toString() || '');
//   // console.log(decodejwt);


//   const res_post = await axios.get(`${process.env.BASE_URL}profiles`)
 
//   return res_post.data;
// }