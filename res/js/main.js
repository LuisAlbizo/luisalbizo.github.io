
var nav = new Vue({
	el: "#nav",
	data: {
		display: true,
		animationClass: "change"
	},
	methods: {
		displayNav: function(event) {
			this.display = !this.display;
			this.animationClass = (this.animationClass == "change" ? "" : "change");
		}
	}
});

