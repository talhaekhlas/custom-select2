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


var actualPositionFL = 0
var enterKeyPressFL = 0

var inputFieldAll = document.querySelectorAll('.input')

for(var a = 0; a<inputFieldAll.length; a++){

	inputFieldAll[a].addEventListener('keyup',targetInputUpFL,false)
	inputFieldAll[a].inputNo = a

	inputFieldAll[a].addEventListener('keydown',targetInputDownFL,false)
	inputFieldAll[a].inputNo = a

}