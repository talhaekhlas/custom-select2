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


function targetInputDownFL(e){

	if(e.target.value[0]!='#')return;
	var totalLevelChild = $('#level_list_ul').childElementCount
	if(e.which==40)actualPositionFL++;
	if(e.which==38)actualPositionFL--;
	if(e.which==13)enterKeyPressFL = 13;
	if(actualPositionFL>totalLevelChild) actualPositionFL = totalLevelChild

	if(actualPositionFL<0)actualPositionFL = 0;

	console.log(actualPositionFL)

	
}



function targetInputUpFL(e){
	

	var inputFieldValue = e.target.value;

	if(e.target.value[0]!='#')
	{
		levelList.style.display = 'none'
		return ;
	}



	var filterString = e.target.value.substring(1, e.target.value.length);

	
	filterLevelArray = levelListArray.filter(item=>{
		if(item.match(filterString))return true;
		return false;
	})



	levelListItem = ''
	filterLevelArray.map(item=>{
	levelListItem += '<li class="level_list_item">'+item+'</li>'
	})

    levelListUl.innerHTML = levelListItem



	var howMuchTop = 0;

	for(var x = 0; x<e.currentTarget.inputNo;x++){
		howMuchTop += ulSection.children[x].clientHeight+2
	}


	for(var b=0; b<ulTotalChild;b++){

		if(b==e.currentTarget.inputNo){
			

			levelList.style.top = 49+howMuchTop+'px';
			levelList.style.display = 'block'
			
			levelList.style.zIndex = 2;



		}else{
			
			
		}


	}


	var totalLevelChild = $('#level_list_ul').childElementCount

	for(d=1;d<=totalLevelChild;d++){

		if(actualPositionFL == d && actualPositionFL){

			$('#level_list_ul').children[actualPositionFL-1].style.background = 'red'
		}

		if(actualPositionFL == d && actualPositionFL && enterKeyPressFL){

			

			var targetInputField = ulSection.
			children[targetClickedListNo].
			children[0].children[3].
			children[0]


			var levelName = document.createElement('SPAN')
			levelName.classList.add('level_item')

			levelName.innerText = $('#level_list_ul').children[actualPositionFL-1].innerText

			var cross = document.createElement('SPAN')
			cross.classList.add('cross')

			cross.innerText = 'X'



			var whereAddLevel = ulSection.
			children[targetClickedListNo].
			children[0].
			children[2]

			
			whereAddLevel.appendChild(levelName)
			whereAddLevel.appendChild(cross)

			var whereShowLevel = ulSection.
			children[targetClickedListNo].
			children[1].
			children[1]

			var levelNameForShow = document.createElement('SPAN')
			levelNameForShow.classList.add('level_item_for_show')
			levelNameForShow.innerText = $('#level_list_ul').children[actualPositionFL-1].innerText

			

			whereShowLevel.appendChild(levelNameForShow)



			var crossSection = document.querySelectorAll('.cross')

			for(m = 0;m<crossSection.length;m++){
				crossSection[m].addEventListener('click',crossSectionDeleteFL,false)
			}


			whereAddLevel.style.display = 'inline'

			targetInputField.value = ''


			targetInputField.focus()

			actualPositionFL = 0
			enterKeyPressFL = 0

			levelList.style.display = 'none'

		}

	}

}


function crossSectionDeleteFL(e){
	
	var parentNode = e.target.parentNode
	var index = Array.prototype.indexOf.call(parentNode.children,e.target)
	var indexDeleteShow = (index+1)/2 - 1;

	var parentNodeForShow = e.target.
	parentNode.
	parentNode.
	parentNode.
	children[1].
	children[0]

	

	var deleteFromShowNode = e.target.
	parentNode.
	parentNode.
	parentNode.
	children[1].
	children[0].children[indexDeleteShow]


	
	parentNode.removeChild(parentNode.children[index])
	parentNode.removeChild(parentNode.children[index-1])


	parentNodeForShow.removeChild(deleteFromShowNode)
	

}