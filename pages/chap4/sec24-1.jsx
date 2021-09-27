import React, { useState } from "react"

function Title(props){
    return(
        <h1>I love {props.titleValue}</h1>
    )
}

function InputForm(props){
    function setInputValue(e){
        props.setInputValue(e.target.value)
    }
    return(
        <input type="text" onChange={setInputValue} value={props.inputValue}/>
    )
}

function InputButton(props){
    function setTitle(e){
        props.setTitleValue(props.inputValue)
        props.setInputValue("")
    }
    return(
        <button onClick={setTitle}>入力</button>
    )
}

export default function App(){
    const [inputValue,setInputValue]=useState("")
    const [titleValue, setTitleValue]=useState("Javascript")
    return(
        <div>
            <Title titleValue={titleValue} setTitleValue={setTitleValue}/>
            <InputForm inputValue={inputValue} setInputValue={setInputValue}/>
            <InputButton inputValue={inputValue} setTitleValue={setTitleValue} setInputValue={setInputValue}/>
        </div>
    )
}