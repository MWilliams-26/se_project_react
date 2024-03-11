import "./WeatherCard.css"
import { weatherOptions } from "../../utils/constants";



function WeatherCard({ weatherData }) {

  const weatherOption = weatherOptions.filter((option) => {
    return option.day === 
  })

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src="" alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;