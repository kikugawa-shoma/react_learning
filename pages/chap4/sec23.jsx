import React from "react"

function handleClick(){
    console.log("クリックされました")
    alert("購入確定")
}

function SampleButton(){
    return(
        <input type="button" value="ボタン" onClick={handleClick}/>
    )
}

export default function App(){
    return(
        <SampleButton />
    )
}