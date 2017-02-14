const generate = require('project-name-generator');
const { send } = require('micro')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const data = generate({ words: 2, alliterative: true }).spaced;

  send(res, 200, data)
}
