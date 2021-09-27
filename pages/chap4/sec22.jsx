
let sampleList = [1,2,3,4,5]

function ListItems(){
    let items=sampleList.map((value,index)=>{
        return <li key={index}>{value*value}</li>
    })
    return(
        <ul>{items}</ul>
    )
}


export default function App(){
    return(
        <ListItems />
    )
}