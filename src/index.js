import {createProject, test, createItem} from "./logic";

let index = 1;

test();





document.getElementById("myBtn").onclick = function () {
    
    //Getting the Title of the Project
    let titleInput = document.getElementById("projectTitle").value;
    if(titleInput ==='') return;
   
    let newProject = createProject(titleInput, index);
    index++;
    const main = document.getElementById('projectList');
    main.appendChild(newProject.projectDiv);
    main.appendChild(createItem("This is a description!"));

    
    };

