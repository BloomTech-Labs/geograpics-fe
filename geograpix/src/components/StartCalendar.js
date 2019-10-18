import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
 
const StartCalendar = () => {
    
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate)
    
    return (
        <DatePicker
            style={{margin: '40px 0%', zIndex: '1000'}}
            selected={startDate} 
            onChange={date => setStartDate(date)} 
            inline
        />
    )
}

export default StartCalendar;