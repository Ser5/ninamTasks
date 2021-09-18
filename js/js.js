{
	let q = s=>document.querySelector(s);

	let taskDescriptionNode = q('.tasks__description');
	let scriptsNode         = q('.scripts');

	let which = 'ninam';
	let taskCode;

	let tasksData = {
		'tree/recursion': {
			files: {
				pre:   ['js/tree/data.js'],
				ser5:  ['js/tree/recursion/ser5.js'],
				ninam: ['js/tree/recursion/ninam.js'],
				post:  ['js/tree/recursion/1.js'],
			},
			description: `
				<p>В файле <code>js/tree/recursion/ninam.js</code> запилить рекурсивную функцию <code>countTree(e)</code>, которая обходит всё дерево каталога и суммирует все количества товаров.</p>
				<p>Корневой раздел — "Каталог".</p>
				<p>Подразделы в каждом разделе — это поле <code>items</code>.</p>
				<p>Количество товаров — поле <code>count</code>.</p>
				<p>Результат проверки функции — в консоли брофсира.</p>
			`,
		},
		'tree/loop': {
			files: {
				pre:   ['js/tree/data.js'],
				ser5:  ['js/tree/loop/ser5.js'],
				ninam: ['js/tree/loop/ninam.js'],
				post:  ['js/tree/loop/1.js'],
			},
			description: `
				<p>В файле <code>js/tree/loop/ninam.js</code> запилить обычную, нерекурсивную функцию <code>countTree(e)</code>, которая обходит всё дерево каталога при помощи одного цикла for и суммирует все количества товаров.</p>
				<p>Корневой раздел — "Каталог".</p>
				<p>Подразделы в каждом разделе — это поле <code>items</code>.</p>
				<p>Количество товаров — поле <code>count</code>.</p>
				<p>Результат проверки функции - в консоли брофсира.</p>
			`,
		},
		'onclick/direct': {
			files: {
				pre:   ['js/onclick/init.js'],
				ser5:  ['js/onclick/direct/ser5.js'],
				ninam: ['js/onclick/direct/ninam.js'],
				post:  ['js/onclick/direct/1.js'],
			},
			description: `
				Навесить на каждую кнопку <code>.button</code> обработчик, который при клике будет брать значение атрибута <code>value</code> этой кнопки и выводить в столбце <code>.expected</code>.
			`,
		},
	};


	let insertScript = function (pathsList) {
		if (pathsList) {
			for (let path of pathsList) {
				let scriptNode = document.createElement('script');
				scriptNode.src = path;
				scriptsNode.insertAdjacentElement('beforeend', scriptNode);
			}
		}
	};


	let redirect = function () {
		window.location = (''+window.location).match(/^[^?]+/)[0] + `?task=${taskCode}&which=${which}`;
	};
	q('.tasks__which').onclick = function (e) {
		if (e.target.name = 'which' && taskCode) {
			which = e.target.value;
			redirect();
		}
	};
	q('.tasks__buttons').onclick = function (e) {
		if (e.target.classList.contains('tasks__button')) {
			taskCode = e.target.dataset.code;
			redirect();
		}
	};


	let queryParamsString = (''+window.location).match(/\?(.+)/)?.[1];
	if (queryParamsString) {
		let queryParamsList = queryParamsString.split('&');

		for (let kv of queryParamsList) {
			let [key, value] = kv.split('=');
			if (key == 'which') {
				which = value;
			} else {
				taskCode = value;
			}
		}

	}

	q(`input[name="which"][value="${which}"]`).checked = true;

	if (taskCode) {
		let task = tasksData[taskCode];
		taskDescriptionNode.innerHTML = '<h2>&nbsp;</h2>' + task.description;

		insertScript(task.files.pre);
		insertScript(task.files[which]);
		insertScript(task.files.post);
	}
}
