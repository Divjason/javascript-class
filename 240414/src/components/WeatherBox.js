import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New York":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Dongjinwon":
      return "용인 기흥구";
  }
};

const WeatherBox = ({ weather }) => {
  console.log(weather.name);
  return (
    <div className="weather-box">
      <h2>도시 : {weather.name && cityName(weather.name)}</h2>
      <h2>
        온도 : {weather.main.temp}℃ / 습도 : {weather.main.humidity}％
      </h2>
      <h3>현재날씨 : {weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
