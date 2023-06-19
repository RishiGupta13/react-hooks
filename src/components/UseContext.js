import { CounterContext } from "./CounterContext"
import { useContext } from "react"

export const UseContexthook =()=>{
    const greeting=useContext(CounterContext);

    return (
        <h2>{greeting}</h2>
    );

}