const lugar = require('./lugar/lugar.js');

const clima = require('./clima/clima.js')

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(-33.459999, -70.639999)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de: ${direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo tener el clima de: ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);