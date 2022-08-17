// // // const google = "https://maps.googleapis.com/maps/api/js"
// const geolocator = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBGOiPZJhzYO3lxGGPOQsq3OijyDInJC5E";

// // this is for geolocator display (test)
// let helpBtn = document.getElementById("help_button");
// let pl = document.getElementById("e");
// helpBtn.onclick = function getLocation(){
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         return;
//     }
// }

// function showPosition(position){
//     pl.innerText = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
//     let lati = position.coords.latitude
//     let longi = position.coords.longitude
//     console.log(lati, longi)
// }

// // this is for google maps display (test)
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { 
//         lat: 100,
//         lng: 100
//     },
//     zoom: 8,
//   });
// }

// window.initMap = initMap;