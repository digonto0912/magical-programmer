import { initializeApp } from "firebase/app";
import FirebaseConfig from "./FirebaseConfig";

const FirebaseInit = () =>{
    initializeApp(FirebaseConfig);
}

export default FirebaseInit;