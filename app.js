// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.getElementById('list');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const button = document.getElementsByTagName('button');
const heart = document.querySelectorAll('.tries img');
const overlay = document.getElementById('overlay');



// Create an array named phrases
let phrases = [
    'Shoot for the stars',
    'Coding is fun',
    'I am hungry',
    'Hopefully this pandemic will end soon',
    'Time flies when you are having fun'
];


/* Attach an event listener to the "Start Game" 
button to hide the start screen overlay */
startGame.addEventListener('click', () => {
	overlay.style.display = 'none';
});


/* Create a getRandomPhraseAsArray function that will randomly choose a phrase from the phrases array 
split the phrase into a new array of characters. Then, it will return 
the new character array. */
function getRandomPhraseAsArray(arr) {
	let string = phrases[Math.floor(Math.random() * phrases.length)];
		let newString = string.split('');
		return newString;
	};

let randomPhraseArray = getRandomPhraseAsArray(phrases);



/* Create an addPhraseToDisplay function that loops through an array
of characters, creates an li element per character, appends each li 
to the #phrase ul . */
function addPhraseToDisplay(arr) {
	for (let i = 0; i < arr.length; i++) {
		let li = document.createElement('li');
		li.textContent = arr[i];
		ul.appendChild(li);
		if(arr[i] !== ' ') {
			 li.className = 'letter';
		}else {
			li.className = 'space';
		}
	}
};

let addToDisplay = addPhraseToDisplay(randomPhraseArray);

/* Create a checkLetter function... */
function checkLetter(btn) {
	let li = document.querySelectorAll(".letter");
	let match = null;
	for(let i = 0; i < li.length; i++) {
		if(li[i].textContent.toLowerCase() === btn.textContent) {
			li[i].classList.add('show');
			match = li[i].textContent;
		}
	}
	return match;const phraseArray = getRandomPhraseAsArray(phrases);
};

// Add an event listener
qwerty.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON'){
			e.target.className = 'chosen';
			e.target.disabled = true;
		} else  {
			alert('Please click a button.')
		}
	let btnCheck = checkLetter(e.target);
	if (btnCheck === null) {
		missed += 1;
		heart[missed - 1].src = "images/lostHeart.png";
		}
	checkWin();
});


function checkWin() {
	let letters = document.querySelectorAll('.letter');
	let show = document.getElementsByClassName('show');
		if (letters.length === show.length) {
			overlay.className = 'win';
			overlay.style.display = 'flex';
			document.querySelector('h2').textContent = 'You won!';
		}else if (missed > 4) {
			overlay.className = 'lose';
			overlay.style.display = 'flex';
			document.querySelector('h2').textContent = 'You lost :(';
	}
	

};

