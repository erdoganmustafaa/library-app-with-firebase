import { auth } from "../Firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useSignup = ()=>{

    const [error,setError] = useState(null);
    const {dispatch} = useAuthContext();
    const signup = (email,password)=>{
        setError(null);
        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
           dispatch({type:"SIGNUP",payload:res.user})
           alert("You have successfully registered.. You are being redirecting to the main page..")
        })
        .catch((err)=>{
            setError(err.message);

        })
    }
    return {error,signup}
}