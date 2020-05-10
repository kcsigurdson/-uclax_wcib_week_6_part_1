const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgDesc = document.querySelector('.img-desc');

/* Looping through images */
var x;
var imgPath = '';
var photoDesc = [
  'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.',
  'The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I.',
  'The Basilica of the Sacred Heart of Paris, commonly known as Sacré-Cœur Basilica and often simply Sacré-Cœur, is a Roman Catholic church and minor basilica, dedicated to the Sacred Heart of Jesus, in Paris, France',
  'The Pont Alexandre III is a deck arch bridge that spans the Seine in Paris. It connects the Champs-Élysées quarter with those of the Invalides and Eiffel Tower. The bridge is widely regarded as the most ornate, extravagant bridge in the city. It is classified as a French monument historique since 1975.',
  "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet)",
  "Notre-Dame de Paris, referred to simply as Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. The cathedral was consecrated to the Virgin Mary and considered to be one of the finest examples of French Gothic architecture."
];

for (x=1; x<7; x++){

  const newImage = document.createElement('img');
  imgPath = 'images/img' + x + '.jpg';
  newImage.setAttribute('src', imgPath);
  thumbBar.appendChild(newImage);

  newImage.onclick = function(showImage) {
    displayedImage.src = showImage.target.src;
    var newImgPath = (showImage.target.src).toString();
    var arrLoc = newImgPath.charAt(newImgPath.length-5);
    imgDesc.textContent = photoDesc[arrLoc-1];
  }
}


/* Wiring up the Darken/Lighten button */
// btn.onclick = function() {
//   alert("Hi I'm working");

  // var btnStatus = btn.getAttribute('class');
  //
  // if (btnStatus == 'dark') {
  //   btn.setAttribute('class', 'light');
  //   var newBtnStatus = btn.getAttribute('class');
  //   btn.textContent = 'Lighten';
  //   overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  // }
  //
  // if (btnStatus == 'light') {
  //   btn.setAttribute('class', 'dark');
  //   var newBtnStatus = btn.getAttribute('class');
  //   btn.textContent = 'Darken';
  //   overlay.style.backgroundColor = "rgba(0,0,0,0)";
  // }
