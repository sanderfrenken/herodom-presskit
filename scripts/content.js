const descriptionTitle = "Description";
const description = _readFile("texts/description");

const historyTitle = "History";
const history = _readFile("texts/history");

const images = [
  "game_1",
  "game_2",
  "game_3",
  "game_4",
  "queensday",
  "store",
  "home",
  "creator",
  "farm",
  "overworld",
  "village",
  "lego",
  "heroes",
  "presentation"
];

const features = [
  "Battle in 20 different levels",
  "Build your own characters using 350+ different assets",
  "150+ units and enemies to explore and master",
  "Build your own farms using 45+ different types of crops, trees and animals",
  "25+ different dishes to cook",
  "Endless mode for never-ending battle fun",
  "Available in English, Spanish and Russian"
];

function displayContent() {
  _displayDescription();
  _displayHistory();
  _displayImagesForGallery();
  _displayFeatures();
}

function _displayHistory() {
  document.getElementById('grid_history').innerHTML = `<h2>${historyTitle}</h2><p>${history}</p>`;
}

function _displayDescription() {
  document.getElementById('grid_description').innerHTML = `<h2>${descriptionTitle}</h2><p>${description}</p>`;
}

function _displayImagesForGallery() {
  let innerHTML = "";
  for (index in images) {
    const image = images[index];
    innerHTML += `<div class="gallery__item"><a href="images/${image}.png"><img src="images/${image}.png" alt="${image}"></a></div>`;
  }
  document.getElementById('gallery_items').innerHTML = innerHTML;
}

function _displayFeatures() {
  let innerHTML = "<ul>";
  for (index in features) {
    const feature = features[index];
    innerHTML += `<li>${feature}</li>`;
  }
  innerHTML += "</ul>";
  document.getElementById('feature-list').innerHTML = innerHTML;
}

function _readFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  return xmlhttp.responseText.replaceAll("\n\n", "<p>").replaceAll("\n", "<br>");
}
