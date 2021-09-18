document.querySelector('.task-content').innerHTML = `
<style>
.app       {display: grid; grid-template-columns: repeat(3, 200px); grid-template-rows: auto 1fr;}
.app > div {padding: 10px; border-bottom: 1px solid #888;}
.header    {font-weight: bold;}
.button    {width:100px; margin-bottom: 5px; cursor: pointer;}
.result    {}
.expected  {}
.error     {background: #ecc;}
.ok        {background: #cec;}
</style>

<div class="app">
	<div class="header">Кнопы</div>
	<div class="header">Результат</div>
	<div class="header">Ожидалось</div>
	<div class="buttons">
		<input class="button" type="button" value="Вася"><br>
		<input class="button" type="button" value="Петя"><br>
		<input class="button" type="button" value="Джон"><br>
		<input class="button" type="button" value="Гоги"><br>
	</div>
	<div class="result"></div>
	<div class="expected"></div>
</div>
`;