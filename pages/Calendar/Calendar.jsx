import React, { useState } from "react";
import styles from "./Calendar.module.css"

const All_DAYS_IN_WEEK=7
const JAPAN_STANDARD_TIME = new Date().toLocaleString({timezone:"Asia/Tokyo"})


function DayTile({date,isActive,selectedDates,setSelectedDates}){
    let selectedDateStrings = []
    for(let i=0;i<selectedDates.length;i++){
        selectedDateStrings.push(selectedDates[i].toDateString())
    }

    function clickhandler(){
        if(selectedDateStrings.includes(date.toDateString())){
            setSelectedDates((prevSelectedDates)=>{
                return prevSelectedDates.filter((preDate)=>{return preDate.toDateString() !== date.toDateString()})
            })
        }
        else{
            setSelectedDates((prevSelectedDates)=>{
                return [...prevSelectedDates,date]
            })
        }
    }

    if(isActive){
        if(selectedDateStrings.includes(date.toDateString())){
            return(
                <button className={styles.SelectedTile} onClick={clickhandler}>{date.getDate()}</button>
            )
        }
        else{
            return(
                <button className={styles.ActiveTile} onClick={clickhandler}>{date.getDate()}</button>
            )
        }
    }
    else{
        return(
            <button className={styles.DeactiveTile} ></button>
        )
    }
}

function DayTiles({year,month,selectedDates,setSelectedDates}){
    function createDateElements(year,month){
        function dayConvert(day){
            if(day-1 < 0){
                return 6
            }
            else{
                return day-1
            }
        }
        const dateElements = [] //html要素の配列を入れる入れ物
        const firstDate = new Date(year, month, 1) //当月初日
        const lastDate = new Date(year,month+1, 0) //当月最終日
        const nextMonthFirstDate = new Date(year,month+1,1) //次月初日
        const firstDay = dayConvert(firstDate.getDay()) //当月初日の曜日
        const lastDay = dayConvert(lastDate.getDay()) //当月最終日の曜日
        const span = (nextMonthFirstDate - firstDate) / 86400000 //当月日数
        for(let i=0;i<firstDay;i++){
            dateElements.push(
                <td key={-i-1}>
                    <DayTile 
                    date={null}
                    isActive={false}
                    selectedDates={selectedDates}
                    setSelectedDates={setSelectedDates}
                    />
                </td>
            )
        }
        for(let i=0;i<span;i++){
            dateElements.push(
                <td key={i+1}>
                    <DayTile 
                    date={new Date(year,month,i+1)}
                    isActive={true}
                    selectedDates={selectedDates}
                    setSelectedDates={setSelectedDates}
                    />
                </td>
            )
        }
        for(let i=0;i<All_DAYS_IN_WEEK-1-lastDay;i++){
            dateElements.push(
                <td key={span+i+1}>
                    <DayTile 
                    date={null}
                    isActive={false}
                    selectedDates={selectedDates}
                    setSelectedDates={setSelectedDates}
                    />
                </td>
            )
        }
        return dateElements
    }
    let dateElements = createDateElements(year,month)
    let weekElements = []
    for(let i=0;i<dateElements.length/All_DAYS_IN_WEEK;i++){
        weekElements.push(
            <tr key={i}>{dateElements.slice(i*All_DAYS_IN_WEEK,i*All_DAYS_IN_WEEK+All_DAYS_IN_WEEK)}</tr>
        )
    }

    return(
        <React.Fragment>
            <table>
                <thead>
                    <tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr>
                </thead>
                <tbody>
                    {weekElements}
                </tbody>
            </table>
        </React.Fragment>
    )
}


function Calendar({selectedDates,setSelectedDates}){
    const now = new Date(JAPAN_STANDARD_TIME)
    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth())

    function decrementMonth(){
        if(month == 0){
            setMonth(11)
            setYear(year-1)
        }
        else{
            setMonth(month-1)
        }
    }

    function incrementMonth(){
        if(month == 11){
            setMonth(0)
            setYear(year+1)
        }
        else{
            setMonth(month+1)
        }
    }

    return(
        <React.Fragment>
            <h1 className={styles.a}>Calendar</h1>
            <h1>{year}年{month+1}月</h1>
            <button onClick={decrementMonth}>&lt;</button>
            <button onClick={incrementMonth}>&gt;</button>
            <DayTiles 
            year={year}
            month={month}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            />
        </React.Fragment>
    )
}

export default function App(){
    const [selectedDates,setSelectedDates] = useState([])
    return(
        <React.Fragment>
            <Calendar 
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            //TODO:ステータスを追加(その日が予約可能か？などのステータス)
            />
            <p>{selectedDates.map((d)=>{return d.toDateString()}).join(",")}</p>
        </React.Fragment>
    )
}