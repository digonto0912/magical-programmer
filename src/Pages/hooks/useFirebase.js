import { useState } from "react";
import FirebaseInit from "./../Firebase/FirebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";

FirebaseInit();

function useFirebase() {
    const [Token, setToken] = useState({});
    const [User, setUser] = useState({});
    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [Error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    // google popup
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
          // gioogle token
          const credential = GoogleAuthProvider.credentialFromResult(result);
          setToken(credential.accessToken);
          // user info
          setUser(result.user);
        });
      };
      
      // singUp Form
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };
      const handelFormEmail = (e) => {
        setEmail(e.target.value);
      }
      const handelFormPass = (e) => {
        setPass(e.target.value);
      }
      const signUpWithForm = (e) => {
        if(Pass.length < 6){
          setError("Password should be at least 6 characters");
          return;
        };
        createUserWithEmailAndPassword(auth, Email, Pass)
        .then(result => {
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
        setError("");
      }

      // signIn form 
      const signInWithForm = (e) => {
        if(Pass.length < 6){
          setError("Password should be at least 6 characters");
          return;
        };
        signInWithEmailAndPassword(auth, Email, Pass)
        .then(result => {
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
        setError("");
      }
      
      return {
        onSubmit,
        handelFormEmail,
        handelFormPass,
        signUpWithForm,
        signInWithForm,
        signInWithGoogle,
        Token,
        User,
        Error
  };
}

export default useFirebase;