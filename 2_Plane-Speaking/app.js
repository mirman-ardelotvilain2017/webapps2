var xPlanes = [
  {
    "name":"X-1",
    "description":"First plane to break the sound barrier",
    "imageURL":"http://www.trizic.com/wp-content/uploads/2015/04/bell-x-1_picture.jpg"
  },
  {
    "name":"X-3",
    "description":"Did not do what it was designed to do",
    "imageURL":"https://simotron.files.wordpress.com/2012/05/x-3-on-ramp.jpg"
  },
  {
    "name":"X-15",
    "description":"Hypersonic, first manned hypersonic plane, could fly at Mach 6.7",
    "imageURL":"http://i.ytimg.com/vi/QCnmuAkrf9M/maxresdefault.jpg"
  },
  {
    "name":"X-29",
    "description":"Wings jut out forwards",
    "imageURL":"https://upload.wikimedia.org/wikipedia/commons/9/91/Grumman-X29-InFlight.jpg"
  },
  {
    "name":"X-31",
    "description":"Test plane for supermaneuverability",
    "imageURL":"https://upload.wikimedia.org/wikipedia/commons/9/92/Rockwell_MBB_X31.jpg"
  },
  {
    "name":"X-37",
    "description":"Spaceplane capable of orbital flight",
    "imageURL":"http://galerie.valka.cz/data/962/medium/X-37A_001.jpg"
  },
  {
    "name":"X-45",
    "description":"UCAV (Unmanned Combat Air Vehicle) Tester",
    "imageURL":"https://upload.wikimedia.org/wikipedia/commons/2/2a/US_Navy_050627-N-0295M-003_A_full_scale_Joint_Unmanned_Combat_Air_Systems_(J-UCAS)_X-45C_on_display_at_the_2005_Naval_Unmanned_Aerial_Vehicle_Air_Demo_held_at_the_Webster_Field_Annex_of_Naval_Air_Station_Patuxent_River.jpg"
  },
];

// Now that we have our array of planes, we need to add elements to our DOM
// for each one.

var RickPasta = document.getElementById("planes-list"); //This line is unfinished! Use a method to capture our <ul> element.

for(var plane in xPlanes) {
  var JohnPasta = xPlanes[plane];
  RickPasta.innerHTML += "<h2>" + JohnPasta.name+"</h2>";
  RickPasta.innerHTML += "<p>" + JohnPasta.description+"</p>";
  RickPasta.innerHTML += "<img src='" + JohnPasta.imageURL+ " ' />";
}
