// Selecting DOM elements and assigning them to variables
const taskText = document.getElementById('task'); // Task Name
const taskDate = document.getElementById('task-date'); // Task Date
const taskList = document.getElementById('task-list'); // Task List <ul>

// Function to add a new task
function addTask() {
    if(taskText.value == ''){ // If the task input field is empty
        alert("You Must Add A Task...");
    } else {
        let li = document.createElement("li"); // Create a new <li> element
        li.innerHTML = taskText.value; // Set its inner HTML to the value of taskText input
        taskList.appendChild(li); // Append the <li> to the taskList <ul>

        // Create a span element for a cross mark
        let crossMark = document.createElement('span');
        crossMark.innerHTML = '&#10006'; // Unicode for a cross mark symbol
        li.appendChild(crossMark); // Append the cross mark span to the <li>
    }
    taskText.value = taskDate.value = '';  // Clear the task and date input fields
    saveTask();  // Save the task list to localStorage
}

// Event listener for clicks on the task list
taskList.addEventListener("click", function(ele){
    if(ele.target.tagName === "LI"){ // If the clicked element is a <li>
        ele.target.classList.toggle("check"); // Toggle the "check" class
        saveTask(); // Save the task list to localStorage

    } else if(ele.target.tagName === "SPAN"){ // If the clicked element is a <span>
        ele.target.parentElement.remove(); // Remove the parent <li> of the clicked <span>
        saveTask(); // Save the task list to localStorage
    }
});

// Function to save the task list to localStorage
function saveTask(){
    localStorage.setItem("task", taskList.innerHTML); // Store the taskList in localStorage with key "task"
}

// Function to display tasks stored in localStorage on page load
function showTask(){
    // Retrieve taskList from localStorage and display it in taskList <ul>
    taskList.innerHTML = localStorage.getItem("task");  
}

showTask(); // Call showTask() to display tasks stored in localStorage
