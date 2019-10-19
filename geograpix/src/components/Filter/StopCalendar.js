import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StopCalendar = (props) => {
    
    // const [stopDate, setStopDate] = useState(new Date());
    
    // console.log("Stop Date", props.stopDate)

    function clearEndDate() {
        props.setStopDate(null);
    }

    return (
        <>
            <h4>End Date <button onClick={clearEndDate}>clear</button></h4>
            
            <DatePicker
                selected={props.stopDate} 
                onChange={date => props.setStopDate(date)}
                inline 
                showYearDropdown
                showMonthDropdown
            />
        </>
    )
}

export default StopCalendar;