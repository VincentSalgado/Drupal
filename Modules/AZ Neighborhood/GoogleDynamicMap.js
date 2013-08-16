/*
 *Dynamic Google MAP Formatting
 *
 *Javascript file which handles the formatting of the Google Map API call
 *
 *Google MAP API URL Script tag to be placed in page
 *<script>https://maps.googleapis.com/maps/api/js?key=AIzaSyAOqDgzd_mPTBbpYY8duQtJJLJZJ12ZuZI&sensor=true</script>
 *
 *Version: 1.0
 *Date: 20130815
*/


alert("Hello");
function GetGoogleMap() {
alert("Hello");
        google.maps.visualRefresh = false;

        //Main map container
        var map
        
        //Latitude variable to be populated by geocoder data
        var lat = '33.450149657988'
       //  var lat = '<?php echo $latitude; ?>';
        
        //Longitude variable to be populated by geocoder data
        var lng = '-112.091536990995'
        //var lng = <?php echo $longitude; ?>';
       // var lng = document.getElementById("<?php echo $longitude; ?>").className="active";    
        
        var myLatLng = new google.maps.LatLng(lat, lng)
        
        initialize();
        
        function initialize() {

            var mapOptions = {
                zoom: 13,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

              //Only use if you are going to actually display necessary content
              /*var contentString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Phoenix, AZ</h1>'+
                  '<div id="bodyContent">'+
                  '<p>This is some info about Phoenix, AZ</p>'+
                  '<p><a href="http://en.wikipedia.org/wiki/Phoenix,_Arizona">http://en.wikipedia.org/wiki/Phoenix,_Arizona</a>' + 
                  '</p>'+
                  '</div>'+
                  '</div>';

              var infowindow = new google.maps.InfoWindow({
                  content: contentString
              });*/
              
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "This is what you're looking for?",
                animation: google.maps.Animation.DROP,
            });
              
              google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    
alert("Hello Bla");
  });
        }
        
        
        google.maps.event.addDomListener(window, 'load', initialize);
        
alert("Hello Again");
}