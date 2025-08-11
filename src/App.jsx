// src/App.jsx
// src/App.jsx
import { useState, useEffect } from 'react';


// src/App.jsx
import * as weatherService from './services/weatherService.js';

// src/App.jsx
import WeatherSearch from './components/WeatherSearch/WeatherSearch';

// src/App.jsx
import WeatherDetails from './components/WeatherDetails/WeatherDetails';



const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      tempature: data.current.temp_c,
      condition: data.current.condition.text
    }
    setWeather(newWeatherState);
  }

  // src/App.jsx
  useEffect(() => {

    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show('Quito');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    // Call the fetch function when the page loads:
    fetchDefaultData();

  }, []);


  console.log('State:', weather);
  

  return (
    <main>
    <h1>Weather API</h1>
    <WeatherSearch />
    <WeatherDetails weather={weather} />
    </main>
  );
}

export default App

