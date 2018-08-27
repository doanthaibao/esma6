/*Please include index.js in HTML code for using this.*/

ToDoConstructor = function() {
    this.toDoList = [];
    this.addThisTask = function(params) {
        // This function should get title, description and priority and add a new object in the toDoList with these details and one unique id, generated here.
        var prioritySelect = document.getElementById('prioritySelect');
        var oTask = {};
        oTask.title = document.getElementById('titleInput').value;
        oTask.description = document.getElementById('descrTextField').value;
        oTask.priority = parseInt(prioritySelect.options[prioritySelect.selectedIndex].value);
        oTask.id = "todo_" + new Date().getTime();
        this.toDoList.push(oTask);
        this.showTaskInToDoList();

    }
    this.showDetails = function(id) {
        var selectedItem = null;
        for (var i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i].id === id) {
                selectedItem = this.toDoList[i];
                break;
            }
        }
        if (selectedItem != null) {
            document.getElementById("titleSpan").innerText = selectedItem.title;
            document.getElementById("descrSpan").innerText = selectedItem.description;
            document.getElementById("prioritySpan").innerText = selectedItem.priority;
        }
    };
    this.showTaskInToDoList = function() {
        var listToDo = document.getElementById("toDosList");
        while (listToDo.firstChild) {
            listToDo.removeChild(listToDo.firstChild);
        }
        this.sortTheToDoTaskList();
        for (var i = 0; i < this.toDoList.length; i++) {
            var id = this.toDoList[i].id;
            var li = document.createElement("li");
            //content span
            var contentSpan = document.createElement("span");
            contentSpan.appendChild(document.createTextNode(this.toDoList[i].title));
            contentSpan.setAttribute("id", id);
            contentSpan.addEventListener("click", function(event) {
                //show detail
                this.showDetails(event.toElement.getAttribute("id"));
            }.bind(this));
            li.appendChild(contentSpan);
            //add remove span
            var removeSpan = document.createElement("span");
            removeSpan.classList.add("removeTask");
            removeSpan.setAttribute("id", id);
            removeSpan.appendChild(document.createTextNode("x"));
            removeSpan.addEventListener("click", function(event) {
                this.removetask(event.toElement.getAttribute("id"));
            }.bind(this));
            li.appendChild(removeSpan);
            listToDo.appendChild(li);
        }
        if (this.toDoList.length > 0) {
            document.getElementById("noTaskSpan").classList.add("hidden");
            document.getElementById("taskLabel").classList.remove("hidden");
        } else {
            document.getElementById("noTaskSpan").classList.remove("hidden");
            document.getElementById("taskLabel").classList.add("hidden");
        }
    }
    this.sortTheToDoTaskList = function() {
        this.toDoList.sort(function(a, b) {
            return b.priority - a.priority;
        });
    }
    this.removetask = function(id) {
        // This function accepts id of a task to be removed from toDoList
        for (var i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i].id === id) {
                this.toDoList.splice(i, 1);
                break;
            }
        }
        this.showTaskInToDoList();
    }
};

function init() {
    var taskAppObj = new ToDoConstructor();
    window.taskAppObj = taskAppObj;
    // Initialize all the objects that you may need later
}

function clearVars() {
    var taskAppObj = null;
    // Reset all the objects initialized in init() here
}

//As the page loads, call init, as it unloads, call clearVars