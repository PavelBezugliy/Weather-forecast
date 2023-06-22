import React from 'react'
import WeatherOneDay from './weatherOneDay'
import { WeatherList } from '../Type/weather.type'
import { dateWeather } from './date'
import Example from '../diagramsWeather/diagrams'

const WeatherAllDay = ({ weather }: { weather: WeatherList }): JSX.Element => {
  const arrDateWeather = dateWeather(weather)
  return (
    <div>
      <div className='weatherOneDay'>
        {arrDateWeather.map((day) =>
          <WeatherOneDay day={day} />)}</div>
      <div className='example'><Example weather={weather} /></div>
    </div>
  )
}

export default WeatherAllDay