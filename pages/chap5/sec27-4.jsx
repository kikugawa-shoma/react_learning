import { useState,useEffect } from "react"


function apiWrapper(setter){
    fetch("http://localhost:3000/api/hello")
    .then(res=>res.json())
    .then(res=>{setter(res.name)})
}

export default function App(){

    const [name,setName] = useState("")

    apiWrapper(setName)

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}