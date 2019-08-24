if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production.js/index.js');
} else {
  module.exports = require('./default.json');
}
