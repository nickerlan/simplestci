const { createServer } = require('http')
const { json, send } = require('micro')
const shell = require('shelljs');

module.exports = function(commands="echo 'please specify commands'",port=12345,hookPath='/secretpath')
{
    createServer(async (req, res) => {
        if (req.url==hookPath) {
          var ret=shell.exec(commands)
          send(res,200,ret);
        }
        else send(res,404);
      }).listen(port, err => {
        if (err) throw err
        console.log('😎 New deployments watcher ready at http://localhost:'+port+hookPath)
        console.log('Specify webhook to your github repo https://yourdomain.com:'+port+hookPath)
      })
    
}
//module.exports('echo 123',17351,'/sectretpath')


