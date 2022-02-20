import {useState} from "react";

const Auth = () => {
  
  const [userInfo, setUserInfo]  = useState({});

  const SGEmail = document?.cookie?.split(";")?.find(c => c?.includes("SG"))?.split("=")[1];

  if(SGEmail){
    const SGEF = SGEmail.split("%40")[0];
    const SGEL = SGEmail.split("%40")[1];
    const SG = SGEF+"@"+SGEL;
    const SG1 = {SG:SG};

    if(SG){
      // server
      fetch("http://localhost:2333/auth", {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(SG1)
    })
    .then(res => res.json())
    .then(data => setUserInfo(data))
  }
  }
  
  return{userInfo};

};

export default Auth;