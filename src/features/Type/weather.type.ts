export type WeatherList = {
  list: Weather[]
}

export type Weather = {
  data: string,
  dt: Number,
  main: {
    pressure: string,
    temp: string,
    temp_max: Number,
    temp_min: Number,
  },
  wind: {
    speed: string
  }
}