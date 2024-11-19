async function getWeather(city) {
    const apiKey = 'your_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      console.log(`Fetching weather data for ${city}...`);
  
      let response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("City not found or an error occurred");
      }
  
      let data = await response.json();
      
      console.info(`Weather data retrieved successfully for ${city}`);
      console.log(data);
  
      let temp = data.main.temp;
      if (temp < 10) {
        console.warn(`It's quite cold in ${city}. Temperature is ${temp}°C.`);
      } else {
        console.log(`Temperature in ${city} is ${temp}°C.`);
      }
  
    } catch (error) {
      console.error(`Error fetching weather data: ${error.message}`);
    }
  }
  
  // Call the function with a sample city
  getWeather("New York");
  
  