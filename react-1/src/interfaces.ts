export interface IForecast {
    location: {
      name: string,
      country: string
    },
    current: {
      last_updated: string,
      temp_c: number,
      condition: {
        text: string,
        icon: string
      },
      wind_mph: number,
      humidity: number,
      cloud: number,
      feelslike_c: number
    }
  }

export const apiKey = "bb22293635f54ba5962131939211307"