import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StopCalendar = () => {
    
    const [stopDate, setStopDate] = useState(new Date());
    
    console.log(stopDate)

    return (
        <DatePicker
            style={{margin: '40px 0%', zIndex: '1000'}}
            selected={stopDate} 
            onChange={date => setStopDate(date)}
            inline 
        />
    )
}

export default StopCalendar;