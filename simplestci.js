const { createServer } = require('http')
const { json, send } = require('micro')
const shell = require('shelljs');

module.exports = function(commands="echo 'please specify commands'",port=12345,hookPath='/secretpath')
{
    createServer(async (req, res) => {
        var ret=shell.exec(commands)
        if (req.url==hookPath) send(res,200,ret);
        else send(res,404);
      }).listen(port, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:'+port)
      })
    
}
//module.exports('echo 123',17351,'/sectretpath')

