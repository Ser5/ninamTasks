{
	let resultNode   = document.querySelector('.result');
	let expectedNode = document.querySelector('.expected');
	let rc           = resultNode.classList;

	function check (e) {
		setTimeout(function () {
			expectedNode.innerHTML = e.target.value;

			if (resultNode.innerHTML == expectedNode.innerHTML) {
				rc.remove('error');
				rc.add('ok');
			} else {
				rc.remove('ok');
				rc.add('error');
			}
		}, 0);
	}

	for (let button of document.querySelectorAll('.button')) {
		button.addEventListener('click', check);
	}
}
