import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import img from '../../assets/filter.png'
 
const StartCalendar = (props) => {

    // const ExampleCustomInput = ({ value }) => {
    //     return (
            
    //         <div>
    //             <input />
    //             <img src={img} alt='test' />
    //         </div>

    //       );
    // }
    

    return (
        <>
            <h4>Start Date</h4>
            
            <DatePicker
                selected={props.startDate} 
                onChange={date => props.setStartDate(date)} 
                // inline
                showYearDropdown
                showMonthDropdown
                className='input'
                isClearable
                placeholderText="Click Here ..."
                dateFormat="MMMM d, yyyy"
                // customInput={<ExampleCustomInput />}
            />
        </>
    )
}

export default StartCalendar;