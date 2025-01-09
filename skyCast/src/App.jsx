import { useState } from "react";
import useWeather from "./Hooks/UseWeather";

function App() {
  const [city, setCity] = useState("Delhi");
  const [query, setQuery] = useState(city);
  const [report, setReport] = useState([]);
  const [isCelsius, setIsCelsius] = useState(false);
  const key = import.meta.env.VITE_WEATHER_API_KEY;

  const { data, error } = useWeather(query);

  const handleInp = (e) => setCity(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city);
    dataFetching(city)
    setCity("");
  };

  const handleUnit = () => setIsCelsius(!isCelsius);

  const tempC = (tempK) => (tempK - 273.15).toFixed(2);
  const tempF = (tempK) => ((tempK - 273.15) * 9 / 5 + 32).toFixed(2);

  const date = new Date();
  const opt = { weekday: "long" };
  const monthOptions = { month: "long" };
  const times = { hour: "2-digit", minute: "2-digit" };


async function dataFetching(cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)
    const data = await response.json()
    let reports = reportData(data.list)
    setReport(reports)   
  } catch (error) {
      throw error;
  }
}

function reportData(arr){
  let result = []
  for (let i = 1; i < arr.length; i += 5) {
    result.push(arr[i])    
  }
  return result;
}

  
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Weather Now</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Get the latest weather updates for any city.
          </p>
        </div>

        {/* Search and Unit Toggle */}
        <div className="flex flex-col md:flex-row justify-around gap-4 mb-8">
          <form
            className="w-full md:w-3/5 flex flex-col md:flex-row gap-3"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Enter your city..."
              className="w-full bg-white text-gray-800 text-lg md:text-xl py-3 px-5 rounded-lg shadow focus:outline-none focus:ring focus:ring-purple-500"
              value={city}
              onChange={handleInp}
            />
            <button className="bg-purple-600 hover:bg-purple-700 transition-all text-lg md:text-xl font-semibold px-6 py-3 rounded-lg shadow">
              Find
            </button>
          </form>
          <button
            className="bg-yellow-600 hover:bg-yellow-700 transition-all text-lg md:text-xl font-semibold px-6 py-3 rounded-lg shadow"
            onClick={handleUnit}
          >
            Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
          </button>
        </div>

        {/* Weather Data */}
        {error ? (
          <div className="text-center text-red-400 text-lg md:text-xl font-semibold mt-5">
            {error} - Please try another city.
          </div>
        ) : data ? (
          <div className="flex flex-col items-center gap-8 mt-5">
            {/* City Name and Date */}
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold">{data.name}</h1>
              <h4 className="text-lg md:text-2xl text-gray-300 mt-2">
                {date.toLocaleDateString("en-US", opt)},{" "}
                {date.toLocaleDateString("en-US", monthOptions)} {date.getDate()},{" "}
                {date.getFullYear()} at {date.toLocaleTimeString("en-US", times)}
              </h4>
            </div>

            {/* Temperature Display */}
            <div className="flex flex-col items-center">
              <button className="p-3 cursor-default bg-purple-700 rounded-2xl shadow-lg  text-4xl font-bold">
                {isCelsius
                  ? `${tempC(data.main.temp)}°C`
                  : `${tempF(data.main.temp)}°F`}
              </button>
            </div>

            {/* Weather Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Real Feel</h2>
                <p className="text-xl font-bold">
                  {data.main.feels_like
                    ? isCelsius
                      ? `${tempC(data.main.feels_like)}°C`
                      : `${tempF(data.main.feels_like)}°F`
                    : "N/A"}
                </p>
              </div>
              <div className="flex flex-col items-center bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Humidity</h2>
                <p className="text-xl font-bold">{data.main.humidity}%</p>
              </div>
              <div className="flex flex-col items-center bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Wind</h2>
                <p className="text-xl font-bold">{data.wind.speed} m/s</p>
              </div>
              <div className="flex flex-col items-center bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Pressure</h2>
                <p className="text-xl font-bold">{data.main.pressure} hPa</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-300 mt-5">Loading...</div>
        )}
        {report ? (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {report
              .map((day, idx) => (
                <div key={idx} className="bg-gray-800/50 p-3 mt-8 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {idx === 0 ? 'Today' : 
                    idx === 1 ? 'Tomorrow' : 
                    new Date(day.dt * 1000).toLocaleDateString('en-US', {weekday: 'long'})}
                  </h3>
                  <img 
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                    className="mx-auto"
                  />
                  <p className="text-lg font-semibold">
                    {isCelsius ? `${tempC(day.main.temp)}°C` : `${tempF(day.main.temp)}°F`}
                  </p>
                  <p className="text-gray-300">{day.weather[0].description}</p>
                </div>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

