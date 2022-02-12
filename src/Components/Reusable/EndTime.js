import React from 'react'
import {useAppStore} from "../appStore"


export default function EndTime(props) {

//In the case that you can't get the endTime from the URL, it will be the default value calculated in our store
const endTime = useAppStore(state => state.endTime)
    
  return (
    <div className="timeDiv">
        <h5 className="text1">End Time (milliseconds):  
        {props.data !== null 
        ? 
        props.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        : 
        endTime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h5>
    </div>
  )
}

