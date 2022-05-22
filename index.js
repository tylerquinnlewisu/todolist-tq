mySubmissionBtn = document.getElementById("mySubmissionBtn"); 

toDosContainer = document.getElementById("toDosContainer"); 

taskTitleInputField = document.getElementById("taskTitle"); 

descriptionInputField = document.getElementById("description");

taskListContainer = document.getElementById('tasklist-container');

instructionsContainer = document.getElementById('instructions-container');


mySubmissionBtn.addEventListener('click', function(){

    if (taskTitleInputField.value != "") {

        /* Make TaskList container visible and instructionsContainer invisible */ 

        taskListContainer.classList.remove("invisible");
        
        instructionsContainer.classList.add("invisible"); 
        


        /* Internal div container */ 

        var wholeContainer = document.createElement('div'); 

        var thisContainer = document.createElement('div'); 

        var anotherContainer = document.createElement('div'); 

        var thirdContainer = document.createElement('div');

        var emptyContainer = document.createElement('p');
        
        



        /* h4, checkbox, description elements of tasks list */ 

        var paragraph = document.createElement('h4'); 
        var check = document.createElement('input'); 
        var description = document.createElement('p'); 

        var deletebtnContainer = document.createElement('button'); 

        var deletebtn = document.createElement('i'); 

        

    



        /* Adding classes and attributes to containers and elements for formatting */ 

        wholeContainer.classList.add("row"); 

        thisContainer.classList.add("col-sm-3"); 

        anotherContainer.classList.add("col-sm-3"); 

        thirdContainer.classList.add("col-sm-3");

        deletebtnContainer.classList.add("col-sm-2");

        paragraph.classList.add("referencePoint"); 

        check.classList.add('form-check-input'); 

        check.setAttribute("type","checkbox"); 

        check.setAttribute("value","");

        check.setAttribute("id","flexCheckDefault");

        deletebtnContainer.setAttribute("href","#"); 

        deletebtnContainer.classList.add('btn'); 

        deletebtnContainer.classList.add('btn-danger'); 

        deletebtnContainer.classList.add('btn-xs'); 

        deletebtn.classList.add("fa-solid"); 

        deletebtn.classList.add("fa-trash-can");  


        /* Pulling text from input fields */ 

        paragraph.innerText = "  " + taskTitleInputField.value; 
        description.innerText = descriptionInputField.value; 


        /* Adding the larger wholeContainer from here to the overall largest toDosContainer which carries every toDo */

        toDosContainer.appendChild(wholeContainer); 


        /* Appending thisContainer, anotherContainer, thirdContainer to wholeContainer */ 

        wholeContainer.appendChild(thisContainer); 

        wholeContainer.appendChild(anotherContainer); 

        wholeContainer.appendChild(thirdContainer); 

        wholeContainer.appendChild(deletebtnContainer); 

        wholeContainer.appendChild(emptyContainer); 
        

        

    

        
        /* Adding elements to containers */

        thisContainer.appendChild(check); 
        anotherContainer.appendChild(paragraph); 
        thirdContainer.appendChild(description); 
        deletebtnContainer.appendChild(deletebtn); 
        



        /* Resetting input fields */

        taskTitleInputField.value = ""; 
        descriptionInputField.value = ""; 


        /* UI for marking items as completed */

        check.addEventListener('click',function(){
            
            if (paragraph.style.textDecoration != "line-through") {
                paragraph.style.textDecoration = "line-through"; 
                description.style.textDecoration = "line-through"; 
            } else {
                paragraph.style.textDecoration = "none";
                description.style.textDecoration = "none"; 
            } 
        })

        deletebtnContainer.addEventListener('click',function(){
            toDosContainer.removeChild(wholeContainer)
        })
    }

})
