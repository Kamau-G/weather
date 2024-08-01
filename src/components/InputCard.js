import "../App.css";
import { useState } from "react";

const InputCard = ({onSubmit})=>{
    const [zipCode,setZipCode] = useState('');
    
    const watchZipcode = (event)=>{
        setZipCode(event.target.value.replace(/[a-z]/i,''));
      }
    const handleZipClick = async (event)=>{
        event.preventDefault();
        onSubmit(zipCode);
    }
    return (<>
    <div className="zip-form cardUI">
              <form id="zipForm">
                  <div className="flex-parent">
                    <label htmlFor="zipcode">Zip</label>
                    <input className="form-control"
                        type="input" id="zipCode" name="zipcode" value={zipCode} onChange={watchZipcode} 
                    required/>
                    <button type="submit" className="btn btn-success"  onClick={handleZipClick}> Get the forcast!</button>
                </div>
              </form>
          </div>
    </>);
}
export default InputCard;