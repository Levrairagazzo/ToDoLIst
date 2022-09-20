import {createProject, renderProject, renderList, increaseIndex, deleteProject} from "./logic";

//Global Variable

 let mainArea = document.getElementById('main');
 let projectList = document.getElementById("projectList");
 let addProjectButton = document.getElementById("addProjectBtn");

//Adding new project
 addProjectButton.onclick = function(){
    let titleInput = document.getElementById("projectTitle").value;
    let newPro = createProject(titleInput);
        renderProject(newPro, projectList);
    };









// let index = 1;

// test();


// document.getElementById("myBtn").onclick = function () {
    
//     //Getting the Title of the Project
//     let titleInput = document.getElementById("projectTitle").value;
//     if(titleInput ==='') return;

//    //creating a new Project
//     let newProject = createProject(titleInput, index);
//     index++;
//     const mainArea = document.getElementById('main');
//     mainArea.appendChild(newProject.projectDiv);

//     //adding input and button to newProject
//     newProject.projectDiv.appendChild(addInputAndButton());
    
//     };


