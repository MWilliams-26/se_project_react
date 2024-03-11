import "../Main.css"
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text"></p>
      </section>
    </main>
  )
}

export default Main;