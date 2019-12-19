var ulSection = $('#ul_design')
var ulTotalChild = ulSection.childElementCount;

var taskNameMain = document.querySelectorAll('.task_name_main')

var targetClickedListNo = null;
		

for(var i=0; i<taskNameMain.length;i++){

	taskNameMain[i].addEventListener('click',myFunc,false)
	taskNameMain[i].listItemNo = i
	
}


function myFunc(e){

			
			actualPositionFP = 0;
			enterKeyPressFP = 0;

			targetClickedListNo = e.currentTarget.listItemNo

			for(var j=0; j<ulTotalChild;j++){

				var dynamicInputField = ulSection.children[j].children[0].children[3]
				
				var dynamicProject = ulSection.children[j].children[0].children[1]

				var dynamicLevel = ulSection.children[j].children[0].children[2]

				var whereProjectShow = ulSection.children[j].children[1].children[0]

				var whereLevelShow = ulSection.children[j].children[1].children[1]

				if(j==e.currentTarget.listItemNo){
					
					ulSection.children[j].style.background='white'
					dynamicInputField.style.display = 'inline'

					dynamicProject.style.display = 'inline'

					dynamicLevel.style.display = 'inline'
					
					whereProjectShow.style.display = 'none'

					whereLevelShow.style.display = 'none'

					dynamicInputField.children[0].value=''

					dynamicInputField.children[0].focus()

				}else{
					ulSection.children[j].style.background='#F2F3F4'
					dynamicInputField.style.display = 'none'

					dynamicProject.style.display = 'none'

					dynamicLevel.style.display = 'none'
					
					whereProjectShow.style.display = 'inline'

					whereLevelShow.style.display = 'inline'


					
				}



			}
		
}





function $(selectElement){
	return document.querySelector(selectElement)
}
