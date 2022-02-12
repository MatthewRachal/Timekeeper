import React from 'react'
import {useAppStore} from "../appStore"


export default function StartTime(props) {

//In the case that you can't get the startTime from the URL, it will be the default value calculated in our store
const startTime = useAppStore(state => state.startTime)

  return (
    <div className="timeDiv">
        <h5 className="text1">Start Time (milliseconds): 
        {props.data !== null 
        ? 
        props.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        : 
        startTime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
        </h5>
    </div>
  )
}

