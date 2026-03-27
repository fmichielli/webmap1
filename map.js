'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW44NjgycXkwOGNmMm9xNXdvZWFpZW04In0.b3yZio4RED5oapOmpEPVzA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14
});