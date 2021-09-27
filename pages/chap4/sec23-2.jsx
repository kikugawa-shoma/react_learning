function handleChange(e){
    console.log(e.target.value)
}

function SampleInputText(){
    return(
        <input type="text" defaultValue="a" onChange={handleChange}/>
    )
}

export default function App(){
    return(
        <SampleInputText />
    )
}