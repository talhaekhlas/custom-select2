var projectListArray = [
		'project one',
		'project two',
		'project three',
		'project four',
		'project five',
		'project six',
		'project seven',
		'project eight']
		var ulSection = $('#ul_design')
		var ulTotalChild = ulSection.childElementCount;

		var projectList = $('#project_list')



		var projectListUl = $('#project_list_ul')

		var projectListItem = ''

		projectListArray.map(item=>{
			projectListItem += '<li class="project_list_item">'+item+'</li>'
		})

		projectListUl.innerHTML = projectListItem

		var actualPosition = 0
		var enterKeyPress = 0

		var taskNameMain = document.querySelectorAll('.task_name_main')

		var targetClickedListNo = null;
		


		for(var i=0; i<taskNameMain.length;i++){

			taskNameMain[i].addEventListener('click',myFunc,false)
			taskNameMain[i].listItemNo = i
			
		}


		function myFunc(e){

			actualPosition = 0;
			enterKeyPress = 0;

		

			targetClickedListNo = e.currentTarget.listItemNo

			
			for(var j=0; j<ulTotalChild;j++){



				if(j==e.currentTarget.listItemNo){
					var dynamicInputField = ulSection.children[j].children[0].children[3]
					var dynamicProject = ulSection.children[j].children[0].children[1]

					var whereProjectShow = ulSection.children[j].children[1].children[0]

					dynamicProject.style.display = 'inline'
					dynamicInputField.style.display = 'inline'
					whereProjectShow.style.display = 'none'

					dynamicInputField.children[0].value=''
					dynamicInputField.children[0].focus()

				}else{
					var dynamicInputField = ulSection.children[j].children[0].children[3]
					var dynamicProject = ulSection.children[j].children[0].children[1]

					var whereProjectShow = ulSection.children[j].children[1].children[0]



					dynamicInputField.style.display = 'none'
					dynamicProject.style.display = 'none'

					whereProjectShow.style.display = 'inline'
					
				}



			}


			
		}


		var inputFieldAll = document.querySelectorAll('.input')



		for(var a = 0; a<inputFieldAll.length; a++){

			inputFieldAll[a].addEventListener('keyup',targetInputUp,false)
			inputFieldAll[a].inputNo = a


			inputFieldAll[a].addEventListener('keydown',targetInputDown,false)
			inputFieldAll[a].inputNo = a

		}




		function targetInputDown(e){

			if(e.target.value[0]!='@')return;
			var totalProjectChild = $('#project_list_ul').childElementCount
			if(e.which==40)actualPosition++;
			if(e.which==38)actualPosition--;
			if(e.which==13)enterKeyPress = 13;
			if(actualPosition>totalProjectChild) actualPosition = totalProjectChild

			if(actualPosition<0)actualPosition = 0;

			
		}


		function targetInputUp(e){
			

			var inputFieldValue = e.target.value;


			if(e.target.value[0]!='@')
			{
				projectList.style.display = 'none'
				return ;
			}
			
			

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

			console.log(actualPosition)

			for(d=1;d<=totalProjectChild;d++){

				if(actualPosition == d && actualPosition){
					$('#project_list_ul').children[actualPosition-1].style.background = 'red'
				}

				if(actualPosition == d && actualPosition && enterKeyPress){

					

					var targetInputField = ulSection.
					children[targetClickedListNo].
					children[0].children[3].
					children[0]


					var projectName = document.createElement('SPAN')
					projectName.classList.add('project_item')

					projectName.innerText = $('#project_list_ul').children[actualPosition-1].innerText

					var cross = document.createElement('SPAN')
					cross.classList.add('cross')

					cross.innerText = 'X'



					var whereAddProject = ulSection.
					children[targetClickedListNo].
					children[0].
					children[1]

					// console.log(whereAddProject)

					// return;

					whereAddProject.appendChild(projectName)
					whereAddProject.appendChild(cross)

					var crossSection = document.querySelectorAll('.cross')

					for(m = 0;m<crossSection.length;m++){
						crossSection[m].addEventListener('click',crossSectionDelete,false)
					}


					whereAddProject.style.display = 'inline'

					targetInputField.value = ''
					targetInputField.focus()

					actualPosition = 0
					enterKeyPress = 0

					projectList.style.display = 'none'

				}

			}


			


		}




		// var inputField = $('.iuput_field')

		// inputField.addEventListener('keyup',function(e){
		// 	console.log(e.target.value)
		// })

		// document.addEventListener('click',function(e){
		// 	var t = e.target
		// 	if(t.className  == 'task_name_main' ||
		// 		t.className == 'task_project_level_input' ||
		// 		t.className == 'task' ||
		// 		t.className == 'project' ||
		// 		t.className == 'level' ||
		// 		t.className == 'iuput_field' || 
		// 		t.className =='input' ||
		// 		t.className == 'asinged_project_level' ||
		// 		t.className == 'asinged_project' ||
		// 		t.className == 'asinged_level'){
		// 		projectList.style.display = 'block'
		// 	}else{
		// 		projectList.style.display = 'none'
		// 	}


			
		// })

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

			actualPosition = 0
			enterKeyPress = 0


		})

		function crossSectionDelete(e){
			
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



		function $(selectElement){
			return document.querySelector(selectElement)
		}