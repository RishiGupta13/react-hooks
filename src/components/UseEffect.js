import { useState } from "react";
import {FComponent} from "./FComponent"
export const UseEffecthook=()=>{

    const [flag,setFlag]=useState(true);

    return (
        <div>
            <div>
            <button onClick={()=>setFlag(!flag)}>
                Toggle FUnctional Component
            </button>
            </div>
                { flag ?  <FComponent/> : ""}

        </div>
    );
}