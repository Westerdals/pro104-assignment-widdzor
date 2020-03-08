function assignList(){
	var selectMember =  document.getElementById("selectMember")
	var selectTask = document.getElementById("selectTask")
	var i = selectMember.selectedIndex;
	var j = selectTask.selectedIndex;
	const assignMember = JSON.parse(window.localStorage.getItem("members")) || [];
	assignMember[selectMember.options[i].value].assignments.push(selectTask.options[j].text)
	window.localStorage.setItem('members', JSON.stringify(assignMember));
	console.log(assignMember)
}
      var x = document.getElementById("selectTask");

      const assignTasks = JSON.parse(window.localStorage.getItem(`tasks`)) || [];
      for(var i = 0; i < assignTasks.length; i++) {
      	var c = document.createElement("option");
          c.value = i;
          c.text = assignTasks[i].task;
          x.options.add(c, i);
}


      var y = document.getElementById("selectMember");

      const assignMember = JSON.parse(window.localStorage.getItem(`members`)) || [];
      for(var i = 0; i < assignMember.length; i++) {
          var v = document.createElement("option");
          v.value = i;
          v.text = assignMember[i].member;
          y.options.add(v, i);
          console.log(assignMember[i])
}