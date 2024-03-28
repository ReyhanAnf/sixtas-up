'use server';
import axios from "axios";
import { BASE_URL } from "../url";
import { cookies } from "next/headers";

export default async function updateProfile(dataform: FormData) {
  const cookie = cookies();
  const user = cookie.get('userToken');
  const access = cookie.get("accessToken");
  const req = {
    "bio":  dataform.get('bio'),
    "kelas":  dataform.get('kelas'),
    "jurusan":  dataform.get('jurusan'),
    "subjurusan":  dataform.get('subjurusan'),
    "jenis_kelamin":  dataform.get('jenis_kelamin'),
    "alamat":  dataform.get('alamat'),
    "angkatan":  dataform.get('angkatan'),
    "kontak":  dataform.get('kontak'),
    "ttl":  dataform.get('ttl'),
};

  const auth = {
    'headers': { 
      'Authorization': 'Bearer ' + access?.value ,
  },
  }
   
  
  const res = await axios.patch(`${BASE_URL}/profiles/${user?.value}/`, req, auth)
  .then((response)=>{
    console.log("update-profile", response.status);
  })
  .catch((error)=>{
    console.log("error ::: ", error);
  });

  return res;
}
