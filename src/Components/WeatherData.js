import React, {useState} from 'react'

const WeatherData = () => {
	const [data, setData] = useState([]);
	const [location, setLocation] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8b216274099e81366d21baa2846d3cf3`;
	const API_KEY = "8b216274099e81366d21baa2846d3cf3"

	// useEffect(() =>{
	// 	searchLocation();
	// }, [])

	const searchLocation = async (event) => {
	if(event.key === "Enter"){
		const data = await fetch(url);
		const json = await data.json();
		console.log(json)
		setData(json);
	}
setLocation('');
}

	return (
		<div className='app' style={{backgroundImage:'url("../Assets/pic1.jpg")'}}>
		<div className='search'>
			<input type='text' value={location} onChange={e => setLocation(e.target.value)} placeholder='Enter Location' onKeyPress={searchLocation}/>
		</div>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>{data.name}</p>
					</div>
					<div className='temp'>
						{data.main ? <h1>{data.main.temp}</h1> : null}
					</div>
					<div className='description'>
						{data.weather ? <p>{data.weather[0].main}</p> : null}
					</div>
				</div>
			{data.name!=undefined &&
				<div className='bottom'>
					<div className='feels'>
						{data.main ? <p className='bold'>{data.main.feels_like}</p>: null}
						<p>Feels Like</p>
					</div>
					<div className='humidity'>
						{data.main ? <p className='bold'>{data.main.humidity}%</p>: null}
						<p>Humidity</p>
					</div>
					<div className='wind'>
						{data.wind ? <p className='bold'>{data.wind.speed}</p>: null}
						<p>Wind Speed</p>
					</div>
				</div>
			}
	</div>
	</div>
	)
}

export default WeatherData