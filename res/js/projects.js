
new Vue({
	el: "#list",
	data: {
		list: getJSON("/projects/list.json", false)
	}
});

