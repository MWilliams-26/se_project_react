import "./WeatherCard.css"
import { weatherOptions } from "../../utils/constants";



function WeatherCard({ weatherData }) {
  const w = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOption.url}
        alt="sunny"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;