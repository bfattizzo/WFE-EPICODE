import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap/Form';
import clear_icon from '../src/assets/clear.png'
import cloud_icon from '../src/assets/cloud.png'
import drizzle_icon from '../src/assets/drizzle.png'
import humidity_icon from '../src/assets/humidity.png'
import rain_icon from '../src/assets/rain.png'
import snow_icon from '../src/assets/snow.png'
import wind_icon from '../src/assets/wind.png'
import './App.css'


function App() {
  let api_key = '8faf54eae4c403d686a4428a4bab05ad';
  const [wicon, setWicon] = useState(cloud_icon)

  const search = async () => {
    const element = document.getElementsByClassName('submit')
    if (element[0].value === '')
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&APPID=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percent')
    const wind = document.getElementsByClassName('wind-rate')
    const temperature = document.getElementsByClassName('temperature-temp')
    const location = document.getElementsByClassName('location-tempo')

    humidity[0].innerHTML = data.main.humidity+' %';
    wind[0].innerHTML = data.wind.speed+' km/h';
    temperature[0].innerHTML = Math.floor(data.main.temp) +' °C';
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n') 
    {
      setWicon(clear_icon);
    }
    else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n')
    {
      setWicon(cloud_icon);
    }
    else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n')
    {
      setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
    {
      setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n')
    {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n')
    {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n')
    {
      setWicon(snow_icon);
    }
    else {
      setWicon(clear_icon);
    }
  }
  
  return (
    <>
    <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Inserisci la Città"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={() =>{search()}}>
              <img src="../src/assets/search-svgrepo-com.svg" alt='cerca'/>
            </Button>
          </Col>
        </Row>
      </Form>
      <div>
      <img src="../src/assets/clear.png /">
      </div>
      </>

  )
}

export default App
