// import { useEffect, useState } from "react";

// const key = `5c6b8b76ca33458cab201cef3e7a5bcb`


// function useWeather(city){
    
//     const [data, setData] = useState()
    
//     useEffect(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//         .then( (res) => res.json())
//         .then((res) => setData(res))
//     },[city])
    
//     return data
// }

// export default useWeather










import { useState, useEffect } from "react";

function useWeather(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const key =  `5c6b8b76ca33458cab201cef3e7a5bcb`;

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
