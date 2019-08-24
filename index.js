if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){


        var city = document.getElementById("city")
        var country = document.getElementById("country")
        var temp = document.getElementById("left-temp")
        var climateCity = document.getElementById("climateCity");
        var weather_app = document.getElementById("weather-app");
        var change = document.getElementById("change");
        
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
            .then((response)=>response.json())
            .then((json)=> {
                console.log(json);
                city.textContent = json.name;
                country.textContent = json.sys.country;
                temp.textContent = json.main.temp;
                climateCity.textContent = json.weather[0].main;
                weather_app.style.opacity = 1;
                let c_temp = json.main.temp;
                let f_temp = 1.8 * (json.main.temp) + 32;
                f_temp = Number(Math.round(f_temp+'e2')+'e-2')

                change.addEventListener('click',() =>{
                    if(change.textContent == 'C'){
                        temp.textContent = f_temp;
                        change.textContent = 'F';
                    }
                    else if(change.textContent == 'F'){
                        temp.textContent = c_temp;
                        change.textContent = 'C';
                    }
                })


            } )



    })   
}

else{
}
