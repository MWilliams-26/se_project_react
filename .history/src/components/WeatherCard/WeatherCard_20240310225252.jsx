import "./WeatherCard.css"
import sunny from "../a"

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  })
  

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;