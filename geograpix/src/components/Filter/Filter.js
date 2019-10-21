import React, { useState } from 'react';

import StopCalendar from './StopCalendar'
import StartCalendar from './StartCalendar'

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
                <button onClick={toggleDatePicker}>Filter</button>
            </div>
            {showDatePicker ? (
                <div className="date-picker">
                    <div onClick={closeDatePicker}>&times;</div>
                    <h3>Filter Pictures</h3>
                    <StartCalendar startDate={props.startDate} setStartDate={props.setStartDate} />
                    <StopCalendar stopDate={props.stopDate} setStopDate={props.setStopDate} />
                </div>
            ): null}
        </>
    )
}

export default Filter;