const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=540e6a245a88495b39949a996d45e6bc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}