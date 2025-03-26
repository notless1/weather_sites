document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const city = document.getElementById('cityInput').value.trim();
    if (!city) return;

    const apiKey = 'YOUR_PASS_KEY'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Città non trovata');
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherCondition = data.weather[0].description;
            const humidity = data.main.humidity;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weatherCondition').textContent = weatherCondition;
            document.getElementById('humidity').textContent = humidity;


            document.getElementById('weatherResult').classList.remove('hidden');
        })
        .catch(error => {
            alert(error.message || 'Errore durante il recupero dei dati meteo.');
        });

    document.getElementById('cityInput').value = '';
});
