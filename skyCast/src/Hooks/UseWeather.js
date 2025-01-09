import { useState, useEffect } from "react";

function useWeather(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    // Reset error and data on each new city search
    setError(null);
    setData(null);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, [city]);
  
  return { data, error }; // Return both data and error
}

export default useWeather;
