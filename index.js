
function initMap() {
    // Hiof kordinater
    const hiof = { lat: 59.129328448825504, lng: 11.352766323885252 };
    // Posistjon på kartet 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: hiof,
    });
    // Hvor marker skal være på kartet 
    const marker = new google.maps.Marker({
      position: hiof,
      map: map,
    });
  }

  // Kilde brukt for kart: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript 
  
  window.initMap = initMap;



  