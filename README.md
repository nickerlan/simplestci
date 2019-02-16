# Simplest GIT CI System for NodeJS project
The Goal is to find the simplest way to synchronize GIT repository with production build on server.
Assuming usage of nginx and pm2

## Usage
1. Put trigger.js and gitupdate.sh to your project root
2. Choose external trigger path adn set hook on GitHub settings `yourdomain.com/yourtriggerpath/`
3. Add trigger.js as a service on localhost:5000
`pm2 start trigger.js`
`pm2 save`
4. Modify gitupdate.sh to fit your build workflow
5. Configure nginx to proxy /yourtriggerpath/ to localhost:5000.  
Add following lines to /etc/nginx/sites-available/default
`location /yourtriggerpath/ {
		proxy_pass http://localhost:5000;
		proxy_set_header Host $host;
	}
`
6. `service nginx restart`
7. Push something to GIT and see github's Settings -> Hooks

## Contribution

Lets find eaisier and more universal ways together.
You are welcome to push any updates here.





