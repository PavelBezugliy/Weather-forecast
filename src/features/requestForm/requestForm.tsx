import React, { useState } from 'react'
import axios from "axios"
import { WeatherList } from '../Type/weather.type'


const RequestForm = ({ weather, setWeather }: { weather: WeatherList, setWeather: (el: WeatherList) => void }): JSX.Element => {
  const [city, setCity] = useState<string>("")
  const [notFound, setNotFound] = useState(false)
  const key: string = "6973bf8c7fe459ed28e6079218500e50"

  const search = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},ru&appid=${key}&units=metric`)
      .then((response) => setWeather(response.data))
      .catch((error) => {
        setWeather(error);
        setNotFound(true)
      })
    setNotFound(false)
  }

  return (
    <div>
      <div className="input-group mb-3 requestForm">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={search}>Поиск</button>
      </div>
      {notFound && <span className='requestForm'>Город не найден, попробуйте изменить запрос</span>}
    </div>
  )
}
export default RequestForm