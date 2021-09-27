import React, {useState} from "react";

function LoginButton(props){
    return(
        <button onClick={props.toggleIsLoggedIn}>ログイン</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
    )
}

function LoginControl(){
    let [isLoggedIn,setIsLoggedIn] = useState(false)
    function toggleIsLoggedIn(){
        setIsLoggedIn(!isLoggedIn)
    }
    if(isLoggedIn){
        return(
            <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn}/>
        )
    }
    else{
        return(
            <LoginButton toggleIsLoggedIn={toggleIsLoggedIn}/>
        )
    }
}

export default function App(){
    return(
        <LoginControl />
    )
}
