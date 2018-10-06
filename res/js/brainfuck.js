


var app = new Vue({
	el: "#app",
	data: {
		program: '',
		input: '',
		memory: []
	},
	methods: {
		execute: function(event) {
			this.display = !this.display;
			this.animationClass = (this.animationClass == "change" ? "" : "change");
		}
	}
});

