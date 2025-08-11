// src/services/weatherService.js

const API_KEY = '75bf30fa8ca04dd3849150851251108';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
 };

export {
    show 
}