
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#currentHumidity');
const captionDesc = document.querySelector('#fig');
const tempMax = document.querySelector('#tempMax');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.4255199&lon=-87.0284159&units=imperial&appid=4439142fa247e17f2fe26d2c4aea3366';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    captionDesc.innerHTML = desc + `<img id="weather-icon" src="" alt="">`;
    const weatherIcon = document.querySelector('#weather-icon');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentHumidity.innerHTML = `${data.main.humidity}%`
    tempMax.innerHTML = `${data.main.temp_max}&deg;F`;
  }
  
  apiFetch();