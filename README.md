# Simplest GIT CI System for NodeJS project
The Goal is to find the simplest way to synchronize GIT repository with production build on server.
Assuming usage of nginx and pm2

## Usage
1. Put trigger.js and gitupdate.sh to your project root
2. Choose external trigger path to set hook on GitHub settings 
`yourdomain.com/yourtriggerpath/`
3. Configure nginx to proxy trigger url to localhost:5000.  
Add following lines to /etc/nginx/sites-available/default
`
...
location / {
		proxy_pass http://localhost:5000;
		proxy_set_header Host $host;
	}
...
`
4. `service nginx restart`
5. 
`pm2 start trigger.js
pm2 save
`



