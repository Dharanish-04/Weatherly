fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=5dbd849ed4b16e9a7f02b09c4c15ad07")
  .then(res => res.json())
  .then(data => console.log(data));