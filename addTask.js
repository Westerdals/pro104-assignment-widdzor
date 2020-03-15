function addTask(event) {
	event.preventDefault();

	const task = document.querySelector("[name='task']").value;

	// // Checks if the input field is populated, and ask for user to enter a task if it's empty.
	if (task === '') {
		alert('Enter a task');
	} else {
		const newTask = { 'task': task };

		const taskList = JSON.parse(window.localStorage.getItem("tasks")) || [];
		taskList.push(newTask);
		window.localStorage.setItem('tasks', JSON.stringify(taskList));
	}
}
