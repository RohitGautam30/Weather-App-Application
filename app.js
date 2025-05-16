let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temprature = document.getElementById('temprature');
let description = document.getElementById('description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let visibility = document.getElementById('visibility');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit',(event) => {
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();
    }
})
let id = '8d6532e2a8b38c2ebc15ca883929323f';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () => {
    let cityQuery = valueSearch.value === '' ? 'Washington' : valueSearch.value;
    fetch(url + '&q=' + cityQuery)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
            temprature.querySelector('img').src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temprature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerHTML = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
            visibility.innerText = data.visibility;
            main.classList.add('success');
        }else{
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }

        valueSearch.value = '';
    })
}
const initApp = () => {
    valueSearch.value = '';
    searchWeather();
}
initApp();

const setCurrentDate = () => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1; // Months are zero-indexed
            let year = date.getFullYear();
            // Format the date as MM/DD/YYYY
            let formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

            // Display the date in the 'current-date' element
            document.getElementById('current-date').innerText = ` ${formattedDate}`;
        };

        // Initialize the function when the page loads
        window.onload = setCurrentDate;

let darkmode = localStorage.getItem('dark-mode');
const themeswitch = document.getElementById('toggle-button')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}





if(darkmode === 'active') enableDarkMode()
themeswitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode()
})
