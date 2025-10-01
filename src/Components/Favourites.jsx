import React, { useState, useEffect } from "react";

const API_KEY = "5dbd849ed4b16e9a7f02b09c4c15ad07"; // your OpenWeather key

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  // Load favourites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(stored);
  }, []);

  // Fetch weather for each favourite city
  useEffect(() => {
    if (favourites.length === 0) return;

    const fetchWeather = async () => {
      const results = {};
      for (let city of favourites) {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
              city
            )}&units=metric&appid=${API_KEY}`
          );
          const data = await res.json();
          if (data.cod === 200) {
            results[city] = {
              temp: Math.round(data.main.temp),
              condition: data.weather[0].main,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            };
          }
        } catch (err) {
          console.error("Error fetching weather:", err);
        }
      }
      setWeatherData(results);
    };

    fetchWeather();
  }, [favourites]);

  return (
    <div className="min-h-screen w-screen mt-12 bg-gradient-to-b from-blue-400 to-blue-100 pt-24">
      <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-lg mb-10">
        Favourite Cities
      </h1>

      {favourites.length === 0 ? (
        <p className="text-center text-lg text-gray-700 font-medium">
          No favourites yet. Add some from Home!
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 px-10">
          {favourites.map((city, index) => (
            <div
              key={index}
              className="w-90 h-48 bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 
                         rounded-3xl shadow-xl p-6 flex flex-col justify-between 
                         transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-white drop-shadow-md">
                {city}
              </h2>
              <div className="flex justify-between items-center">
                {weatherData[city] ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={weatherData[city].icon}
                      alt={weatherData[city].condition}
                      className="w-10 h-10"
                    />
                    <p className="text-white text-lg">
                      {weatherData[city].temp}°C
                    </p>
                  </div>
                ) : (
                  <p className="text-white text-lg">Loading...</p>
                )}

                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-lg shadow 
                             hover:bg-red-600 transition duration-200"
                  onClick={() => {
                    const updated = favourites.filter((c) => c !== city);
                    setFavourites(updated);
                    localStorage.setItem("favourites", JSON.stringify(updated));
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
