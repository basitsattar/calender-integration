import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import { isEqual } from "date-fns";
import { format } from "date-fns";
import 'react-nice-dates/build/style.css'
function DatePickerComponent({ unavailableDates = [] }) {
    const [date, setDate] = useState();
    const modifiers = {
        disabled: (date) => {
            const isDisabled = unavailableDates.map(date => new Date(date)).some((dateToDisable) =>
                isEqual(dateToDisable, date)
            );

            return isDisabled;
        }
    }

    return (
        <div>
            <p>
                Selected date:{" "}
                {date ? format(date, "dd MMM yyyy", { locale: enGB }) : "none"}.
            </p>

            <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} modifiers={modifiers}>
                {({ inputProps, focused }) => (
                    <input
                        className={'input' + (focused ? ' -focused' : '')}
                        {...inputProps}
                    />
                )}
            </DatePickerCalendar>
        </div>
    )
}
export default DatePickerComponent;