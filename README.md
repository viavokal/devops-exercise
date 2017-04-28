# BigPanda DevOps Exercise - Avraham Kalvo
#### INTRO
Welcome to my solution for the BigPanda DevOps Exercise
I decided to implement the services in nodejs, as I'm already familiar with Python and was enjoying the challenge.

#### Solution Specification
As per the exercise requirements, there are two services provided along with the ansible playbook and other components to have them deployed and running

1. counter-panda-app: a nodejs application which counts any POST requests accepted via http://localhost:8080/PostRequest and publishes the number of requests counted whenever accesed via a GET request on http://localhost:8080/
1. gify-panda-app: a nodejs application which serves static files from the "resources" subdirectory
1. gify-panda-app resources directory: a library of 6 panda gifs extracted from giphy.com (PG rated)
1. init.d j2 template: to be deployed as an /etc/init.d file for each of the services requested 
1. deployment wrapper script: used to quickly deploy any of the scripts (BONUS task)


#### Considerations & Guidelines
For the counter-panda-app, a specific URL was designated to listen on POST request events which is /PostRequest,
This was tested out simply by issuing a POST request to this URL using curl.

As per the gify-panda-app, static files serving was implemented using the 'express' nodejs framework, which is installed as a dependency for this service package.

I chose to implement 'forever' as the daemon manager for the supplied nodejs services, as it provides built in capabilities for service restart upon crashing, monitoring and logging. Forever is installed globaly as part of the prerequisite tasks for each service role.

Services them selves don't maintain log files, as I relied on the forever mechanism to log everything spooled by their runs.
Log rotation was omitted as well.

The init.d scripts for each of the services is deployed based on the devops-exercise/nodejs_daemon.template.j2 template file, which utilizes role specific variables initialised for each role in the main playbook.

Since ansible 'service' module doesn't provide service registration, but only management of existing services, the task which verify a service is indeed at started state was omitted, and a manual run of update-rc.d defaults for each service has to be issued to complete  registration of the supplied applications as services.
A possible solution of wrapping up this step in a shell script and issuing it as an ansible task was eventually rejected, as well as setting it up to automatically start upon boot/crash via systemd or upstart/initctl.

The wrapper deployer "deploy_services.sh" simply receives a set of comma seperated tags in order to decide on which task to apply from the playbook, i.e - which service to deploy.


