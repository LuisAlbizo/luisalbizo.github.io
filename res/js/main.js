
var nav = new Vue({
	el: "#nav",
	data: {
		display: true
	},
	methods: {
		displayNav: function(event) {
			this.display = !this.display;
		}
	}
});

