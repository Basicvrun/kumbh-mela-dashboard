// src/components/WeatherReport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; // Adjust the import path if necessary
import Stat from './Stat'; // Adjust the import path if necessary
import { ThermometerSun } from '@heroicons/react/solid'; // Import the weather icon

const WeatherReport = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // OpenWeather API key and City information
  const API_KEY = '80e82f93f9ec6942ab81780e3775a45c'; 
  const CITY = 'Prayagraj';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(URL);
        setWeatherData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [URL]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data: {error.message}</p>;

  // Extract relevant data
  const temperature = `${weatherData.main.temp}°C`;
  const feelsLike = `Feels like: ${weatherData.main.feels_like}°C`;
  const humidity = `Humidity: ${weatherData.main.humidity}%`;

  return (
    <Card title="Weather" icon={<ThermometerSun />} color="#ff0000">
      <Stat label={temperature} value={`${feelsLike}, ${humidity}`} />
    </Card>
  );
};

export default WeatherReport;
