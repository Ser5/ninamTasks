let resultNode = document.querySelector('.result');

function clickListener (e) {
	resultNode.innerHTML = e.target.value;
}

for (let button of document.querySelectorAll('.button')) {
	button.addEventListener('click', clickListener);
}
