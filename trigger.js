const { createServer } = require('http')
const { json, send } = require('micro')
const shell = require('shelljs');

createServer(async (req, res) => {
    shell.exec('bash ./gitupdate.sh')
    send(res,200,'request');
  }).listen(5000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
  })


