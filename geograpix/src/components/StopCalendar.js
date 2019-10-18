import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StopCalendar = (props) => {
    
    // const [stopDate, setStopDate] = useState(new Date());
    
    // console.log("Stop Date", props.stopDate)

    return (
        <DatePicker
            style={{margin: '40px 0%', zIndex: '1000'}}
            selected={props.stopDate} 
            onChange={date => props.setStopDate(date)}
            inline 
            showYearDropdown
            showMonthDropdown
        />
    )
}

export default StopCalendar;