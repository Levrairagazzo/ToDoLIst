
//Global Variable
let main = document.getElementById('main');
let projectList = document.getElementById("projectList");
let addProjectButton = document.getElementById("addProjectBtn");
let projectIndex = 0;
let toDos = document.getElementById("toDos");



//Project Object
const createProject = (name) => {
    let projectName = name;
    let toDoList = [listElement('Sample Item'), listElement('Sample Item'), listElement('Sample Item')];
    
    // let projectDescription = description;

    let getName = () => {
        return projectName;
    }
   
    let addToList = (newItem) => {
      toDoList.push(newItem);
    }
    let getList = () => {
      return toDoList;
    }

    let getListLength = () => {
        return toDoList.length;
    }

    let removeFromList = (index) => {
      toDoList.splice(index, 1);
    } 
    return {
      getName, addToList, getList, removeFromList, getListLength
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
    projectTitle.setAttribute('class','title');
    projectTitle.innerText = project.getName();
    projectContainer.appendChild(projectTitle);
  
  //Delete project
    let deleteButt = generateButton('Delete');
    deleteButt.setAttribute('class', 'deleteProjectBtn');
    projectContainer.appendChild(deleteButt);
    deleteButt.onclick = () => {


        deleteProject(projectContainer);

    };

  
  
    
      
   
    projectTitle.onclick = function () {
      renderList(project);
      
    };
  

    root.appendChild(projectContainer);
   };

   const increaseIndex = () => {
      return ++projectIndex;

   }

  const render = (project, root) => { //Former render list function

    let toDoList = project.getList();
   
    clearListDiplay(toDos);
    let listContainer = document.createElement('ul');
    listContainer.setAttribute('id', 'listContainer');
    toDos.appendChild(listContainer);

    
    const renderEverything = () => {
      let elementIndex = 0;
      toDoList.forEach(element => {
          element.dataset.index = ++elementIndex;
          let deleteToDo = document.createElement('button');
          deleteToDo.innerText = "Delete task";
          deleteToDo.addEventListener('click', () => {
            removeElement(project,element,elementIndex)
      

            }, false);

          listContainer.appendChild(element);
          listContainer.appendChild(deleteToDo);
    
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
    clearListDiplay(toDos)
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
    let element = document.createElement('div');
    element.innerText = content;
  
    return element;
   }

   const removeElement = (project, element, index) => {
    element.remove();
    project.removeFromList(index);
   }

   const renderList = (project) => {
    clearListDiplay(toDos);
    let list = project.getList();
    let size = project.getListLength();

    if(size === 0) return;


    for (let i = 0; i < size; i++) {
      let elementContainer = document.createElement('li');
      elementContainer.setAttribute = 'elementContainer';
      elementContainer.dataset.index = i;
      elementContainer.appendChild(list[i]);
    
      let deleteToDo = document.createElement('button');
      deleteToDo.innerText = "Delete task";
      deleteToDo.addEventListener('click', () => 
        {
        project.removeFromList(i);
        elementContainer.remove();

        }, false);
      elementContainer.appendChild(deleteToDo);

    toDos.appendChild(elementContainer);

      
    }

    

    let addButt = document.getElementById('listBtn');
    addButt.onclick = () => {
      let toDoInput = document.getElementById("addNewItem").value;
      let newItem = listElement(toDoInput);
      project.addToList(newItem);
      renderList(project);
      
    }

    root.appendChild(addButt);
   }

   




export {createProject, renderProject, increaseIndex, deleteProject};