import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar(props){
    console.log(props.customDate);
    const [date, setDate] = useState(props.customDate);
    return(
        <div className='app'>
            <h1 className='text-center'>Custom Calendar Date Highlighter</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            </div>
    );
}
export default CustomCalendar;
