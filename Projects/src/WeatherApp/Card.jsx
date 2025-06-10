import React, { useEffect, useRef, useState } from 'react'
import './card.css'
import sunIcon from '../assets/sun.webp'
import wind from '../assets/img1.png'
import hum from '../assets/hum1.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'
import drizzle_icon from '../assets/drizzle.png'


export default function Card() {

    const[weatherData,setWeather] = useState(false);

    const inputRef = useRef();

    const allIcons = {
       "01d" : sunIcon,
       "01n" : sunIcon,
       "02d" : cloud_icon,
       "02n" : cloud_icon,
       "03d" : cloud_icon,
       "03n" : cloud_icon,
       "04d" : drizzle_icon,
       "04n" : drizzle_icon,
       "09d" : rain_icon,
       "09n" : rain_icon,
       "10d" : rain_icon,
       "10n" : rain_icon,
       "13d" : snow_icon,
       "13n" : snow_icon,
    }

  // const Weather = () =>{
      const search = async (city)=>{

        if(city==="")
        {
          alert("Enter City Name");
          return;
        }

        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const res = await fetch(url);
            const data = await res.json();

            if(!res.ok){
              alert(data.message);
              return;
            }

            console.log(data);

            const icon = allIcons[data.weather[0].icon] || sunIcon;

            setWeather({
              humidity : data.main.humidity,
              windSpeed : data.wind.speed,
              temperature: Math.floor(data.main.temp),
              location : data.name,
              icon : icon,
              date: new Date()
            })

            console.log("Weather Icon Code:", data.weather[0].icon);

            
        }
        catch(error)
        {
          setWeather(false);
          console.error("Error in fetching weather data")
        }
      // }
  }

  useEffect(()=>{
    search("Medak,Telangana")
  },[])

  const formattedDate = weatherData?.date?.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

  return (
    <>
      <div className="box">
        <div className="container">
              <input ref={inputRef}
               className='in' type="text" placeholder='Enter City Name'/>
              <i onClick={()=> search(inputRef.current.value)}className="fas fa-search search-icon"></i>
        </div>

        {weatherData?
          <>
           <div className="details">
          <h1>{weatherData.location}</h1>
          <p><i>{formattedDate}</i></p>
          <img src={weatherData.icon} alt="" height={100} width={100} className='img'/>
          <h1 className='par'>{weatherData.temperature}° C </h1>

          <div className="box1">
             <div className='wind'>
                 <img src={wind} className='img1' alt="" />
                  <h3>{weatherData.windSpeed} Km/h</h3>
              </div>
              <div className='hum'>
                 <img src={hum} className='img2' alt="" />
                  <h3>{weatherData.humidity} %</h3>
              </div>
          </div>

        </div>
          </>:<>
          </>
        }

       
      </div>
        
    </>
    
  )
}
