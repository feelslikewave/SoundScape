const soundMixesContainer = document.querySelector('.sound-mixes ul');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Function to generate sound mix list items
function displaySoundMixes(data) {
  data.forEach(mix => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<h3>${mix.name}</h3> <p>${mix.category}</p>`;
    listItem.addEventListener('click', () => playMix(mix));
    soundMixesContainer.appendChild(listItem);
  });
}

function playMix(mix) {
  // Logic to play each sound in the mix with their respective volumes
  // Use audio element or library like Howler.js
  playButton.disabled = true;
  pauseButton.disabled = false;
}

function pausePlayback() {
  // Pause all audio elements
  playButton.disabled = false;
  pauseButton.disabled = true;
}

// Add event listeners to play and pause buttons
playButton.addEventListener('click', playMix);
pauseButton.addEventListener('click', pausePlayback);

displaySoundMixes(soundData);  // Call function to display mixes


const soundData = [
  {
    name: "Focus Flow",
    category: "Focus",
    sounds: [
      { name: "Rain", volume: 0.5, src: "rain.mp3" },
      { name: "White Noise", volume: 0.2, src: "whitenoise.mp3" },
      { name: "Cafe Ambience", volume: 0.3, src: "cafeambience.mp3" },
    ],
  },
  // ... other sound mixes
];
