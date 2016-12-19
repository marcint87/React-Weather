var React = require('react');


// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About component</h3>
// 		);
// 	}
// });

var About = (props) => {
	return (
		<div text-centerediv >
			<h1 className="header text-center">About</h1>
			<p className="lead text-center">Welcome to the About page.</p>
			<p>
				Tools used: 
			</p>
			<ul>
				<li><a href="">React</a> used to build components</li>
				<li><a href="">Open Weather Map</a> useed for fetching data</li>
			</ul>
		</div>
	)
};

module.exports = About;