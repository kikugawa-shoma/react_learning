import React, { useState } from 'react'

const devices=[
    {
        id:"monitor",
        value:"モニター"
    },
    {
        id:"mouse",
        value:"マウス"
    },
    {
        id:"keyboard",
        value:"キーボード"
    },
]

function InputCheckbox(){
    const [checkedDevices, setcheckedDevices]=useState([])

    function handlechange(e){
        if(checkedDevices.includes(e.target.value)){
            setcheckedDevices(
                checkedDevices.filter((device)=>{
                    return device !== e.target.value
                })
            )
        }
        else{
            setcheckedDevices(
                [...checkedDevices,e.target.value]
            )
        }
    }

    let devicesElements=devices.map((obj,index)=>{
        return(
            <div key={index}>
                <input 
                    type="checkbox" 
                    id={obj.id} 
                    name="devices" 
                    onChange={handlechange} 
                    value={obj.value}
                    />
                <label htmlFor={obj.id}>{obj.value}</label>
            </div>
        )
    })

    return(
        <div>
            <h1>必要なものは：{checkedDevices.join(",")}</h1>
            {devicesElements}
        </div>
    )
}

export default function App(){
    return(
        <InputCheckbox />
    )
}