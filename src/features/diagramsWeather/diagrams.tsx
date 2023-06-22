import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { WeatherList } from "../Type/weather.type";


export default function Example({ weather }: { weather: WeatherList }): JSX.Element {
  const [render, setRender] = useState([{}])

  useEffect(() => {
    if (weather.list !== undefined && weather.list?.length > 0) {
      setRender([
        {
          name: "Page A",
          Температура: weather?.list?.[0].main?.temp,
        },
        {
          name: "Page B",
          Температура: weather?.list?.[8].main?.temp,
        },
        {
          name: "Page C",
          Температура: weather?.list?.[16].main?.temp,
        },
        {
          name: "Page D",
          Температура: weather?.list?.[24].main?.temp,
        },
        {
          name: "Page E",
          Температура: weather?.list?.[32].main?.temp,
        }])
    }

  }, [weather])

  return (
    <LineChart
      width={500}
      height={300}
      data={render}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Температура"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}