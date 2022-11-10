import {db} from "../Firebase/Config";
import { collection,onSnapshot,query,where } from "firebase/firestore";

import { useState,useEffect,useRef} from "react";

export const useCollection = (col,_q)=>{
    {/* Belgelere erişme işlemi. Yani firebase database de olan verileri ana sayfada görüntüleme.. */}
    const [documents,setDocuments] = useState(null);

    const isQuery = useRef(_q).current;

    useEffect(()=>{
        let ref = collection(db,col);

        if(isQuery){
            ref = query(ref,where(...isQuery));
        }
       const unsub = onSnapshot(ref,(snapshot)=>{
            let result = [];
            snapshot.docs.forEach(doc=>{
                result.push({id:doc.id,...doc.data()});
            })
            setDocuments(result);
        },err=>{
            console.log(err.message);
        })
        return ()=>unsub();
    },[col,isQuery])
    return {documents};
    
}