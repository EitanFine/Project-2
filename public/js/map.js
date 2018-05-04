var ApiKey_googleMaps = "AIzaSyDSMDeXXQxaeLJ4ZGXuwSKAM3NHBP4ckTc";


//geocode address default address
var my_address = "39 wallis ave 07306";





function g_geoCode(address, callback) {
    my_address = address.replace(/\s/g, '+');
    var src = "https://maps.googleapis.com/maps/api/geocode/json?address=" + my_address + "&key=" + ApiKey_googleMaps;
    console.log("top of g_geocode")
    jQuery.ajax({
        url: src,
        type: "GET",
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            callback(data.results[0].geometry.location);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
            console.log(errorThrown);
            console.log(jqXHR);
        })
        .always(function () {
            /* ... */
            console.log('g_geoCode always');
        });
    console.log("bottom of g_geocode")
};



function ourMap(geoAddObj) {
    console.log("\n\nourMap\n\n");
    console.log(geoAddObj);
    //---------------------------------------------------------
    src = "https://maps.googleapis.com/maps/api/js?key=" + ApiKey_googleMaps + "&callback=initMap";
    var options = {
        zoom: 16,
        center: geoAddObj  //{ lat: Latitude, lng: Longitude }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker2 = new google.maps.Marker({
        position: geoAddObj,//data.results[0].geometry.location ,  //{ lat: Latitude, lng: Longitude },
        map: map
    });

}



$(document).ready(function () {
    console.log("\n\nin Doc ready\n\n");
    inititeminfo();
}); 