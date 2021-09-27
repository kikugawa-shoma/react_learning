import { useState } from "react"

function InputselectBox(){
    const [value, setValue]=useState("")
    const prefecs=["選択してください","大阪","東京","名古屋"]
    const options=prefecs.map((prefec,index)=>{
        if(prefec === "選択してください"){
            return <option key={index} value="">{prefec}</option>
        }
        else{
            return <option key={index} value={prefec}>{prefec}</option>
        }
    })

    return(
        <div>
            <h1>あなたの好きな都道府県は{value}</h1>
            <select name="inputselectbox" value={value} onChange={(e)=>{setValue(e.target.value)}}>
                {options}
            </select>
        </div>
    )

}


export default function App(){
    return(
        <InputselectBox />
    )
}