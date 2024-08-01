import '../App.css';

const WeatherCard = ({day,city})=>{
    const dayText = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    return(<>
        <div className="cardUI" id="currentDay">
              <h1 className="day-header">{dayText[day.dt.getDay().toString()]} in {city.name} </h1>
              <div className="weather">
              <p>{day.description}
              </p>
            </div>
            <div className="details flex-parent">
              <div className="temperature-breakdown">

                <p>Morning Temperature: {day.morningTemp}°F</p>
                <p>Day Temperature: {day.dayTemp}°F</p>
                <p>Evening Temperature: {day.eveningTemp}°F</p>
                <p>Night Temperature: {day.nightTemp}°F</p>
              </div>
              <div className="misc-details">
                <p>Atmospheric Pressure: {day.pressure} hPa</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Wind Speed: {day.wind} mph</p>
              </div>
            </div>
          </div>

    </>);
}
export default WeatherCard;