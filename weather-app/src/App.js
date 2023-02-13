import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(""); //setCity를 weatherButton에 props로 보내주기
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b4a622813e8b9adaec9208ae7ff7891&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b4a622813e8b9adaec9208ae7ff7891&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }; //useEffect에서 city의 값이 바뀐 후 호출이기때문에 비동기처리를 해주지 않아도 됨.

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]); //render후 바로 실행

  // useEffect(()=>{
  //   getWeatherByCity()
  // },[city]) //city값이 변경될 때 호출된다.

  return (
    <div>
      {loading? (
      <div className="container">
      <ClipLoader color="#f88c6b" loading={loading} size={150} />
      </div>)  :
      (
        <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} weather={getCurrentLocation} selectedCity={city}/>
      </div>
      ) }
     
    </div>
  );
}

export default App;

//step
//1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
//2. 현재도시, 섭씨,화치, 날씨의 상태정보
//3. 5개의 버튼이 있다.(현재위치, 각 도시)
//4. 각 도시버튼을 클릭할때마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 출력.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.(데이터가 도착하기 전에실행)
