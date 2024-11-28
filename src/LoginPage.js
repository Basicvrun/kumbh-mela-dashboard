// src/components/WeatherReport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherReport = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
  const CITY = 'Varanasi'; // You can change this to the desired city
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

  return (
    <div className="weather-report p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold">Weather Report for {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherReport;
