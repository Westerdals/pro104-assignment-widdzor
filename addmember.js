function addMember(event) {
	event.preventDefault();

	const name = document.querySelector("[name='name']").value;

	// Checks if the input field is populated, and ask for user to enter a name if it's empty.
	if (name === '') {
		alert('Write a name');
	} else {
		const member = { 'member': name };

		const memberList = JSON.parse(window.localStorage.getItem("members")) || [];
		memberList.push(member);
		window.localStorage.setItem('members', JSON.stringify(memberList));
	}
}
