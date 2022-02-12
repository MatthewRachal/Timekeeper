import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useAppStore} from "../appStore"


export default function Nav() {

    const duration = useAppStore(state => state.duration)

    const updateEndTime = useAppStore(state => state.changeEndTime)
    const updateStartTime = useAppStore(state => state.changeStartTime)

    const navigate = useNavigate();

    const directScreen = (url) => {
        let newEndTime = Date.now();
        updateEndTime(newEndTime)
        updateStartTime(newEndTime - duration)
        navigate(url+`?duration=${duration}&startTime=${newEndTime - duration}&endTime=${newEndTime}`)
    }

  return (
    <ul className="navUl">
        <li onClick={e=>{directScreen('/screen-a')}} className="navLi">Screen A</li>
        <li onClick={e=>{directScreen('/screen-b')}} className="navLi">Screen B</li>
        <li onClick={e=>{directScreen('/screen-c')}} className="navLi">Screen C</li>
    </ul>
  )
}

