/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const geolocator = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBGOiPZJhzYO3lxGGPOQsq3OijyDInJC5E";
let helpBtn = document.getElementById("click_here");
let lati;
let longi;
// this is for geolocator display (test)
helpBtn.onclick = function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        return;
    }
}

function showPosition(position){
    // pl.innerText = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
    lati = Number(position.coords.latitude);
    longi = Number(position.coords.longitude);
    initMap(lati, longi);
}

 function initMap(lat, long) {
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: lat, lng: long },
     zoom: 8,
   });
 }
 initMap(lati, longi);
 window.initMap = initMap;
 


