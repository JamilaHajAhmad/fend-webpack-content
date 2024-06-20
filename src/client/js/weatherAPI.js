const apiKey = '003de29f196a54468e9025d1c531fd94';

// The base URL for API call
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=10001`;

// Creating a new date 
const date = new Date();
let newDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

document.getElementById('submit').addEventListener('click', performAction);

function performAction() {

    getWeatherData(baseURL,apiKey).then(
        (data) => {
            postData('/add',{
                temperature: data.main.temp,
                date: newDate,
            });
        }
    ).then(() => dynamicUiUpdate());
}

// getWeatherData function
const getWeatherData = async (baseURL,apiKey) => {
    const response = await fetch(`${baseURL},us&appid=${apiKey}&units=imperial`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); 
    }
    try {
        const data = await response.json();
        return data;
    }
    catch(Error) {
        window.alert('Error fetching weather data: '+ Error);
    }
}

// Async POST
async function postData(url='', data={}) {
    const response = await fetch(url,{
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); 
    }
    try {
        const newData = await response.json();
        return newData;
    }
    catch(Error) {
        window.alert(Error);
    }
}

const dynamicUiUpdate = async () => {
    const request = await fetch('/all',{
        method: 'GET',
    });
    try {
        const data = await request.json();
        let content = document.createElement('div');
        content.textContent = `temperature = ${data.temp} || date = ${data.date}`
        document.body.append(content);
    }
    catch(Error) {
        window.alert(Error);
    }
}

export {
    performAction,
    getWeatherData,
    postData,
    dynamicUiUpdate
}