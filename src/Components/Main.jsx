import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";



const Main = () => {
  // 🔹 Load city from localStorage, if not found use "chennai"
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "chennai"; 
  });

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(""); // for invalid city

  const handleSearch = async (customCity) => {
    const query = customCity || city; // use passed city OR current state
    if (!query) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5dbd849ed4b16e9a7f02b09c4c15ad07`
      );
      const data = await res.json();

      if (Number(data.cod) === 200) {
        setWeather({
          city: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
        setError("");

        // 🔹 Save valid city to localStorage
        localStorage.setItem("city", data.name);

      } else {
        setWeather(null);
        setError("No results found for this city");
      }
    } catch (err) {
      console.error("Error fetching weather details", err);
      setWeather(null);
      setError("Something went wrong. Try again.");
    }
  };

  // 🔹 Fetch weather when component loads (default city or stored city)
  useEffect(() => {
    handleSearch();
  }, []); 

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-blue-400 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">My Weather App</h1>
      </nav>

      {/* Search + Card Section */}
      <div className="flex flex-col items-center justify-start flex-1 mt-12">
        {/* Search Bar */}
        <div className="flex mb-4 w-full max-w-xl shadow-lg text-gray-700">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl outline-none border text-gray-800 border-white focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => handleSearch()}
            className="relative px-10 py-3 ml-5 rounded-full text-white/80 font-semibold 
            bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 
            outline-none border-none shadow-md
            hover:from-sky-400 hover:via-blue-400 hover:to-indigo-400 
            hover:text-white hover:shadow-xl hover:shadow-blue-400/50 
            transition-all duration-300 ease-in-out"
          >
            Search
          </button>
        </div>

        {/* Error message */}
        {error && <p className="text-white font-semibold mb-6">{error}</p>}

        {/* Weather Card */}
        <WeatherCard weather={weather} />
        {weather && <Forecast city={weather.city} />}

      </div>

     
    </div>
  );
};

export default Main;



{/* const handleSearch = async () => {

const handleSearch = ... defines a function named handleSearch and stores it in a constant variable.

async marks the function as asynchronous, which lets you use await inside. An async function automatically returns a Promise — this is useful because the code we run (network requests) is asynchronous.

Why async?
Because fetch() and res.json() return Promises. async/await lets you write code that looks synchronous (top-to-bottom) while actually waiting for the network result. It’s easier to read and reason about than .then() chains.

if (!city) return;

This is a guard clause. If city is empty (""), null or otherwise falsy, the function stops immediately and does nothing.

Prevents unnecessary API calls when the user hasn’t typed anything.

try { ... } catch (error) { ... }

try runs code that might fail (network calls). If an exception happens inside try, control jumps to catch.

catch here logs the error. This prevents uncaught exceptions from crashing your app and gives you a place to show error UI later.

const res = await fetch(https://api.openweathermap.org/...`);`

fetch(...) sends the HTTP request to OpenWeather. It returns a Promise that resolves to a Response object.

await pauses this function until that Promise resolves — then res holds the Response.

The URL is built using a template string (the backtick string) so ${city} and ${API_KEY} get inserted automatically.

Notes:

units=metric makes the API return temperatures in Celsius.

If city contains spaces or special characters (like "New York"), you should use encodeURIComponent(city) to avoid breaking the URL.

const data = await res.json();

The Response object has a json() method that reads the HTTP response body and parses JSON. json() also returns a Promise, so we await it.

After this line, data is a plain JavaScript object with the API response.

if (data.cod === 200) { ... } else { ... }

The code checks whether the API returned success. OpenWeather returns a cod field in its JSON (200 = OK).

If successful, we extract the pieces we need and call setWeather(...). If not, we clear weather and show alert.

What we store in setWeather:

city: data.name — the name the API recognized (e.g., "London").

temp: data.main.temp — temperature from the main object.

condition: data.weather[0].main — a short condition like "Clear" or "Rain". weather is an array; weather[0] is the main item.

icon: a URL built from data.weather[0].icon — OpenWeather provides icon codes; this is how you load the icon image.

setWeather(null); alert("City not found!");

If the API says the city wasn’t found, we clear any previous weather info (no stale data) and inform the user.

} catch (error) { console.error("Error fetching weather:", error); }

If fetch throws (network error, DNS issue, etc.), we log the error. You could also show a user-friendly message here.*/}
