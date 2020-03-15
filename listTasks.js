function listTasks() {
	const taskList = JSON.parse(window.localStorage.getItem("tasks")) || [];

	const list = document.getElementById("task_list");

	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}

	for (const i in taskList) {
		const newTask = document.createElement("div");
		newTask.className = "list_items list_items_task";
		list.appendChild(newTask);
		newTask.innerHTML = `${taskList[i].task}`;

		newTask.addEventListener("click", selectTask);
		// newTask.addEventListener("mouseover", onHover);
		// newTask.addEventListener("mouseout", onLeave);
	}

}

listTasks();
