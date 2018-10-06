
new Vue({
	el: '#app',
	mounted: function() {
		var canvas = document.getElementById("canvas1");
		var ctx = canvas.getContext("2d");

		for (var x=0; x<=480; x=x+20){
			  ctx.moveTo(x,0);
			  ctx.lineTo(x,400);
		}

		for (var y=0; y<=400; y=y+20){
			  ctx.moveTo(0,y);
			  ctx.lineTo(480,y);
		}

		ctx.strokeStyle = "#112";
		ctx.stroke();
	},
	data: {
		x: 0,
		y: 0
	},
	methods: {
		lclick: function(event) {
			this.x = Math.floor(event.offsetX / 20);
			this.y = Math.floor(event.offsetY / 20);
		}
	}
});


