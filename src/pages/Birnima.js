import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../pages/birnima.css';
import moment from "moment";

function Birnima(props) {
    const {days} = props

    return (
        <div className='birnima m-3' style={{alignItems: "end"}}>
            <Calendar onChange={(e) => console.log(e.target.value)}
                tileClassName={({date, view}) => {
                    if (days.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                              return 'highlight'}
                    }
                }

            />
            <p className="text-center text-dark mt-2 text-calendar"><span>
                <div className="red-color me-1"></div>
            </span> - Busy days</p>
        </div>
    );
}

export default Birnima;