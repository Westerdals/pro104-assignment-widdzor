function addUser()
{
	const name = document.querySelector("[name='username']").value;

	const users = JSON.parse(window.localStorage.getItem("users")) || [];
	
	const user =
		{
			'username': name
		};

	users.push(user);

	window.localStorage.setItem('users', JSON.stringify(users));

	alert(JSON.parse(window.localStorage.getItem("users").'username'));
}
