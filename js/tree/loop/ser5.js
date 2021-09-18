function countTree (e) {
	let sum = 0;

	//Здесь будет список разделов - ихняя очередь, то бишь
	let allItems = [e];

	//Бегаем в цикле, пока в очереди что-то есть
	while (allItems.length) {
		//Вынимаем очередной раздел из начала очереди
		let e = allItems.shift();
		//Если в разделе указано количество товаров - прибавляем к общей сумме
		if (e.count) {
			sum += e.count;
		}
		//Если в разделе есть подразделы - добавляем их в конец очереди
		if (e.items) {
			allItems = [...allItems, ...e.items];
		}
	}

	return sum;
}
