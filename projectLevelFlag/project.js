var projectListArray = [
		'project one',
		'project two',
		'project three',
		'project four',
		'project five',
		'project six',
		'project seven',
		'project eight']
		

var projectList = $('#project_list')


var projectListUl = $('#project_list_ul')

var projectListItem = ''

projectListArray.map(item=>{
	projectListItem += '<li class="project_list_item">'+item+'</li>'
})

projectListUl.innerHTML = projectListItem

var actualPositionFP = 0
var enterKeyPressFP = 0

var inputFieldAll = document.querySelectorAll('.input')

for(var a = 0; a<inputFieldAll.length; a++){

	inputFieldAll[a].addEventListener('keyup',targetInputUpFP,false)
	inputFieldAll[a].inputNo = a


	inputFieldAll[a].addEventListener('keydown',targetInputDownFP,false)
	inputFieldAll[a].inputNo = a

}


function targetInputDownFP(e){

	if(e.target.value[0]!='@')return;
	var totalProjectChild = $('#project_list_ul').childElementCount
	if(e.which==40)actualPositionFP++;
	if(e.which==38)actualPositionFP--;
	if(e.which==13)enterKeyPressFP = 13;
	if(actualPositionFP>totalProjectChild) actualPositionFP = totalProjectChild

	if(actualPositionFP<0)actualPositionFP = 0;

	
}


function targetInputUpFP(e){
	

	var inputFieldValue = e.target.value;

	if(e.target.value[0]!='@')
	{
		projectList.style.display = 'none'
		return ;
	}

	console.log('test')
	
	

	var filterString = e.target.value.substring(1, e.target.value.length);

	
	filterProjectArray = projectListArray.filter(item=>{
		if(item.match(filterString))return true;
		return false;
	})

	projectListItem = ''
	filterProjectArray.map(item=>{
	projectListItem += '<li class="project_list_item">'+item+'</li>'
	})

    projectListUl.innerHTML = projectListItem



	var howMuchTop = 0;

	for(var x = 0; x<e.currentTarget.inputNo;x++){
		howMuchTop += ulSection.children[x].clientHeight+2
	}


	for(var b=0; b<ulTotalChild;b++){

		if(b==e.currentTarget.inputNo){
			

			projectList.style.top = 49+howMuchTop+'px';
			projectList.style.display = 'block'
			
			projectList.style.zIndex = 2;



		}else{
			
			
		}



	}


	var totalProjectChild = $('#project_list_ul').childElementCount

	for(d=1;d<=totalProjectChild;d++){

		if(actualPositionFP == d && actualPositionFP){
			$('#project_list_ul').children[actualPositionFP-1].style.background = 'red'
		}

		if(actualPositionFP == d && actualPositionFP && enterKeyPressFP){

			

			var targetInputField = ulSection.
			children[targetClickedListNo].
			children[0].children[3].
			children[0]


			var projectName = document.createElement('SPAN')
			projectName.classList.add('project_item')

			projectName.innerText = $('#project_list_ul').children[actualPositionFP-1].innerText

			var cross = document.createElement('SPAN')
			cross.classList.add('cross')

			cross.innerText = 'X'



			var whereAddProject = ulSection.
			children[targetClickedListNo].
			children[0].
			children[1]

			
			whereAddProject.appendChild(projectName)
			whereAddProject.appendChild(cross)

			var whereShowProject = ulSection.
			children[targetClickedListNo].
			children[1].
			children[0]

			var projectNameForShow = document.createElement('SPAN')
			projectNameForShow.classList.add('project_item_for_show')
			projectNameForShow.innerText = $('#project_list_ul').children[actualPositionFP-1].innerText

			console.log(projectNameForShow)

			whereShowProject.appendChild(projectNameForShow)



			var crossSection = document.querySelectorAll('.cross')

			for(m = 0;m<crossSection.length;m++){
				crossSection[m].addEventListener('click',crossSectionDeleteFP,false)
			}


			whereAddProject.style.display = 'inline'

			targetInputField.value = ''
			targetInputField.focus()

			actualPositionFP = 0
			enterKeyPressFP = 0

			projectList.style.display = 'none'

		}

	}

}


document.addEventListener('click',function(){
	projectList.style.display = 'none'
})


projectList.addEventListener('click',function(e){
	

	var targetInputField = ulSection.
	children[targetClickedListNo].
	children[0].children[3].
	children[0]

	var whereAddProject = ulSection.
	children[targetClickedListNo].
	children[0].
	children[1]


	var projectName = document.createElement('SPAN')
	projectName.classList.add('project_item')
	projectName.innerText = e.target.innerText

	var cross = document.createElement('SPAN')
	cross.classList.add('cross')
	cross.innerText = 'X'

	whereAddProject.appendChild(projectName)
	whereAddProject.appendChild(cross)


	var whereShowProject = ulSection.
	children[targetClickedListNo].
	children[1].
	children[0]

	var projectNameForShow = document.createElement('SPAN')
	projectNameForShow.classList.add('project_item_for_show')
	projectNameForShow.innerText = e.target.innerText

	whereShowProject.appendChild(projectNameForShow)



	var crossSection = document.querySelectorAll('.cross')

	for(m = 0;m<crossSection.length;m++){
		crossSection[m].addEventListener('click',crossSectionDelete,false)
	}
	


	whereAddProject.style.display = 'inline'

	targetInputField.value = ''
	targetInputField.focus()

	actualPositionFP = 0
	enterKeyPressFP = 0


})


function crossSectionDeleteFP(e){
	
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

