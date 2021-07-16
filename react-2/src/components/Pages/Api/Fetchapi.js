import axios from 'axios';


export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get('http://127.0.0.1:8000/weather/' + `${cityname}`);
        return data.Weather;
    }catch(error) {
        throw error;
    }
}