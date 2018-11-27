const axios = require("axios");
const getClima = async (lat,lng) =>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5186eac3376ca9a4d577791c3605e626`);
    let data = resp.data;
    let temp = data.main;
    //console.log(data);
    if (!data.cod === 200){
        throw new Error ('No se puede procesar la solicitud....');
    }
    return {
        temp:temp.temp,
        hunidity:temp.humidity,
        temp_min:temp.temp_min,
        temp_max:temp.temp_max,
    }
}
module.exports ={
    getClima
}