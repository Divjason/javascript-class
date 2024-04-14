import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="warning">
        Current Location
      </Button>
      {cities.map((it, idx) => (
        <Button key={idx} onClick={() => setCity(it)} variant="warning">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
