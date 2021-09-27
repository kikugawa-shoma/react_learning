import React,{useState,useEffect} from "react";

const INITIAL_COUNT=0

function Timer(){
    const [count, setCount] = useState(INITIAL_COUNT)

    function countReset(){
        setCount(INITIAL_COUNT)
    }

    function countIncrement(){
        setCount((prevCount)=>{return prevCount+1})
        console.log("カウントアップ +1")
    }

    function callbackFunction(){
        alert("副作用関数が実行されました")
        const timerID = setInterval(countIncrement,1000)
        return ()=>{
            console.log("タイマーが削除されました")
            clearInterval(timerID)
        }
    }

    useEffect(callbackFunction, [])

    return(
        <div>
            <p>現在のカウント数：{count}</p>
            <button onClick={countReset}>リセット</button>
        </div>
    )
}

export default function App(){

    const [isDisplay, setIsDisplay] = useState(true)

    function handleToglleIsDisplay(){
        setIsDisplay((isDisplay)=>{return !isDisplay})
    }

    return(
        <>
        <button onClick={handleToglleIsDisplay}>
            {isDisplay ? "タイマーを非表示" : "タイマーを表示"}
        </button>
        {isDisplay && <Timer />}
        </>
    )
}