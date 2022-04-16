const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

const kickDrumTimes = document.querySelector('#kick-drum-times');
const snareDrumTimes = document.querySelector('#snare-drum-times');
const hiHatTimes = document.querySelector('#hi-hat-times');

const counter = document.getElementById('count');
let interval = null;

let tickPlayed = 0;

let kickDrumFlag = false;
let hiHatFlag = false;
let snareDrumFlag = false;
function update() {
	if (kickDrumFlag == true) {
		if (tickPlayed == kickDrumTimes.value) {
			kickDrum.play();
		}
        else{
            kickDrum.play();
        }
	}
	if (hiHatFlag == true) {
		if (tickPlayed == hiHatTimes.value) {
			hiHat.play();
		}
        else{
            hiHat.play();
        }
	}
	if (snareDrumFlag == true) {
		if (tickPlayed == snareDrumTimes.value) {
			snareDrum.play();
		}
        else{
            snareDrum.play();
        }
	}
	counter.innerHTML = '';
	counter.innerHTML = tickPlayed;
	if (tickPlayed % 4 == 0) {
		tock.play();
		tickPlayed = 0;
		tickPlayed++;
	} else {
		tick.play();
		tickPlayed++;
	}
}

function setupUpdate() {
	interval = setInterval(update, 600);
}

setTimeout(setupUpdate, 300);

const allCbx = document.querySelectorAll("input[type='checkbox']");
allCbx.forEach((cbx) => {
	cbx.addEventListener('change', function (event) {
		if (!cbx.checked && event.target.value == 'METRONOME') {
			clearInterval(interval);
		} else if (cbx.checked && event.target.value == 'METRONOME') {
			setupUpdate();
		}
		if (cbx.checked && event.target.value == 'KICK-DRUM') {
			kickDrumFlag = true;
		} else if (!cbx.checked && event.target.value == 'KICK-DRUM') {
			kickDrumFlag = false;
		}
		if (cbx.checked && event.target.value == 'HI-HAT') {
			hiHatFlag = true;
		} else if (!cbx.checked && event.target.value == 'HI-HAT') {
			hiHatFlag = false;
		}
		if (cbx.checked && event.target.value == 'SNARE-DRUM') {
			snareDrumFlag = true;
		} else if (!cbx.checked && event.target.value == 'SNARE-DRUM') {
			snareDrumFlag = false;
		}
	});
});