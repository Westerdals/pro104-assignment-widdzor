function addMember(event)
{
	event.preventDefault();

	const name = document.querySelector("[name='name']").value;

	const memberList = JSON.parse(window.localStorage.getItem("members")) || [];
	
	const assignments = [];
	const member =
		{
			'member': name,
			'assignments': assignments
		};

	memberList.push(member);

	window.localStorage.setItem('members', JSON.stringify(memberList));
}
