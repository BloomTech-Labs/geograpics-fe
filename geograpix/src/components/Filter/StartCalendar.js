import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StartCalendar = (props) => {
    
    // const [startDate, setStartDate] = useState(new Date());

    // console.log("Start Date", props.startDate)

    function clearStartDate() {
        props.setStartDate(null);
    }
    
    return (
        <>
            <h4>Start Date <button onClick={clearStartDate}>clear</button></h4>
            
            <DatePicker
                selected={props.startDate} 
                onChange={date => props.setStartDate(date)} 
                inline
                showYearDropdown
                showMonthDropdown
            />
        </>
    )
}

export default StartCalendar;