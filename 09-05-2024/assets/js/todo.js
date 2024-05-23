import { updateLocalStorageWithVisitorData, insertVisitorDataOnFooter } from "./visitor.js";

window.onload = async () => {
    const visitorData = updateLocalStorageWithVisitorData();
    insertVisitorDataOnFooter(visitorData);

    const oldTasks = getLocalStorageTasks();
    const todoList = document.querySelector('#list-task');
    const addTaskButton = document.querySelector('#button-add-task');
    const addTaskInput = document.querySelector('#input-add-task');

    oldTasks.forEach(createParagraphElementAndInsertToList);

    function getLocalStorageTasks() {
        const tasksLocalStorage = localStorage.getItem('tasks');
        return tasksLocalStorage !== null ? JSON.parse(tasksLocalStorage) : [];
    }

    function createParagraphElementAndInsertToList(task) {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = task;
        todoList.appendChild(paragraphElement);
    }

    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (addTaskInput.value !== '') {
            const typedTask = addTaskInput.value;
            insertTaskToLocalStorage(typedTask);
            insertNewTaskToDocument(typedTask);
        }
    })

    function insertNewTaskToDocument(newTask) {
        createParagraphElementAndInsertToList(newTask);
    }

    function insertTaskToLocalStorage(typedTask) {
        const oldTasks = getLocalStorageTasks();
        oldTasks.push(typedTask);
        localStorage.setItem('tasks', JSON.stringify(oldTasks));
    }
}