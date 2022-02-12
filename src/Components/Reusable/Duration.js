import React, {useState, useEffect} from 'react'
import {useAppStore} from "../appStore"
import {useNavigate} from 'react-router-dom';


export default function Duration(props) {

//I decided that there was no need to have this input State be stored in our store so it is placed locally here
const [customInput, changeCustomInput] = useState('');

const duration = useAppStore(state => state.duration)
const endTime = useAppStore(state => state.duration)
const updateDuration = useAppStore(state => state.changeDuration)
const updateEndTime = useAppStore(state => state.changeEndTime)
const updateStartTime = useAppStore(state => state.changeStartTime)

const navigate = useNavigate();

//Updates with a custom duration given an input
const createNewDuration = () => {
    let newDuration = parseInt(customInput)
    newDuration = newDuration * 60000 //The User input is in minutes so we need to convert this to milliseconds
    let newEndTime = Date.now();

    updateDuration(newDuration)
    updateEndTime(newEndTime)
    updateStartTime(newEndTime - newDuration)
     
    navigate(props.url+`?duration=${newDuration}&startTime=${newEndTime - newDuration}&endTime=${newEndTime}`)
}

useEffect(() => {
  if(props.data.length > 0)
  {
    if(duration !== props.data[0][1] || endTime !== props.data[1][1])
    {
      refreshStore();
    }
  }
})

//In the event that the user refreshes the page with a existing url and search terms, make sure the state is synced up as well from
//the URL search props
const refreshStore = () => {
  updateDuration(parseInt(props.data[0][1]))
  updateStartTime(parseInt(props.data[1][1]))
  updateEndTime(parseInt(props.data[2][1]))
}


  return (
    <div className="durationDiv">
        <h5 className="text1">Enter Custom Duration</h5>
        <h6 className="subText1">Default Duration: 1 minute (60,000 milliseconds)</h6>
        
        <label className="inputLabel">Enter Custom Input (Minutes) </label>
        <input 
          type="number" 
          onChange={e=>{e.preventDefault(); changeCustomInput(e.target.value)}}
          value={customInput} />
        <button 
          disabled={customInput.length <= 0 ? true : false} 
          className="customButton" 
          onClick={e=>{e.preventDefault(); createNewDuration();}}>
          Enter
        </button>

        <h6 className="subText1">Current Type: {duration === 60000 ? "Default" : "Custom"}</h6>
        <p className="subText1">NOTE: All calculations based on Date.now which calculates a date based on the milliseconds since 1970</p>
        <h5 className="text1">Current Duration: {props.data.length > 0 ? props.data[0][1] / 60000 : duration / 60000} Min</h5> 
    </div>
  )
}
