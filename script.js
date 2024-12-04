
window.onload = function(){
	let progressBar = document.getElementById('progressBar');
	let percentage = document.getElementById('percentage');
	let confirm = document.getElementById('confirm');

	let	currentPercentage = 0;


	function checkProgress(){
		currentPercentage ++;
		progressBar.value = currentPercentage;
		percentage.textContent = currentPercentage + "%";

		if (currentPercentage >= 100) {
			confirm.style.display = 'block';
			return true;
		}
		return false;
	}

	let interval = setInterval(function() {
		if (checkProgress()) {
			clearInterval(interval);
		}
	}, 30);

};



// Second Page

const mousePosition = document.getElementById('mouse_position');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX; 
    const y = event.clientY; 

    mousePosition.textContent = `Mia's mouse position : [x: ${x}, y: ${y}]`;
});

// Fancybox Library
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function recordedActivity(caption){
	const clickHistory = document.getElementById('click_history');
	const historyItem = document.createElement('p');

	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const time = `${hours}:${minutes}:${seconds}`;

	historyItem.textContent = `She accessed the "${caption}" content at ${time}.`;
	historyItem.classList.add('historytext');
	clickHistory.appendChild(historyItem);
}


















