function listMembers()
{
	const memberList = JSON.parse(window.localStorage.getItem("members")) || [];

	const list = document.getElementById("member_list");

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

		newMember.addEventListener("click", selectMember);
		newMember.addEventListener("mouseover", onHover);
		newMember.addEventListener("mouseout", onLeave);
	}

}

listMembers();
