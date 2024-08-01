import InputCard from './components/InputCard';
import WeatherCard from './components/WeatherCard';
import './App.css';
import DayCard from './components/DayCard';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import parseForecast from './AppLogic/weatherParsing';


function App() {

  //API information
  const weatherUrl = process.env.REACT_APP_WEATHER_URL;
  const geoUrl = process.env.REACT_APP_GEO_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  //#region useState
  const [days,setDays] = useState();

  const [day,setDay] = useState();
  const [city,setCity]= useState();
  const timezoneOffset=0;
  //#endregion
  //#region Hooks
  const onSubmit= async (zipcode)=>{
    const location = await axios.get(`${geoUrl}zip=${zipcode},US&${apiKey}`);
    const weather = await axios.get(`${weatherUrl}lat=${location.data.lat}&lon=${location.data.lon}&${apiKey}`);
    await (setDays(parseForecast(weather.data.list,timezoneOffset),setCity(location.data)));
    
  };
  const dayClicked = async (event)=>{
    console.log(event.target.id);
    await setDay(days[event.target.id]);
  };
  //#endregion
  //#region Component rendering

  const renderedDayCards = (days)? days.map((day,id) => {
    return <DayCard day={days[id]} key={id} onClick={dayClicked} id={id} />;
  }):'';
  //#endregion
  let renderedWeatherCard;
  let rndCrd;
  return (
    <div className=''>
      <InputCard onSubmit={onSubmit} />
      <div className='cardUI2'>
        {rndCrd = (renderedDayCards)? renderedDayCards:''}</div>
        {renderedWeatherCard = (day)?<WeatherCard day={day} city={city}/>: ''}
        
      </div>
  );
  
}

export default App;
