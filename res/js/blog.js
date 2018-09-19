
const Limit = 5;

blog = TAFFY(getJSON('list.json', false).entrys);
new Vue({
	el:'#blog',
	data: {
		list: blog().limit(Limit).get(),
		query: '',
		tag: '',
		db: blog
	},
	methods: {
		formatDate: function(date) {
			return date[0] + '/' + date[1] + '/' + date[2] +
				' - ' + date[3] + ':' + date[4] + ':' + date[5];
		},
		displayEntry: function(event) {
			id = event.currentTarget.getAttribute('bid');
			entryF = this.db({id: parseInt(id)}).first().entry;
			document.getElementById('entry'+id).innerHTML = getHTML(entryF);
		},
		search: function(event) {
			this.list = this.db({title: {regex: new RegExp(this.query)}})
				.limit(Limit).get();
		},
		searchTag: function(event) {
		
		}
	}
});


