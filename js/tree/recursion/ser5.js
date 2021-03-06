function countTree (e) {
	let sum = 0;

	//Если в разделе указано количество товаров - прибавляем к общей сумме
	if (e.count) {
		sum += e.count;
	}
	//Если в разделе есть подразделы - то проходимся по ним
	//и для каждого подраздела считаем количество товаров так,
	//будто этот подраздел - самостоятельное дерево.
	//Посчитанное там прибавляем к посчитанному здесь.
	if (e.items) {
		for (let item of e.items) {
			sum += countTree(item);
		}
	}

	return sum;
}
