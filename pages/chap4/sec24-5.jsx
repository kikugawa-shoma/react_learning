import React, { useState } from "react";

let devices=[
    {
        value:"モニター",
        id:"monitor"
    },
    {
        value:"マウス",
        id:"mouse"
    },
    {
        value:"キーボード",
        id:"keyboard"
    },
]

function InputCheckBox(){
    const [checkedDevices, setCheckedDevices]=useState(
        {
            "マウス":false,
            "モニター":false,
            "キーボード":false,
        }
    )

    function handleChange(e){
        setCheckedDevices(
            {...checkedDevices, [e.target.value]:e.target.checked}
        )
    }

    const checkedDevicesArray=Object.entries(checkedDevices).reduce(
        (pre,[key,value])=>{
            if(value){
                pre.push(key)
            }
            return pre
        },[]
    )

    let InputElements=devices.map((obj,index)=>{
        return (
            <div key={index}>
                <input 
                type="checkbox" 
                name="device" 
                id={obj.id} 
                value={obj.value} 
                onChange={handleChange}
                />
                <label htmlFor={obj.id}>{obj.value}</label>
            </div>
        )
    })

    return(
        <div>
            <h1>必要なものは:{checkedDevicesArray.join(",")}</h1>
            {InputElements}
        </div>
    )
}

export default function App(){
    return(
        <InputCheckBox />
    )
}