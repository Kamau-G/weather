import '../App.css';

const DayCard = ({day,id,onClick,})=>{
  const dayText = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    return (
            <div className="cardUI col-3" onClick={onClick} id={id}>
              <h2>{(day.dt.getMonth()+1).toString()}/{day.dt.getDate().toString()}</h2>
              <h3>{dayText[day.dt.getDay().toString()]}</h3>
              <h3>{day.maxTemp}°F | {day.minTemp}°F</h3>
              <button id={id} className="btn btnUI col-4">Expand</button>
            </div>
            
    );
}

export default DayCard;