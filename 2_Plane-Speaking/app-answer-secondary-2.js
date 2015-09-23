var xPlanes = {
  "X-1": "The first aircraft to break the sound barrier.",
  "X-3": "A good-looking failure.",
  "X-15": "The fastest manned aircraft in history.",
  "X-29": "Proof-of-concept for Forward-Swept-Wing technology.",
  "X-31": "Tech demonstrator for thrust-vectoring.",
  "X-37": "The Air Force's secret little spaceplane.",
  "X-45": "UCAV test platform."
};
// Now that we have our array of planes, we need to add elements to our DOM
// for each one.
var e = document.getElementById("planes-list");
for(var i=0; i<Object.keys(xPlanes).length; i++) {
  var xPlane = Object.keys(xPlanes)[i];
  console.log(xPlane);
  var description = xPlanes[xPlane];
  e.innerHTML += "<li><h2>" + xPlane + "</h2>" +
                "<p>" + description + "</p>" +
                "</li>";
}
