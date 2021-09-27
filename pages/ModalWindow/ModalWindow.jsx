import React,{useState} from "react"
import styles from "./ModalWindow.module.css"


function ModalWindow({toggle}){
    return(
        <React.Fragment>
            <div className={styles.overlay}>
                <div className={styles.modalWindowContent}>
                    <p>モーダルウィンドウが表示されました</p>
                    <button onClick={toggle}>return</button>
                </div>
            </div>
        </React.Fragment>
    )
}


export default function App(){
    const [isOverLay,setIsOverLay] = useState(false)
    function toggle(){
        setIsOverLay(!isOverLay)
    }
    return(
        <React.Fragment>
            <h1>モーダルウィンドウ</h1>
            <button onClick={toggle}>Click</button>
            <p>now state is {String(isOverLay)}</p>
            { isOverLay && <ModalWindow toggle={toggle}/> }
        </React.Fragment>
    )
}