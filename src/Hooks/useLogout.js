import { auth } from "../Firebase/Config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
export const useLogout = ()=>{
    const {dispatch,user} = useAuthContext();
    
    const logout = () =>{
        signOut(auth)
        .then(()=>{
            if(user) {
            dispatch({type:"LOGOUT"})
            alert("You have successfully logged out")
            }
            
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    return {logout}
}