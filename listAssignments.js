function listAssignments()
{
	const memberList = JSON.parse(window.localStorage.getItem("members")) || [];

	const list = document.getElementById("assign_list");

	while(list.firstChild)
	{
		list.removeChild(list.firstChild);
	}

	for(const i in memberList)
	{
		const newMember = document.createElement("div");
		newMember.className = "list_items list_items_member";
		list.appendChild(newMember);
		newMember.innerHTML = `${memberList[i].member}`;

		for(const x in memberList[i].assignments){
		    const newAssignment = document.createElement("div");
		    newAssignment.className = "list_items list_items_assignment"
		    list.appendChild(newAssignment);
		    newAssignment.innerHTML = `${memberList[i].assignments[x]}`;
		    console.log("here")
		}
	}
}

listAssignments();
