import React, { useState, useEffect } from "react";

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
            city
          )}&units=metric&appid=5dbd849ed4b16e9a7f02b09c4c15ad07`
        );
        const data = await res.json();

        if (Number(data.cod) === 200) {
          // 🔹 API gives 40 entries (3-hour intervals). We'll pick 1 per day (midday).
          const dailyData = data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
          );

          setForecast(dailyData.slice(0, 5)); // only 5 days
          setError("");
        } else {
          setForecast([]);
          setError("Could not fetch forecast.");
        }
      } catch (err) {
        console.error("Forecast fetch error:", err);
        setForecast([]);
        setError("Something went wrong.");
      }
    };

    fetchForecast();
  }, [city]);

  if (!city) return null;

  return (
    <div className="w-full  px-6 mb-15">
      <h2 className="text-2xl font-bold text-white mb-10 text-center drop-shadow-lg">
        5-Day Forecast for {city}
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex justify-center gap-6 flex-wrap">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="w-40 bg-gradient-to-b from-sky-400 to-blue-600 
                       rounded-2xl p-4 shadow-lg text-center text-white 
                       hover:scale-105 transition-transform duration-300"
          >
            <p className="font-semibold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p className="text-lg font-bold">{Math.round(day.main.temp)}°C</p>
            <p className="capitalize text-sm">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
