import createTask from "./taskObject";
//Global Variable
let main = document.getElementById('main');
let projectList = document.getElementById("projectList");
let addProjectButton = document.getElementById("addProjectBtn");
let projectIndex = 0;


//Project Object
const createProject = (name) => {
    let projectName = name;
    let toDoList = [listElement('Sample Item'), listElement('Sample Item'), listElement('Sample Item')];
    
    // let projectDescription = description;

    let getName = () => {
        return projectName;
    }
    let getDescription = () => {
      return projectDescription;
    } 
    let addToList = (newItem) => {
      toDoList.push(newItem);
    }
    let getList = () => {
      return toDoList;
    }
    return {
      getName, getDescription, addToList, getList
    };
  }

const renderProject = (project, root) => {
  //Container div
    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'projectContainer');
  //Index of project
    let projectIndex =  increaseIndex();
    projectContainer.dataset.index = projectIndex;
  //Proect Titel
    let projectTitle = document.createElement('h3');
    projectTitle.innerText = project.getName();
    projectContainer.appendChild(projectTitle);
  
  //Delete project
    let deleteButt = generateButton('Delete');
    projectContainer.appendChild(deleteButt);
    deleteButt.onclick = () => {
        deleteProject(projectContainer);

    };
  

    projectContainer.onclick = function () {
      // document.getElementById("toDos").style.display = "block";
      renderList(project, main);
      
    };


    root.appendChild(projectContainer);
   };

   const increaseIndex = () => {
      return projectIndex ++;

   }

   const renderList = (project, root) => {
    let toDos = document.getElementById("toDos");
  
    clearListDiplay(toDos);
    let listContainer = document.createElement('ul');
    listContainer.setAttribute('id', 'listContainer');
    toDos.appendChild(listContainer);

    let toDoList = project.getList();
    const renderEverything = () => {toDoList.forEach(element => {
      
          listContainer.appendChild(element);
    
    })};

    renderEverything();
    let toDoInput = document.getElementById("addNewItem").value;

    let addButt = document.getElementById('listBtn');
    addButt.onclick = () => {
      let newItem = listElement(toDoInput);
      project.addToList(newItem);
      renderEverything();
      
    }

    root.appendChild(addButt);

   }

   const deleteProject = (projectContainer) => {
    projectContainer.remove();
    }

   

   const generateButton = (text) =>{
    let newButt = document.createElement('button');
    newButt.innerText = text;

    return newButt;

   }

   const clearListDiplay = (areaCleaned) => {
        while (areaCleaned.firstChild) {
          areaCleaned.removeChild(areaCleaned.firstChild);
          }
   }

   const listElement = (content) => {
    let element = document.createElement('li');
    element.innerHTML = content;
    return element;
   }

   




export {createProject, renderProject, renderList, increaseIndex, deleteProject};