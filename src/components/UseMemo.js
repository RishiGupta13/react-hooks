import { useState,useMemo } from "react"

export const UseMemohook=()=>{
    //expensive function
    const factorial=(n)=>{
        if(n<0){
            return -1;
        }
        if(n===0){
            return 1;
        }
        return n*factorial(n-1);
        
    }
    const [counter,setCounter]=useState(0);
    const result=useMemo(()=>{
          return factorial(counter);
    },[counter]);

   


    return (
        <div>
             <h2>Factorial of {counter} is {result}</h2>

             <button onClick={()=>setCounter(counter+1)}>Increment</button>
             <button onClick={()=>setCounter(counter-1)}>Decrement</button>

        </div>

    );

   

    
}