// xPlanes is defined in xPlanes.js

var e = document.getElementById("planes-list");
for(var i=0; i<xPlanes.length; i++) {
  var xPlane = xPlanes[i];
  console.log(xPlane.name);
  // Heading
  var newPlane = document.createElement("div");
  var newPlaneHeading = document.createElement("h2")
  newPlaneHeading.innerHTML = xPlane.name;
  // Image
  var newPlaneImage = document.createElement("img");
  newPlaneImage.setAttribute("src",xPlane.imageUrl);
  newPlaneImage.setAttribute("width","100%");
  // Description
  var newPlaneDescription = document.createElement("p")
  newPlaneDescription.innerHTML = xPlane.description;
  // Put it all together
  newPlane.appendChild(newPlaneHeading);
  newPlane.appendChild(newPlaneImage);
  newPlane.appendChild(newPlaneDescription);
  e.appendChild(newPlane);
};
