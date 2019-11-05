import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./styles.scss"
import { spawn } from "child_process"

const generate_year_range = (start: number, end: number) => {
  var years = []
  for (var year = start; year <= end; year++) {
    years.push(year)
  }
  return years
}

const english_ordinal_suffix = (dt: any) => {
  return (
    <div className="calendar__date">
      <span className="calendar__date__num">{dt.getDate()}</span>
      <span className="calendar__date__suf">
        {dt.getDate() % 10 == 1 && dt.getDate() != 11
          ? "st"
          : dt.getDate() % 10 == 2 && dt.getDate() != 12
          ? "nd"
          : dt.getDate() % 10 == 3 && dt.getDate() != 13
          ? "rd"
          : "th"}
      </span>
    </div>
  )
}

const TimeMachine: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date())
  const years = generate_year_range(1990, 2019)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  return (
    <div className="timeMachine">
      <DatePicker
        title="timeMachine"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        inline
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="rd__header">
            <span className="rd__title">Time Machine</span>
            <select
              className="select_months"
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="rd__header__dots">...</span>
            <span className="uikit-calendar"></span>
          </div>
        )}
      />
      <div className="timeMachine__bottom">
        <div className="calendar__date__wrap">
          {english_ordinal_suffix(startDate)}
        </div>
        <div className="calendar__ivents__wrap">
          <div className="calendar__ivent">
            <div className="calendar__ivent__time">09:30</div>
            <p className="calendar__ivent__title">Boring meeting</p>
            <span className="uikit-flash calendar__ivent__icon"></span>
          </div>
          <div className="calendar__ivent">
            <div className="calendar__ivent__time">17:00</div>
            <p className="calendar__ivent__title">Buy more TP</p>
            <span className="uikit-cup calendar__ivent__icon"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeMachine
