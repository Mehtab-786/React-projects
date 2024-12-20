import { useState } from "react";
import useWeather from "./Hooks/UseWeather";

function App() {
  const [city, setCity] = useState("Delhi");
  const [query, setQuery] = useState(city);
  const [isCelsius, setIsCelsius] = useState(false);

  const { data, error } = useWeather(query);

  const handleInp = (e) => setCity(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city);
    setCity("");
  };
    
  const date = new Date()
  const opt = {weekday : 'long'}
  const monthOptions = {month: 'long'};
  const times = {hour:'2-digit',minute:'2-digit'};

  const handleUnit = () => setIsCelsius(!isCelsius);

  const tempC = (tempK) => (tempK - 273.15).toFixed(2); 
  const tempF = (tempK) => ((tempK - 273.15) * 9/5 + 32).toFixed(2); 

  return (
  // <div className="w-full h-screen bg-neutral-900 p-10 text-slate-300">
    //   <div className="flex justify-between">
    //     <form className="w-3/5 flex gap-3 mb-8" onSubmit={handleSearch}>
    //       <input
    //         type="text"
    //         placeholder="Enter your city..."
    //         className="w-full bg-neutral-800 text-xl py-2 rounded-lg px-5"
    //         value={city}
    //         onChange={handleInp}
    //       />
    //       <button className="bg-neutral-500 rounded-lg text-xl font-semibold px-4">Find</button>
    //     </form>
    //     <button className="bg-yellow-700 h-14 px-5 rounded-xl" onClick={handleUnit}>
    //       Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
    //     </button>
    //   </div>

    //   {error ? (
    //     <div className="text-center text-red-500 text-xl font-semibold mt-5">
    //       {error} - Please try another city.
    //     </div>
    //   ) : data ? (
    //     <div className="text-center flex flex-col gap-5">
    //       <h1 className="text-5xl font-semibold">{data.name}</h1>
    //       <h4 className="text-center text-1xl font-normal">{date.toLocaleDateString('en-US',opt)}, {date.toLocaleDateString('en-US',monthOptions)} {date.getDate()}, {date.getFullYear()}, at {date.toLocaleTimeString('en-US', times)} </h4>
    //       <h3 className="text-2xl">
    //         <button className="p-2 bg-neutral-800 cursor-default rounded-md">
    //           {isCelsius ? `${tempC(data.main.temp)}°C` : `${tempF(data.main.temp)}°F`}
    //         </button>
    //       </h3>
    //       <div className="flex gap-6 justify-center">
    //         <h3>Min: {isCelsius ? `${tempC(data.main.temp_min)}°C` : `${tempF(data.main.temp_min)}°F`}</h3>
    //         <h3>Max: {isCelsius ? `${tempC(data.main.temp_max)}°C` : `${tempF(data.main.temp_max)}°F`}</h3>
    //       </div>
    //       <div className="w-3/4 mx-auto mt-14 flex gap-5">
    //      <div className="w-1/4 bg-neutral-700 px-6 py-3 rounded-md">
    //        <h2>Real feel</h2>
    //        <h3>{data?.main?.feels_like ? (isCelsius ? `${tempC(data?.main?.temp)}°C` : `${tempF(data?.main?.temp)}°F`) : "N/A"}</h3>
    //      </div>
    //      <div className="w-1/4 bg-neutral-700 px-6 py-3 rounded-md">
    //        <h2>Humidity</h2>
    //        <h3>{data?.main?.humidity ? `${data.main.humidity}%` : "N/A"}</h3>
    //      </div>
    //      <div className="w-1/4 bg-neutral-700 px-6 py-3 rounded-md">
    //        <h2>Wind</h2>
    //        <h3>{data?.wind?.speed ? `${data.wind.speed} m/sec` : "N/A"}</h3>
    //      </div>
    //      <div className="w-1/4 bg-neutral-700 px-6 py-3 rounded-md">
    //        <h2>Pressure</h2>
    //        <h3>{data?.main?.pressure ? `${data.main.pressure} hPa` : "N/A"}</h3>
    //      </div>
    //    </div>
    //     </div>
    //   ) : (
    //     <div className="text-center text-slate-300 mt-5">Loading...</div>
    //   )}
  // </div>
  <div className="w-full min-h-screen bg-neutral-900 p-5 text-slate-300">
  <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
    <form
      className="w-full md:w-3/5 flex flex-col md:flex-row gap-3"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Enter your city..."
        className="w-full bg-neutral-800 text-base md:text-xl py-2 px-4 rounded-lg"
        value={city}
        onChange={handleInp}
      />
      <button className="bg-neutral-500 rounded-lg text-base md:text-xl font-semibold px-4 py-2">
        Find
      </button>
    </form>
    <button
      className="bg-yellow-700 h-12 md:h-14 px-4 md:px-5 rounded-xl text-sm md:text-base"
      onClick={handleUnit}
    >
      Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
    </button>
  </div>

  {error ? (
    <div className="text-center text-red-500 text-lg md:text-xl font-semibold mt-5">
      {error} - Please try another city.
    </div>
  ) : data ? (
    <div className="text-center flex flex-col gap-5 mt-5">
      <h1 className="text-3xl md:text-5xl font-semibold">{data.name}</h1>
      <h4 className="text-base md:text-xl">
        {date.toLocaleDateString("en-US", opt)},{" "}
        {date.toLocaleDateString("en-US", monthOptions)} {date.getDate()},{" "}
        {date.getFullYear()}, at {date.toLocaleTimeString("en-US", times)}
      </h4>
      <h3 className="text-lg md:text-2xl">
        <button className="p-2 bg-neutral-800 cursor-default rounded-md">
          {isCelsius ? `${tempC(data.main.temp)}°C` : `${tempF(data.main.temp)}°F`}
        </button>
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
        <h3>
          Min:{" "}
          {isCelsius ? `${tempC(data.main.temp_min)}°C` : `${tempF(data.main.temp_min)}°F`}
        </h3>
        <h3>
          Max:{" "}
          {isCelsius ? `${tempC(data.main.temp_max)}°C` : `${tempF(data.main.temp_max)}°F`}
        </h3>
      </div>
      <div className="w-full sm:w-3/4 mx-auto mt-8 flex flex-wrap 2xl:flex-nowrap gap-5">
        <div className="w-full sm:w-1/2 md:w-1/4 bg-neutral-700 px-4 py-3 rounded-md text-sm md:text-base">
          <h2>Real feel</h2>
          <h3>
            {data?.main?.feels_like
              ? isCelsius
                ? `${tempC(data?.main?.temp)}°C`
                : `${tempF(data?.main?.temp)}°F`
              : "N/A"}
          </h3>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 bg-neutral-700 px-4 py-3 rounded-md text-sm md:text-base">
          <h2>Humidity</h2>
          <h3>{data?.main?.humidity ? `${data.main.humidity}%` : "N/A"}</h3>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 bg-neutral-700 px-4 py-3 rounded-md text-sm md:text-base">
          <h2>Wind</h2>
          <h3>{data?.wind?.speed ? `${data.wind.speed} m/sec` : "N/A"}</h3>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 bg-neutral-700 px-4 py-3 rounded-md text-sm md:text-base">
          <h2>Pressure</h2>
          <h3>{data?.main?.pressure ? `${data.main.pressure} hPa` : "N/A"}</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-slate-300 mt-5">Loading...</div>
  )}
  </div>

  );
}

export default App;
