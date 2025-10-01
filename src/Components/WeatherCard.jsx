import React, { useState, useEffect } from "react";
import { iconMap } from "../iconMap"; // adjust path if needed

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  // 🔹 Map conditions → gradient backgrounds (for card only)
  const bgMap = {
    Clear: "from-yellow-200 via-orange-300 to-red-400",   // sunny
    Clouds: "from-gray-300 via-gray-400 to-gray-500",    // cloudy
    Rain: "from-blue-300 via-blue-500 to-indigo-600",    // rainy
    Thunderstorm: "from-gray-600 via-gray-200 to-black", // stormy
    Snow: "from-blue-100 via-white to-blue-200",         // snowy
    Mist: "from-gray-200 via-gray-300 to-gray-400",      // misty
  };

  const cardBg =
    bgMap[weather.condition] || "from-blue-300 via-blue-400 to-blue-500";

  // ------------------- Favourites Logic -------------------
  const [favourites, setFavourites] = useState([]);
  const [message, setMessage] = useState("");

  // Load favourites from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(stored);
  }, []);

  // Save favourites whenever updated
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add city
  const addToFavourites = () => {
    if (!favourites.includes(weather.city)) {
      setFavourites([...favourites, weather.city]);
      showMessage(`${weather.city} added to favourites ✅`);
    } else {
      showMessage(`${weather.city} is already in favourites ⚡`);
    }
  };

  // Remove city
  const removeFromFavourites = () => {
    const updated = favourites.filter((c) => c !== weather.city);
    setFavourites(updated);
    showMessage(`${weather.city} removed from favourites ❌`);
  };

  // Show temporary message
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  // --------------------------------------------------------------

  return (
    <div
      className={`w-[40rem] h-[30rem] mb-30 mt-10 mr-20 ml-25 
        rounded-4xl text-center shadow-2xl border border-blue-200 
        bg-gradient-to-b ${cardBg}`}
    >
      {/* Weather Icon Box */}
      <div className="w-[12rem] h-[12rem] border shadow-2xl text-gray-700 rounded-2xl mx-auto bg-white/90 mt-8 flex items-center justify-center">
        <img
          src={iconMap[weather.condition]}
          alt={weather.condition}
          className="w-25 h-25"
        />
      </div>

      {/* Bottom: Details */}
      <div className="mt-6 space-y-2">
        <h2 className="text-3xl font-extrabold text-gray-800">{weather.city}</h2>
        <p className="text-2xl font-semibold text-gray-900">{weather.temp}°C</p>
        <p className="text-gray-700 capitalize">{weather.description}</p>
        <p className="text-gray-700">Humidity: {weather.humidity}%</p>

        {/* ------------------- Buttons ------------------- */}
        {!favourites.includes(weather.city) ? (
          <button
            onClick={addToFavourites}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 duration-200"
          >
            ⭐ Add to Favourites
          </button>
        ) : (
          <button
            onClick={removeFromFavourites}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 duration-200"
          >
            ❌ Remove from Favourites
          </button>
        )}

        {/* Message */}
        {message && (
          <p className="mt-3 text-lg font-medium text-blue-800">{message}</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
