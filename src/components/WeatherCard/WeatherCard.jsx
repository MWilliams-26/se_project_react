import "./WeatherCard.css"
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";


function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.find((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (!filteredOptions) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions;
  }

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);



  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp[currentTemperatureUnit]} </p>
      <img
        src={weatherOption?.url}
        alt={`card showing ${weatherOption?.day ? "day" : "night"}time ${weatherOption?.condition} weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;