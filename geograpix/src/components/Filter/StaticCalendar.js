import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from 'date-fns';


const StaticCalendar = (props) => {
    const [stDate, setStDate] = useState(new Date())
    const [stpDate, setStpDate] = useState(new Date())

    const date = new Date()

    useEffect(() => {
        setStDate(props.startDate)
        setStpDate(props.stopDate)
    }, [props.startDate, props.stopDate])

    const startUnix = !stDate ? 'null' : stDate.getTime()
    const stopUnix = !stpDate ? 'null' : stpDate.getTime()

    // const stfix = !stDate ? new Date() : stDate
    // const stopfix = !stpDate ? new Date() : stpDate

    const range = (stopUnix - startUnix)/(1000 * 3600 * 24)

    return (
        <>
            <DatePicker
                inline
                minDate={props.startDate}
                maxDate={addDays(props.startDate, range)}
                // selected={props.startDate}
                openToDate={props.startDate}
                highlightDates={[subDays(!props.startDate ? new Date(props.startDate) : props.startDate, 0), addDays(!props.stopDate ? new Date(props.stopDate) : props.stopDate, 0)]}
            />
        </>
    );
};

export default StaticCalendar;