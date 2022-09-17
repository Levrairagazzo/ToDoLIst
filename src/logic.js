import createTask from "./taskObject";


const test = () => {
  console.log('This is a test');
}

const createProject = (name, index) => {

    let projectName = name;

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', name);
    projectDiv.dataset.indexNumber = index;
    projectDiv.innerHTML = name;

    let getName = () => {
        return projectName;
    }
   
    return {
      getName, projectDiv
    };
  }

  const createToDo = () => {
    let itemsToDo = [];

    
}
  const createItem = (descriptionTask) => {
    let newItem = document.createElement('div');
    newItem.innerHTML = 
    ` <p>
        ${descriptionTask}
      </p>
    `
return newItem;


  }

export {test, createProject, createToDo ,createItem};