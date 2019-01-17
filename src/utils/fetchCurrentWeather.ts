import { urlWeather } from './url';

export const fetchCurrentWeather = (city:string) => {
    const url: string  = urlWeather(city);

    return fetch(url).then(
        (response: Response) => response.json()).then( 
            (fullData: Object) => console.log(fullData));
}
