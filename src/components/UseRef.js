import { useRef,useState } from "react"

// hold DOM Reference
// useRef for storing the previous State
// Hold mutable value prevent re-render of component

export const UseRefhook=()=>{

    const [name,setName]=useState();

    const inputEl=useRef("");


    const resetInput=()=>{
        setName("");
        inputEl.current.focus();
    }

    return (
        <div>
            <input
            ref={inputEl}
             placeholder="name"
             value={name}
             onChange={(e)=>setName(e.target.value)}>
            </input>

            <button onClick={resetInput}>Reset</button>

            <div>My name is {name}</div>
        </div>

    );
}

