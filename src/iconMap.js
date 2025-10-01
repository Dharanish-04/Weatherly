import clouds from "./assets/icons8-clouds-50.png";
import fog from "./assets/icons8-fog-64.png";
import haze from "./assets/icons8-haze-64.png";
import night from "./assets/icons8-night-50.png";
import rain from "./assets/icons8-rain-64.png";
import rainfall from "./assets/icons8-rainfall-64.png";
import sun from "./assets/icons8-sun-50.png";

// Map OpenWeather "main" values to your custom icons
export const iconMap = {
  Clear: sun,
  Clouds: clouds,
  Rain: rain,
  Drizzle: rainfall,
  Thunderstorm: rainfall,
  Snow: night,        // you can replace with snow icon if you add one
  Mist: fog,
  Smoke: haze,
  Haze: haze,
  Dust: haze,
  Fog: fog,
  Sand: haze,
  Ash: haze,
  Squall: rain,
  Tornado: rain,
  Night: night,       // custom extra if you want to handle night
};
