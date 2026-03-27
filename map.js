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

var blocks_url = "data/base_layer.geojson"
var trees_url = "data/SBS_data.geojson"

map.on('load',function(){
    // define a 'source' for your polygons dataset
    map.addSource('blocks_data',{
      'type':'geojson',
      'data': blocks_url,
    });
    // add a new layer with your polygons
    map.addLayer({
        'id':'blocks',
        'type':'fill',
        'source':'blocks_data',
        'paint':{
            'fill-color': 
              ['case', 
              ['==', ['get', 'avg_diam'], null],
              'white',
              ['step', ['get', 'avg_diam'],
                '#ffffff',
                2.615, '#edf8e9',
                6.444, '#bae4b3',
                9.379, '#74c476',
                15.036, '#31a354',
                26.000, '#006d2c'
              ]],
          'fill-outline-color':'#000000',
          'fill-opacity': 0.5
        }
      })

    // define a 'source' for your point dataset
    map.addSource('trees_data',{
    'type':'geojson',
    'data': trees_url
    });
   // add a new layer with your points
    map.addLayer({
    'id':'trees',
    'type':'circle',
    'source':'trees_data',
    'paint':{
      'circle-color': ['match', 
        ['get', 'Certification'],
        'MBE,WBE', '#3b82f6',
        'MBE', '#8b5cf6',
        'WBE', '#facc15',
        '#cccccc'],
      'circle-opacity':0.8,
      'circle-radius':4
    },
  })
  });




