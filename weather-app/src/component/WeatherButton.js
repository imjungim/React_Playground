import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, weather, selectedCity }) => {
 // console.log("cities", cities);
  return (
    <div>
      <Button variant={`${selectedCity === cities ? "outline-primary" : "primary"}`}
      onClick={weather}>Current Location</Button>
      {cities.map((item, index) => (
        <Button
         variant="primary"
         key={index} 
         onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};
export default WeatherButton;

//왜 cities배열을 props로 ??
//아이템의 값이 수없이 많아질경우를 위해

//app.js에서 필요한 함수 및 데이터를 props로 내려받는다.