var map;

function initMap() {
    map = new google.maps.Map(document.querySelector('.map'), {
        center: {
            lat: 28.0339,
            lng: 1.6596
        },
        zoom: 5
    });
    const marker = new google.maps.Marker({
        position: {
            lat,
            long
        },
        map: map
    });
}