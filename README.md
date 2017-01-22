# BigPanda DevOps Exercise
#### INTRO
Good morning, Mr. Panda. Your mission, should you choose to accept it, involves the development and deployment of two nanoservices.
Please read the following instructions before starting to implement your mission, you don't want to miss any important instruction, especially those in [General Guidelines](#general-guidelines)

#### Get your environment ready
You'll need a linux machine with the ability to run vms.

1. Make sure you have python 2.7 installed. (Ubuntu 14.04 is highly recommended).
1. Install Ansible (version 2.1).
1. Install Vagrant.
1. Install VirtualBox.
1. Mirror this git repo using the instructions [here](https://help.github.com/articles/duplicating-a-repository). Then clone it locally. (**Please DO NOT fork the repo**)
1. Run `vagrant up base` and make sure you can ssh into the machine using `vagrant ssh base`.
1. Inside the vm execute `nodejs /tmp/bamboo-app/bamboo.js`.
1. Open your browser, go to <http://localhost:8080>, you should get some information about how much we love bamboo.

#### Ready for action?
Great.  
Your project is simple, as a DevOps panda you need to have the ability to develop nanoservices and create a mechanism for deploying them.  
Below, you can find the description of your tasks.

###### NodeJS/Python services
Create two basic NodeJs or Python services, the first is gify-panda which should serve static files from a directory called `resources`. The directory should contain a random number of files. You may use any image that you like, as long as there is a panda over there.

The second service shall be called counter-panda, and should just maintain a counter of the amount of POST requests it served, and return it on every GET request it gets.
A sample NodeJS service named bamboo-app already exists  [here](roles/bamboo/files/bamboo-app)

###### Deployment
Create an ansible role for each of the services. The role should install the service, **run it** and make sure it's ready to be used in **production** (see [General Guidelines](#general-guidelines)). 
A sample role for bamboo-app already exists for your convenience.  (Please note: samples are not full, and do not contain all relevant the details, you're expected to improve them, and add missing tasks).
We understand there might be a short service downtime when re-deploying a service, that’s fine.

###### Wrapper
This part is a **BONUS** part, if you find this exercise simple and short, feel free to do it.  
Create a simple utility for deploying both services. Your utility should support deploying a single service, or all of them.  
Please make sure you have a decent `--help` in your script.

#### Deliverables
A GitHub Pull-Request to **YOUR DUPLICATED REPO**, containing:  

1. The code for both gify-panda and counter-panda.
1. Ansible roles which takes care of provisioning both services on a VM called base.
1. Modified base.yml which install ONLY the newly written services on the base VM.
1. **BONUS** A wrapper script on top of ansible-playbook which deploys the latest version of those services.

The Pull-Request should contain a short description of the roles you created, and any other comment you’d like us to know of.

#### General Guidelines
Your code should be as simple as possible, yet well documented and robust.  
Spend some time on designing your solution. 
Think about operational use cases from the real world. Few examples:

1. Can you run the playbook multiple times without any problem?
1. What happens if a service crashes?
1. How much effort will it take to create a new service?
