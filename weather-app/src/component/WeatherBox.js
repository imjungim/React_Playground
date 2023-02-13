import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weahter? :", weather);
  
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}/ 230화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox;

//Uncaught TypeError: Cannot read properties of null (reading 'name')
//weather의 초기값은 null이다. UI가 그려질때 초기값이 null이면 보여줄 값이 없기때문에 오류.
//weather && weather.name 으로 또는 weather?.name