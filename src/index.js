import {createProject, test, createItem, addInputAndButton, testFunction, renderProject} from "./logic";

 let mainArea = document.getElementById('main');

 let newPro = createProject('my project');

 renderProject(newPro,mainArea);

 console.log('hello');


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


