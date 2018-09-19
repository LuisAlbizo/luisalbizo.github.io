
blog = getJSON('list.json', false);
new Vue({
	el:'#blog',
	data: {
		list: blog,
		query: '',
		db: TAFFY(blog.entrys)
	},
	methods: {
		formatDate: function(date) {
			return date[0] + '/' + date[1] + '/' + date[2] +
				' - ' + date[3] + ':' + date[4] + ':' + date[5];
		},
		displayEntry: function(event) {
			id = event.currentTarget.getAttribute('bid');
			entryF = this.db({id: parseInt(id)}).first().entry;
			console.log(id, entryF);
			document.getElementById('entry'+id).innerHTML = getHTML(entryF);
		},
		search: function(event) {
			alert(this.query);
		}
	}
});


