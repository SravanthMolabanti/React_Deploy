import Axiom from "axios";
import { useEffect,useState } from "react";

export function Employee()
{
    const[data,setData]=useState([]);
    useEffect(()=>{
        Axiom.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200)
            {
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
    
    const ListNames=()=>{
        return data.map((val)=>{
            return <p>{val.name}</p>
        })
    }
    return(
        <div>
            {ListNames()}
        </div>
    )
}