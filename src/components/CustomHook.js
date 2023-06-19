import { useCounter } from "./useCounterCustom" 

export const CustomHook=()=>{
    const [count,increment,decrement,reset]=useCounter(0);

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>

    );



}