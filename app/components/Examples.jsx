var React = require('react');
var {Link} = require("react-router");

var Examples = (props) => {
	return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p className="text-center">few example locations to try out</p>
				<ol>
					<li>
						<Link to="/?location=Białystok">Białystok</Link>
					</li>
					<li>
						<Link to="/?location=Rio">Rio de Janeiro</Link>
					</li>
				</ol>
			</div>
		);
}

module.exports = Examples;