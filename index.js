var generate = require('project-name-generator');

module.exports = (req, res) => generate({ words: 2, alliterative: true }).spaced
