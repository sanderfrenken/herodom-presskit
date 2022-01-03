const descriptionTitle = "Description";
const description = "dasdasdasdasdasdas";

const historyTitle = "History";
const history = "Add some storytelling here. Not the scenario of your game, but rather some backgrounds behind the creation process: why are you making this game? Most projects starts with a cool story.";

function displayContent() {
  displayDescription();
  displayHistory();
}

function displayHistory() {
  document.getElementById('grid_history').innerHTML = `<h2>${historyTitle}</h2><p>${history}</p>`;
}

function displayDescription() {
  document.getElementById('grid_description').innerHTML = `<h2>${descriptionTitle}</h2><p>${description}</p>`;
}
