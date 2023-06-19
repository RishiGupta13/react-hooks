import { useState ,useReducer} from "react"

export const UseReducerhook=()=>{

    const initialSate=0;
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
            return state+1;
        
        case "decrement":
            return state-1;
        default:
            throw new Error();
       
        }

    }

    const [state,dispatch]=useReducer(reducer,initialSate);


    return (
        <div>
            <h2>UseReducerhook</h2>
            <div>{state}</div>

            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
        
    );

}