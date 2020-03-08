function addTask(event)
{
	event.preventDefault();

	const task = document.querySelector("[name='task']").value;

	const taskList = JSON.parse(window.localStorage.getItem("tasks")) || [];

	const newTask =
		{
			'task': task
		};

	taskList.push(newTask);

	window.localStorage.setItem('tasks', JSON.stringify(taskList));
	location.reload();
}
