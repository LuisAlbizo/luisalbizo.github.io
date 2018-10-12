
function clearEntrys() {
	var entrys = document.getElementsByClassName('blog-content');
	for (i = 0; i < entrys.length; i++) {
		entrys[i].innerHTML = '';
		a = entrys[i].parentNode.getElementsByClassName('read')[0];
		a.innerHTML = 'Leer';
		a.setAttribute('style', 'display:block;');
	}
};

const Limit = 5;
var db = getJSON('list.json', false);
var blog = TAFFY(db.entrys);
var nentrys = db.count;

new Vue({
	el:'#blog',
	data: {
		list: blog(),
		more: [],
		page: 1,
		query: '',
		tag: ''
	},
	methods: {
		formatDate: function(date) {
			return date[0] + '/' + date[1] + '/' + date[2] +
				' - ' + date[3] + ':' + date[4] + ':' + date[5];
		},
		displayEntry: function(event) {
			id = event.currentTarget.getAttribute('bid');
			event.currentTarget.innerHTML = 'cargando...';
			event.currentTarget.setAttribute('style', 'display:none;');
			entryF = blog({id: parseInt(id)}).first().entry;
			var ent = document.createElement('html');
			ent.innerHTML = getHTML(entryF);
			document.getElementById('entry'+id).innerHTML=
				ent.getElementsByTagName('section')[0].innerHTML;
		},
		loadMore: function() {
			this.page += 1;
			this.more = this.more.concat(
				this.list.start(this.page * Limit).get()
			);
		},
		loadTag: function(event) {
			this.tag = event.currentTarget.getAttribute('href');
			this.searchTag();
		},
		// Search methods
		search: function(event) {
			clearEntrys();
			this.page = 1, this.more = [];
			// this.list = blog({title: {regex: new RegExp(this.query)}});
			this.list = blog({title: {likenocase: this.query}});
		},
		searchTag: function(event) {
			clearEntrys();
			this.page = 1, this.more = [];
			this.list = blog({tags: {has: this.tag.toLowerCase()}});
		},
		// Sort methods
		sortByDateAsec: function() {
			clearEntrys();
			this.page = 1, this.more = [];
			this.list = this.list.order('date asec');
		},
		sortByDateDesc: function() {
			clearEntrys();
			this.page = 1, this.more = [];
			this.list = this.list.order('date desc');
		},
		sortByTitle: function() {
			clearEntrys();
			this.page = 1, this.more = [];
			this.list = this.list.order('title');
		}
	}
});


