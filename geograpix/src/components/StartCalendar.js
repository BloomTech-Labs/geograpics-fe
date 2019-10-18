import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StartCalendar = (props) => {
    
    // const [startDate, setStartDate] = useState(new Date());

    // console.log("Start Date", props.startDate)
    
    return (
        <DatePicker
            style={{margin: '40px 0%', zIndex: '1000'}}
            selected={props.startDate} 
            onChange={date => props.setStartDate(date)} 
            inline
            showYearDropdown
            showMonthDropdown
        />
    )
}

export default StartCalendar;