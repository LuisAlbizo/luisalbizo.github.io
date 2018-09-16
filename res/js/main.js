
// Peticion ajax a un json
function getJSON(url, async) {
	var xhr = new XMLHttpRequest();
	var jresp = {};
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var jaux = JSON.parse(xhr.responseText);
			for (var attrname in jaux) {
				jresp[attrname] = jaux[attrname];
			}
		}
	};
	xhr.open("GET", url, async);
	xhr.send(null);
	return jresp;
};

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

