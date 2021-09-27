//useEffectを利用したタイマー
import { useState,useEffect } from "react"


function Counter({count,setCount}){

    function CountUp(setf){
        setf((c)=>{return c+1})
    }

    useEffect(() => {
        setInterval(CountUp,1000,setCount)
    },[])
    return(
        <h1>{count}</h1>
    )
}


export default function App(){
    const [count,setCount]=useState(0)
    return(
        <Counter count={count} setCount={setCount}/>
    )
}