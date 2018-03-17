var movies = [
	{
		id: 1,
		title: 'Harry Ploter',
		desc: 'Film o drukarce',
		year: 'rok 2001',
		photo: 'https://thumb9.shutterstock.com/display_pic_with_logo/2704957/612136502/stock-photo-large-printer-format-inkjet-working-612136502.jpg'
	},
	{
		id: 2,
		title: 'Król kur',
		desc: 'Film o kurniku',
		year: 'rok 2002',
		photo: 'https://cdn.stocksnap.io/img-thumbs/280h/1HSL6PSND8.jpg'
	},
	{
		id: 3,
		title: 'Karate kit',
		desc: 'Film o kitowaniu',
		year: 'rok 2005',
		photo: 'https://image.shutterstock.com/display_pic_with_logo/1268695/508681516/stock-photo-hand-with-putty-knife-repair-damaged-wall-508681516.jpg'
	},
	{
		id: 4,
		title: 'James błąd',
		desc: 'Film o tym, jak popełniać mniej błędów',
		year: 'rok 2014',
		photo: 'https://image.shutterstock.com/display_pic_with_logo/160669/276168278/stock-photo-desperate-employee-276168278.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render : function() {
		return (
        	React.createElement('li', {},
            	React.createElement(MovieTitle, {title: this.props.movie.title}),
            	React.createElement(MovieDesc, {desc: this.props.movie.desc}),
            	React.createElement(MovieYear, {year: this.props.movie.year}),
            	React.createElement(MovieImage, {img: this.props.movie.photo})
			)   
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
})

var MovieDesc = React.createClass({
	propTypes: {
    	desc: React.PropTypes.string.isRequired
	},
	render: function() {
    	return React.createElement('p', {}, this.props.desc)
	}
})

var MovieYear = React.createClass({
	propTypes: {
		year: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('p', {}, this.props.year)
	}
})

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('img', {src: this.props.img})
	}
})

var moviesElements = movies.map(function(movie) {
	return (
		React.createElement(Movie, {key:movie.id, movie: movie})

	)
});

var MovieList = React.createClass({
   
	render: function() {
		return (  
			React.createElement('ul', {}, moviesElements)
		)
	}
});

var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MovieList, {})
);
        
ReactDOM.render(element, document.getElementById('app'));