import { useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState('')
  let [result,setResult]=useState('')
  let [description,setDescription]=useState('')
  let submitHandler=(e)=>{
    e.preventDefault()
    if (city.length===0){ return alert("Enter some city...")}
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        response=> response.json()).then(
          data => {
            
            
            try {
              const kelvin = data.main.temp;
              const celcius = kelvin - 273.15;
             
            const {description} = data.weather[0];
            setResult(`Temperature at ${city}\n  ${Math.round(celcius)}°C`);
            setDescription(description)
            } catch (error) {
              alert("Enter Validation Location...")
            }
          })

          
        .catch(err=>console.log(err))
   setCity('')
  }
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center my-1 text-primary">
            Weather App
          </h2>
          <div className="title-body">
            <form onSubmit={submitHandler} className='d-flex mt-4'>
              <input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}} className='form-control'/>
              <input type="submit" value="Submit" className='btn btn-success'  />
            </form>
            <div className='result'>
               <h3 className='mt-3 text-center '>{result}</h3> 
                <h5 className='text-center mt-2 '>{description}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
