import { useState,useEffect } from "react";

export const FComponent=()=>{
    const [time,setTime]=useState(new Date().toString());
    const [message,setMessage]=useState("Functional Component");

    const showDate=()=>{
        setTime(new Date().toString());
    }

    useEffect(()=>{
        console.log("Component mounted or updated");
        const interval=setInterval(showDate,1000);

        return ()=>{
            console.log("Cleanup of Interval");
            clearInterval(interval);
        }
    },[time]);


    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>
                 Show Date
            </button>

            <div>{message}</div>
            <button onClick={()=>setMessage("Changed Functional Component")}>
                Change message
            </button>
        </div>

    );
} 