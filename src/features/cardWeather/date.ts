import { WeatherList } from "../Type/weather.type"

//вспомогательная функция для подсчета даты на последующие дни
export const arrDate = (): string[][] => {
  let day = new Date().toLocaleDateString()
  let arr = []
  for (let i = 0; i <= 4; i += 1) {
    let toDay = day.split(".").splice(1)
    let nextDay = new Date(+new Date() + 86400000 * i).getDate()
    arr.push(nextDay.toString().split(" ").concat(toDay))
  }
  return arr
}

//функция фильтрующая данные с API и добавляющая к ней ее дату
export const dateWeather = (weather: WeatherList) => {
  let filterWeather = []
  let funcDate = arrDate()

  if (weather.list?.length !== undefined) {
    for (let i = 0; i < weather.list?.length; i += 1) {
      (i % 8 === 0 || i === 0) && filterWeather.push(weather.list[i])
    }
  }

  let arrDateWeather = filterWeather.map((el, i) =>
    typeof el === "object" && { ...el, data: funcDate[i].join(".") })

  return arrDateWeather

}