import {useState} from "react";

const UseAuth = () => {
  
  const [userInfo, setUserInfo]  = useState({});

  const SGEmail = document?.cookie?.split(";")?.find(c => c?.includes("SG"))?.split("=")[1];
  const SGEF = SGEmail?.split("%40")[0];
  const SGEL = SGEmail?.split("%40")[1];
  let email = SGEF+"@"+SGEL;


  if (!userInfo.email){
    if(SGEmail){
      const SG1 = {SG:email};
  
      if(email){
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
  }
  if(email === "undefined@undefined"){
    email = "";
  }
  
  return{userInfo, email};

};

export default UseAuth;