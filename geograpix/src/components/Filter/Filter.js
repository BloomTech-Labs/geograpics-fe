import React, { useState } from 'react';

import StopCalendar from './StopCalendar'
import StartCalendar from './StartCalendar'
import ProfileBar from '../ProfileBar'

//media
import filterImg from '../../assets/filter.png'

const Filter = props => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = (e) => {
      e.preventDefault();
      setShowDatePicker(!showDatePicker)
    }

    const closeDatePicker = (e) =>{
      e.preventDefault()
      setShowDatePicker(!showDatePicker)
    }
    console.log('FILTER', props);

    return(
        <>
            <div className="filter-panel">
                <button onClick={toggleDatePicker}><img src={filterImg} alt='filter img'/></button>
            </div>
            {showDatePicker ? (
                <div className="date-picker">
                    <div onClick={closeDatePicker}>&times;</div>
                    {/* <ProfileBar {...props}/> */}
                    <h3>Refine search by date</h3>
                    <StartCalendar startDate={props.startDate} setStartDate={props.setStartDate} />
                    <StopCalendar stopDate={props.stopDate} setStopDate={props.setStopDate} />
                </div>
            ): null}
        </>
    )
}

export default Filter;