import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export const Weather = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [lat, lon] = latlng ?? [];

  useEffect(() => {
    if (lat === undefined) return;

    let ignore = false;

    const getWeather = async () => {
      try {
        const { data } = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          { params: { lat, lon, units: 'metric', appid: API_KEY } },
        );
        if (!ignore) setWeather(data);
      } catch {
        if (!ignore) setError(true);
      }
    };
    getWeather();

    return () => {
      ignore = true;
    };
  }, [lat, lon]);

  if (error) return <p>Weather is unavailable</p>;
  if (!weather) return null;

  const [{ icon, description }] = weather.weather;

  return (
    <div style={{ marginTop: '24px' }}>
      <h3>Weather in {capital}</h3>
      <div>Temperature {weather.main.temp} °C</div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <div>Wind {weather.wind.speed} m/s</div>
    </div>
  );
};
