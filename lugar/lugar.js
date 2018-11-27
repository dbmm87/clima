const axios = require('axios');

const getLatLng = async (direccion) =>{
    let urlEncode = encodeURI(direccion);

    let resp  = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncode}&key=AIzaSyAIiOTMADOcPStOH7Q7u_s4nHZYdrO-fzg`)
   
    if (resp.data.status === "ZERO_RESULT")  {
        throw new Error (`No hay resultados para la ciudad ${ direccion }`);
    } 
    let data = resp.data.results[0];
    let dataLocation = data.geometry.location;
    return {
        direccion: data.formatted_address,
        lat: dataLocation.lat,
        lng: dataLocation.lng,
    }
}

module.exports = {
    getLatLng
}

