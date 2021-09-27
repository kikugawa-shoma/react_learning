import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function MyCalendar(props){
    function ChangeSelectedDate(){
        props.setDate(props.date)
    }
    return(
        <Calendar
            value={props.date}
            onChange={props.setDate}
            onClickDay={ChangeSelectedDate}
            locale={"JP"}
            />
    )
}

function LayoutDisplay(props){
    function isOddDate(date){
        return date.getDate() % 2 === 1
    }
    return(
        <div>
            <h1>{props.date.getMonth()}月{props.date.getDate()}日のレイアウト</h1>
            <h1>{isOddDate(props.date)?"奇数日です":"偶数日です"}</h1>
        </div>
    )
}

export default function App(){
    const [date, setDate]=useState(new Date())
    return(
        <div>
            <MyCalendar date={date} setDate={setDate}/>
            <LayoutDisplay date={date} setDate={setDate}/>
        </div>
    )
}