function listAssignments()
{
	const assignmentList = JSON.parse(window.localStorage.getItem("assignments")) || [];

	const list = document.getElementById("overview_list");

	while(list.firstChild)
	{
		list.removeChild(list.firstChild);
	}

	for(const i in assignmentList)
	{
		const newAssignment = document.createElement("div");
		newAssignment.className = "list_items list_items_assignment";
		list.appendChild(newAssignment);
		newAssignment.innerHTML = `<span class="list_items_member">[${assignmentList[i].member}]</span> <span style="color:#cccc22;"> ➔  </span><span class="list_items_task">[${assignmentList[i].task}]</span>`;
	}
}

listAssignments();
