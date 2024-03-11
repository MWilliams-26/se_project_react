import "./Main.css"
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        {/* {add cards here} */}
      </section>
    </main>
  )
}

export default Main;