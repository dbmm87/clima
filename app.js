const  lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:"Direccion de la ciudad para obtener el clima",
        demand:true,
    }
}).argv;

let getTemp = async (direccion) =>{
    try {      
        let coord = await lugar.getLatLng(direccion);
        let temp = await clima.getClima(coord.lat,coord.lng);
        return `El clima en: ${direccion} es de ${temp.temp } ̣̣̣̣C`;
    } catch (error) {
        return "No se pudo determinar el clima en la ciudad indicada";
    }
}
getTemp(argv.direccion).then(mensaje=>console.log(mensaje)).catch(e =>console.log(e));