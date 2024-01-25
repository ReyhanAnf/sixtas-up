
export default function logoutUser() {
  const user = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
  // Jika ada histori user maka cek apakah akses token user tersebut valid
  // jika valid maka jalankan fungsi refresh token dan sajikan lagi data nya
  // Jika tidak valid maka cek apakah refresh token juga masih valid
  //Jika Valid maka jalankan refresh token supaya bisa dapatkan akses token lagi
  //Jika tidak maka kembalika ke halaman login
  // Jika tidak ada maka login
  if (user) {
    
    localStorage.clear();

  } else {
    // login
    isValid = false;
    console.log('tidak ada user')
  }

  return "success logout";
}
