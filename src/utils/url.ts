import { apikey } from "../credentials";

export const linkToRepository = 'https://github.com/kevinthicke/-React-Typescript-weather-app';
export const titleApp = 'Weather App';

const url = "http://api.openweathermap.org/data/2.5/"

export const urlWeather = (city: string) => `${url}weather?q=${city}&APPID=${apikey}`;

//const urlForecast = city => `${url}forecast?q=${city}&APPID=${apiKey}`;
