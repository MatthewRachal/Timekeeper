import React from 'react'
import Nav from "../Reusable/Nav"
import Duration from '../Reusable/Duration'
import StartTime from '../Reusable/StartTime'
import EndTime from '../Reusable/EndTime'
import {useSearchParams} from 'react-router-dom';


export default function ScreenC() {

const [searchParams] = useSearchParams();

  return (
    <div>
        <Nav />
        <h5 className="screenHeader">Screen C</h5>
        <Duration url="/screen-c" data={[...searchParams]}/>
        <StartTime data={searchParams.get('startTime')} />
        <EndTime data={searchParams.get('endTime')}/>
    </div>
  )
}
