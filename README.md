# simple-app
Description: This is simple web application that works with two APIs: OMDb API (movies) and Bitbuket API. You can choose which one you want to work with. You can do that by clicking appropriate buttons on the index page. 

### OMDb API
By selecting Movies API you can get details about your favourite movies using two parametres: movie title and year of its release. Key informations about the movie are displayed in HTML form and you can add or change plot attribute of the received json. You can also save changes to disc in .json file/format. Also, full json is displayed below in separate div so you can see the complete json. 
With this part of my application I tried to cover all the tasks (besides Bonus task) that you required via email: reading collection of data from REST API source, presenting data in html form, changing data and saving json to disc.

### Bitbucket API
Bitbucket API searches for repositories that have string you entered as part of their name. In order to search repositories of one owner you need to enter key and secret. I put my key and secret that I generated through bitbucket as default values of key and secret fields. Name of my repositories are: 'rma18Malkoc17469', 'wt18AM17469', 'wtv201817469' and three repositories that I created for testing purposes: 'softhouse1', 'softhouse2', 'softhouse3'. With this part of my application I tried to cover bonus task: authentication with rest api source. With key and secret, alongside with oauth2 authorization framework I recevied token that I used to get the names of the repositories. XMLHTTPRequests were used to send post and get requests. Module BitBucketAPI.js works with Bitbucket api and bitbucket.js is file where I put onclick functions for different buttons.

### Technology stack
front-end: HTML, CSS, Javasript, AJAX
back-end: Node.js, express.js framework

### Other
Application is deployed to Heroku and you can access it here: https://whispering-mountain-12993.herokuapp.com/. You can also clone this repository and inside project folder open terminal and then type commands:
npm install (to install required packages - packages are installed based on dependencies attribute inside package.json file)
node server.js (to start server, server is listening on port 8080)
After that you can use application locally by typing 'localhost:8080' inside the browser.


