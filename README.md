# Simplest GIT CI System for NodeJS project
The goal is to find the simplest way to synchronize GIT repository with production build on server.
Assuming usage of nginx and pm2

## Usage

'npm install simplestci'

`const COMMANDS = "git pull && npm install && pm2 restart server"`

`var sci = require('simplestci')(COMMANDS,PORT,ADDRESS)`



## Contribution

Lets find eaisier and more universal ways together. Current version was just my quick personal workaround on the topic.
You are welcome to push any updates here.





