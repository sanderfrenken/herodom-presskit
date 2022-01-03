const descriptionTitle = "Description";
const description = "dasdasdasdasdasdas";

const historyTitle = "History";
const history = "Add some storytelling here. Not the scenario of your game, but rather some backgrounds behind the creation process: why are you making this game? Most projects starts with a cool story.";

const images = [
  "game_1",
  "game_2",
  "game_3",
  "game_4",
  "home",
  "lego",
  "queensday",
  "store",
  "creator",
  "farm",
  "overworld",
  "village",
  "heroes",
  "presentation"
];

function displayContent() {
  displayDescription();
  displayHistory();
  displayImagesForGallery();
}

function displayHistory() {
  document.getElementById('grid_history').innerHTML = `<h2>${historyTitle}</h2><p>${history}</p>`;
}

function displayDescription() {
  document.getElementById('grid_description').innerHTML = `<h2>${descriptionTitle}</h2><p>${description}</p>`;
}

function displayImagesForGallery() {
  let innerHTML = "";
  for (index in images) {
    const image = images[index];
    innerHTML += `<div class="gallery__item"><a href="images/${image}.png"><img src="images/${image}.png" alt="${image}"></a></div>`;
  }
  document.getElementById('gallery_items').innerHTML = innerHTML;
}
