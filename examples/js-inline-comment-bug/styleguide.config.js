const fs = require('fs');
const path = require('path');

const rawBody = fs.readFileSync(path.join(__dirname, '/react-styleguide.html'), 'utf8');

module.exports = {
	components: 'components/*.jsx',
	template: {
		body: {
			raw: rawBody,
		},
	},
};
