import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = ({ unavailableDates =[], getUnavailableDates=()=>{}}) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const onChange = (date) => {
        setSelectedDate(date);
    };
    const onMonthChange = (date) => {
        getUnavailableDates(date.getMonth());
    }
       
    
    return (
        <DatePicker
        excludeDates={unavailableDates.map(date=>new Date(date))}
            selected={selectedDate}
            onChange={onChange}
            onMonthChange={onMonthChange}
            minDate={new Date()}
            showTimeSelect
            inline
        />
    );
}

export default DatePickerComponent;

