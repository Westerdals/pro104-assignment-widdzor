let selectedMember = null;
let selectedTask = null;
let prevMember = null;
let prevTask = null;
const selectedColor = "#333388";
const normalColor = "#333333";
const hoverColor = "#111111";
let prompted = false;


function selectMember()
{
	if(prevMember)
	{
		prevMember.style.backgroundColor = normalColor;
		prevMember = null;
	}

	if(selectedMember == this)
	{
		selectedMember.style.backgroundColor = normalColor;
		selectedMember = null;
	}
	else
	{
		selectedMember = this;
		selectedMember.style.backgroundColor = selectedColor;

		prevMember = selectedMember;
	}
	
	confirmAssignment();
}

function selectTask()
{
	if(prevTask)
	{
		prevTask.style.backgroundColor = normalColor;
		prevTask = null;
	}

	if(selectedTask == this)
	{
		selectedTask.style.backgroundColor = normalColor;
		selectedTask = null;
	}
	else
	{
		selectedTask = this;
		selectedTask.style.backgroundColor = selectedColor;

		prevTask = selectedTask;
	}
	
	confirmAssignment();
}

function confirmAssignment()
{
	const confirmSection = document.getElementById("confirm");

	const confirmButton = document.createElement("button");
	confirmButton.type = "button";
	confirmButton.innerHTML = "CONFIRM ASSIGNMENT";
	confirmButton.className = "title_sections";
	confirmButton.id = "confirmButton";

	if(selectedMember && selectedTask)
	{
		if(!document.querySelector("#confirmButton"))
		{
			confirmSection.appendChild(confirmButton);
		}
		confirmButton.addEventListener("click", function(){
			confirmSection.removeChild(confirmButton);
			assign();	
		});
		prompted = true;
	}
	else
	{
		if(prompted)
		{
			if(document.querySelector("#confirmButton"))
			{
				confirmSection.removeChild(document.querySelector("#confirmButton"));
				prompted = false;
			}
		}
	}
}

function assign()
{
	if(selectedMember && selectedTask)
	{
		const assignmentList = JSON.parse(window.localStorage.getItem("assignments")) || [];

		const newAssignment =
			{
				'member':selectedMember.innerHTML,
				'task':selectedTask.innerHTML
			};

		assignmentList.push(newAssignment);
		window.localStorage.setItem('assignments', JSON.stringify(assignmentList));			

		selectedMember.style.backgroundColor = normalColor;
		selectedTask.style.backgroundColor = normalColor;
		selectedMember = null;
		selectedTask = null;
	}

	listAssignments();
}

function onHover()
{
	if(this != selectedMember && this != selectedTask)
	{
		this.style.backgroundColor = hoverColor;	
	}
}

function onLeave()
{
	if(this != selectedMember && this != selectedTask)
	{
		this.style.backgroundColor = normalColor;
	}
}

