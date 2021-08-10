interface ICondition {
  text: string,
  icon: string
}

export interface IForecastDay {
  date: string,
  day: {
    maxtemp_c: number,
    mintemp_c: number,
    avgtemp_c: number,
    maxwind_mph: number,
    avghumidity: number,
    condition: ICondition
  }
  astro: {
    sunrise: string,
    sunset: string
  }
}

export interface IForecast {
  location: {
    name: string,
    country: string,
    localtime: string
  },
  current: {
    last_updated: string,
    temp_c: number,
    condition: ICondition,
    wind_mph: number,
    humidity: number,
    cloud: number,
    feelslike_c: number
  },
  forecast: {
    forecastday: IForecastDay[]
  }
}