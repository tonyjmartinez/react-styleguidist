const fs = require('fs');
const path = require('path');

const rawBody = fs.readFileSync(path.join('./react-styleguide.html'), 'utf8');

module.exports = {
	components: 'components/*.jsx',
	template: {
		body: {
			raw: rawBody,
		},
	},
};
