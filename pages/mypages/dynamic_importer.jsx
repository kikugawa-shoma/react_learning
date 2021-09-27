import React, {useEffect} from "react"
import dynamic from 'next/dynamic'

const DynamicComponent=dynamic(()=>import('./test_modules/dynamic_component'),{ssr:false})


export default function index(){


    return (
        <div>
            <h1>hello </h1>
            <DynamicComponent />
        </div>
    )
}

