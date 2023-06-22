import React, { useState } from 'react';
import { WeatherList } from "../features/Type/weather.type"
import './App.css';
import Header from '../features/header/header';
import WeatherAllDay from '../features/cardWeather/weatherAllDay';
import RequestForm from '../features/requestForm/requestForm';

function App(): JSX.Element {
  const [weather, setWeather] = useState<WeatherList>({ list: [] })
  return (
    <div className="App">
      <Header />
      <RequestForm weather={weather} setWeather={setWeather} />
      <WeatherAllDay weather={weather} />
    </div>
  );
}

export default App;
