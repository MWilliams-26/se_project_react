import sunny from "../../assets/sunny.svg"
import 

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  )
}

export default WeatherCard;