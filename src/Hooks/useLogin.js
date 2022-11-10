import { auth } from "../Firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = ()=>{

    const [error,setError] = useState(null);

    const {dispatch} = useAuthContext();
    const login = (email,password)=>{
        setError(null);
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            alert("You are logged in, you are redirecting to the home page..")
            dispatch({type:"LOGIN",payload:res.user})
        })
        .catch((err)=>{
            setError(err.message);

        })
    }
    return {error,login}
}