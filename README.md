
# Angular8 Application
###### version 8.3.22.

## About the architecture
	*Angular 8
	*Angular CLI
	*Angular Material
	
## What Do You Need?
	Let’s start by choosing the IDE. Of course, this is just my preference, and you can use the one you feel 
	more comfortable with. 
	
## Quick Start
	Let the fun begin! The first thing we need to do is install Angular CLI globally, 
	so open the node.js command prompt and run this command:
		npm install -g @angular/cli
	

Okay, now we have our module bundler. This usually installs the module under your user folder. 
An alias should not be necessary by default, but if you need it you can execute the next line:
	alias ng="<UserFolder>/.npm/lib/node_modules/angular-cli/bin/ng"

The next step is to create the new project. I will call it angular8-app. 
First, we navigate to the folder under which we want to create the site, and then:
	ng new angular8-app  
	
# First Build

While you can test your new website just running ng serve --open,I do recommend testing 
the site from your favorite web service.Why? Well, some issues can happen only in production, 
and building the site with ng build is the closest way to approach this environment. 
Then we can open the folder angular8-app with Visual Studio Code and run ng build on the terminal bash:
![code-terminal](https://user-images.githubusercontent.com/59535094/73367579-ee34de00-42d9-11ea-91db-684ca56cc292.png)

A new folder called dist will be created and we can serve it using IIS or whichever web server you prefer.
Then you can type the URL in the browser, and…done!
![dist](https://user-images.githubusercontent.com/59535094/73369632-1c67ed00-42dd-11ea-93cd-4ed658667058.png)

##The src Folder
 ![src](https://user-images.githubusercontent.com/59535094/73369817-6d77e100-42dd-11ea-8b50-79732599c73a.png)



	
