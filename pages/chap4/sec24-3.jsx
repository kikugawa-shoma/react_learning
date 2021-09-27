import { useState } from "react"

const colors=[
    {
        value:"赤",
        id:"red"
    },
    {
        value:"緑",
        id:"green"
    },
    {
        value:"青",
        id:"blue"
    },
]

function DisplaySelected(props){
    return(
        <h1>現在選択されている値：{props.selectedColor}</h1>
    )
}

function RadioButton(props){
    function setCheckedColor(e){
        props.setColor(e.target.value)
    }
    const radioButtons=colors.map((obj,index)=>{
        return(
            <div key={index}>
                <input type="radio" name="radio1" value={obj.value} id={obj.id} onChange={setCheckedColor}/>
                <label for={obj.id}>{obj.value}</label>
            </div>
        )
    })
    return(
        <div>{radioButtons}</div>
    )

}


export default function App(){
    const [selectedColor, setColor]=useState("")
    return(
        <div>
            <DisplaySelected selectedColor={selectedColor}/>
            <RadioButton setColor={setColor}/>
        </div>
    )
}