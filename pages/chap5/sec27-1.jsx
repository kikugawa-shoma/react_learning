//このコードが謎に動く理由を解明したい

import { useState,useEffect } from "react"


function Counter({count,setCount}){

    function CountUp(c,setf){
        setf((c)=>{return c+1})
        //setf(c+1)
        console.log(c)
    }

    useEffect(() => {
        setInterval(CountUp,1000,count,setCount)
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