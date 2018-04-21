'use strict';

var render = function render() {
	var jsx = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		)
	);
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();
