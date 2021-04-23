


requiere ('colors');
const files = requiere('./files');

// Funcion crear una tarea nueva

const createTask = (title, desc) => {

let ListTask = files.loadTask();

if (title in listTask) {
    console.log("Esta tarea existe!".red);
} else {

    listTask[title] = {
        title,
        desc,
        completed: false
    }
    files.saveTask(listTask);

}

return listTask[title];
}