
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

The src Folder
 
 ![src](https://user-images.githubusercontent.com/59535094/73369817-6d77e100-42dd-11ea-8b50-79732599c73a.png)
 
 My src folder is structured as follows: Inside the app folder we have components where we will 
 create for each Angular component the css, ts, spec, and html files. We will also create a config folder to 
 keep the site configuration, directives will have all our custom directives, helpers will house common code 
 like the authentication manager, layout will contain the main components like body, head, and side panels, 
 models keeps what will match with the back-end view models, and finally services will have the code for all 
 the calls to the back end.

 ## Now create a dashboard which is my home page.
	Here has two sections. After authentication is done successfully view the authenticate part otherwise show unauthenticated part.

#Routing
Okay, now we have Angular Material helping us with the UI and a simple layout to start building our pages. But how can we navigate between pages?

In order to create a simple example, let’s create two pages: “User,” where we can get a list of the existing users in the database, and “Dashboard,” a page where we can show some statistics.

Inside the app folder we will create a file called app-routing.modules.ts looking like this:

![routing](https://user-images.githubusercontent.com/59535094/3462270-ba26ef00-43a5-11ea-81bb-3862acaad4ec.png)

It’s that simple: Just importing RouterModule and Routes from @angular/router, we can map the paths we want to implement. Here we are creating four paths:

	./dashboard: Our home page
	./login: The page where the user can authenticate
	./users: Our first page where we want to list the users from the back end

If the page not found or the wrong URL paste then redirects to error which pages not found. 

Note that dashboard is our page by default, so if the user types the URL /, the page will redirect automatically to this page. Also, take a look at the canActivate parameter: Here we are creating a reference to the class AuthGuard, which will allow us to check if the user is logged in. If not, it redirects to the login page. In the next section, I will show you how to create this class.

Now, all we need to do is create the menu. Remember in the layout section when we created the left-panel.component.html file to look like this?
		
		<a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/users">Users</a>

Here is where our code meets reality. Now we can build the code and test it in the URL: You should be able to navigate from the Dashboard page to Users, but what happens if you type the URL our.site.url/users in the browser directly?

#Authentication

Do you remember how we had the class AuthGuard implemented to set the routing configuration? Every time we navigate to a different page we will use this class to verify if the user is authenticated with a token. If not, we’ll redirect automatically to the login page. The file for this is canActivateAuthGuard.ts—create it inside the 'shared/helpers' folder and have it look like this:

![auth](https://user-images.githubusercontent.com/59535094/73460679-150b1700-43a3-11ea-8c22-24ba7f1e24cf.png)


So every time we change the page the method canActivate will be called, which will check if the user is authenticated, and if not, we use our Router instance to redirect to the login page. But what is this new method on the Helper class? Under the helpers folder let’s create a file helpers.ts. Here we need to manage sessionStorage, where we will store the token we get from the back end.

##Note
	Regarding sessionStorage, you can also use cookies or localStorage, and the decision will depend on the behavior we want to implement. As the name suggests, sessionStorage is only available for the duration of the browser session, and is deleted when the tab or window is closed; it does, however, survive page reloads. If the data you are storing needs to be available on an ongoing basis, then localStorage is preferable to sessionStorage.

Here is the helper class where I have checked the session 

![session](https://user-images.githubusercontent.com/59535094/3462214-9fed1100-43a5-11ea-9681-8e33191134ab.png)






	
