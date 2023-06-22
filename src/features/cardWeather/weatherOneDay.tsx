import React from 'react'
import { Weather } from '../Type/weather.type'

const WeatherOneDay = ({ day }: { day: Weather | false }): JSX.Element => {
 return (
    <div>
      {day !== false &&
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Дата:{day.data}</h5>
            <p className="card-text">Температура:{day.main.temp} градусов</p>
            <p className="card-text">Давление: {day.main.pressure}</p>
            <p className="card-text">Скорость ветра: {day.wind.speed}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default WeatherOneDay