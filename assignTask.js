function assignList(event)
{
	event.preventDefault();

	const task = document.querySelector("[name='task']").value;
	const name = document.querySelector("[name='name']").value;

	const assignList = JSON.parse(window.localStorage.getItem("members", "tasks")) || [];
	console.log(assignList)

	/**  const newTask =
		{
			'task': task,
			'member': name,
		'assignments': assignments
		};

	assignList.push(newAssign);

	window.localStorage.setItem('assignment', JSON.stringify(assignList));
**/}