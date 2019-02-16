# Simplest GIT CI System for NodeJS project
Simplest way to synchronize GIT repository with production build on server.

## Usage

`npm install simplestci --save`

```javascript
const commands = "git pull && npm install && pm2 restart server"
const port=17324
const secretlink='/themostserctetlinkever'
var sci = require('simplestci')(commands,port,secretlink)
```

Specify commands that fits your deployment flow.

Add weeb hook in github settings to yourdomain.com:port/themostserctetlinkever


## Contribution

Lets find eaisier and more universal ways together. Current version was just my quick personal workaround on the topic.
You are welcome to push any updates here.





