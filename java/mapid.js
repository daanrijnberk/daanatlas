var mymap = L.map('mapid').setView([52.356249,5.620991], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFhbjA4MDIiLCJhIjoiY2tpNXYzMDV6MnVldjJxbXB1emw5aDNyZCJ9.-C7Qteu7PIRRIyBuiedBtQ'
}).addTo(mymap);

var myvar = 
{
"type": "FeatureCollection",
"features": [
{
"type": "Feature",
"properties": {
  "marker-color": "#ff0000",
  "marker-size": "medium",
  "marker-symbol": "city"
},
"geometry": {
  "type": "Point",
  "coordinates": [
  5.620991,
  52.356249
  ]
}
}
]
};

var x = L.geoJSON(myvar).addTo(mymap);   

const geoJsonLayer = L.geoJson().addTo(mymap);

function zoomOnClick() {
mymap.setView( [52.356249,5.620991], 12)

fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=gem-f62e7c1f70b07988ba1715f232fe6fbe&fl=*')
.then(response => response.json())
.then(data => {
  const wkt = data.response.docs[0].geometrie_ll

  const geojson = Terraformer.wktToGeoJSON(wkt)
  console.log(geojson)
  geoJsonLayer.addData(geojson)
})


}