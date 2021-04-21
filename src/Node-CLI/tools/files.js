
require ('color');
//Importamos el paquete por default de node para manejar archivos fs
const fs = require('fs');
const path = require('path');

// Guardamos el path a nuestro archivos tack.json
const filePath = path.join(_dirname, '../db/task.json');

// Funcion para cargar task desde task.json     fin related code in javascript-02-5tob
const loadTask = () => {
    let lisTask = {};
    // Nos muestra el path o ruta de nuestro proceso 
    console.log("Ruta absoluta del proceso node:".yellow, process.cwd())

    // Nos muestra el path o ruta de nuestro take db.json
    console.log("Ruta absoluta de nuestra base de datos:".yellow, filePath)

    try{
        lisTask = require (filePath);
    }catch (error) {
        console.log("Error cargando lista de db".red, error);
        listTak = {}
    }
    return listTask;
}



// Funcion para guardar los task en task.json
const saveTastk = (listTask) => {

    let data = JSON.stringify(listTaks);

    fs.writeFile(filePath, data, (error) =>{
        if (error){
            throw new Error("Error Create by me --", error);
        }
    })
}

module.exports={
    loadTask,
    saeTask
}