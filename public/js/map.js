var ApiKey_googleMaps = "AIzaSyDSMDeXXQxaeLJ4ZGXuwSKAM3NHBP4ckTc";

/*
 cutting down a test script i had
*/

 

//geocode address
var my_address = "39 wallis ave 07306";
var my_address = "300 Atrium Dr, Franklin, NJ, 08873";
my_address = my_address.replace(/\s/g, '+');
var src = "https://maps.googleapis.com/maps/api/geocode/json?address=" + my_address + "&key=" + ApiKey_googleMaps;




function g_geoCode( callback) {
    //need to make call from annie tmdb to get ishowtime movieid
    console.log("top of g_geocode")
    jQuery.ajax({
        url: src,
        type: "GET",
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
			callback(data.results[0].geometry.location );
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



  function ourMap( geoAddObj) { 
		console.log("ourMap");
		console.log(geoAddObj);
		  //---------------------------------------------------------
		  src = "https://maps.googleapis.com/maps/api/js?key=" + ApiKey_googleMaps + "&callback=initMap";
            var options = {
                zoom: 16,
                center:  geoAddObj  //{ lat: Latitude, lng: Longitude }
            }
            var map = new google.maps.Map(document.getElementById('map'), options);

            var marker2 = new google.maps.Marker({
                position:   geoAddObj ,//data.results[0].geometry.location ,  //{ lat: Latitude, lng: Longitude },
                map: map
            });
	
}



$(document).ready(function () {
    console.log("in Doc ready");    
       g_geoCode( ourMap);
    

}); 