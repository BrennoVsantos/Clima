let clima = {
    apiKey: "684ab908c8f47268a0b434cf133165a3",
    fetchClima: function (cidade){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${this.apiKey}&lang=pt_br&units=metric`
        ).then((response => response.json()))
        .then((data) => this.mostraClima(data));
    },

    mostraClima: function(info){
        const nome = info.name;
        const description  = info.weather[0].description;
        const icone = info.weather[0].icon;
        const {temp, humidity} = info.main;
        const {speed} = info.wind;

        document.querySelector(".cidade").innerHTML = `Clima em ${nome}`;
        document.querySelector(".temperatura").innerHTML = `${temp} °C`;
        document.querySelector(".descricao").innerHTML = description;
        document.querySelector(".icone").src = `http://openweathermap.org/img/wn/${icone}@2x.png`;
        document.querySelector(".humidade").innerHTML = `Umidade: ${humidity}%`;
        document.querySelector(".vento").innerHTML = `Velocidade do vento: ${speed} km/h`;

        document.querySelector(".clima").classList.remove("carrega");
    }
};



document.querySelector(".search button").addEventListener('click', () => {
    const pesquisa = document.querySelector(".search-bar").value
    clima.fetchClima(pesquisa);
})