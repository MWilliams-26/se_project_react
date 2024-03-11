export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys);
  return result;
};

const isDay = ({sunrise, sunset}) => {
  return (sunrise, sunset);
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return 'hot';
  } else if (temperature >= 66 && temperature < 85) {
    return 'warm';
  } else {
    return 'cold';
  }
}