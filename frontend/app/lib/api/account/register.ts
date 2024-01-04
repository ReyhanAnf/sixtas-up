import { API_URL } from "../../config";

export default async (req: { method: string; body: { fullname: any; shortname: any; username: any; password: any; re_password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success?: any; error?: any; }): any; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) => {
  if (req.method === "POST") {
    const {
      fullname,
      shortname,
      username,
      password,
      re_password
    } = req.body;

    const body = JSON.stringify({
      fullname,
      shortname,
      username,
      password,
      re_password
    })
    try {
      const apiRest = await fetch(`${API_URL}/user/register`,{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    });

    const result = await apiRest.json();

    if (apiRest.status === 201){
      return res.status(201).json({success: result.success});
    }else{
      return res.status(apiRest.status).json({error: result.error});
    }
    } catch (err) {
      return res.status(500).json({'error': 'something went wrong registering'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({'error': `Method ${req.method} not allowed`});
  }
}