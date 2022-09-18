import createTask from "./taskObject";



const test = () => {
  console.log('This is a test');
}


//Project Object
const createProject = (name) => {
    let toDoList = [];
    let projectName = name;
    // let projectDescription = description;

    let getName = () => {
        return projectName;
    }
    let getDescription = () => {
      return projectDescription;
    } 
    let addToList = (item) => {
      
    }
    return {
      getName, getDescription, addToList
    };
  }

   const renderProject = (project, root) => {
    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'projectContainer');

    let projectTitle = document.createElement('h3');
    console.log(project.getName());
    projectTitle.innerText = project.getName();
  


    projectContainer.appendChild(projectTitle);

    root.appendChild(projectContainer);

    console.log('hello')



   };

//   const createToDo = () => {
//     let itemsToDo = [];


    
// }
//   const createItem = (descriptionTask) => {
//     let newItem = document.createElement('div');
//     newItem.innerHTML = 
//     ` <p>
//         ${descriptionTask}
//       </p>
//     `
//   return newItem;
//   }

//  const addInputAndButton = () => {
//   let inputButton = document.createElement('div');
  
//    inputButton.setAttribute('class', inputButton);
//     inputButton.innerHTML = 
//     ` <form action="" method="get" class="form-example" id="myForm2">
//     <div class="form-example">
//       <label for="todolistElement">New Item </label>
//       <input type="text" name="todoElement" id = "todoDescription" >
//       <button id="myBtn2" type="reset" onclick="testFunction()"> Add </button>
//     </div>
//   </form>

//     `
//     return inputButton;
//  }

// //  
// const testFunction = () =>{
//   let  itemInput = document.getElementById("toDoDescription").value;
//   if(itemInput === '') return;
//   let newItem = createItem(itemInput);
//   document.getElementsByClassName('test').appendChild(newItem);

// }


export {test, createProject, renderProject};