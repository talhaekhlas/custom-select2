var levelListArray = [
		'level one',
		'level two',
		'level three',
		'level four',
		'level five',
		'level six',
		'level seven',
		'level eight']

var levelList = $('#level_list')

var levelListUl = $('#level_list_ul')

var levelListItem = ''

levelListArray.map(item=>{
	levelListItem += '<li class="level_list_item">'+item+'</li>'
})

levelListUl.innerHTML = levelListItem