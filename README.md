# Vyrl
Click on the image to watch the video demo! 


[![YouTube Demo](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.39.35%20PM.png)](https://youtu.be/xoNnIZTmAKk)


## Background
Vyrl creates widgets to help people promote their online content (e.g. articles, blogs, mobile apps, etc.), Content promoters simply create a widget that is then set to a certain amount of points. Based on these points, people (influencers) can earn money by sharing the widget link thereby driving more clicks.  Every time a person clicks on an influencers unique link, the influencers' account tracks that click and awards points to the influencers account. In the world of online marketing it is often known that if you see a friend or acquaintance share something on social media, people are much more likely to click on it.

### Inspiration
This project was inspired from me thinking about how social networks should be treated as advertising platforms.
People share stuff on social networks which is like billboard space, except they don't get any compensation for sharing these things. I thought it would be nice if there was a way for people to be compensated for sharing content.


## Challenges
The project was built over a two week timeline, and there were a number of challenges encountered. Three of the most interesting ones were:
 - Creating a relational database with many different tables that have id's to connect the entities to entities in other tables.

 - Designing and building an account creation and login system from scratch that actually kept track of user information, and discarded it once logged out. I also had to create two different login pages, and account types to keep track of the promoters creating the campaigns, and the influences sharing them.
 
 - Re-learning the AngularJS framework, and building out my MVC designs. I hadn't touched AngularJS in over a month, so when I sat down to start writing I was a little rusty. I just started reading, and watching videos, and I quickly picked it back up, and built out my templates, and components.
 

## Built With
<p align="center">

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="alt text" width="25%" height="25%">

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="alt text" width="25%" height="25%">

<img src="https://knexjs.org/assets/images/knex.png" alt="alt text" width="25%" height="25%">

<img src="https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default" alt="alt text" width="25%" height="25%">

<img src="https://www.vectorlogo.zone/logos/heroku/heroku-card.png" alt="alt text" width="25%" height="25%">

<img src="https://gigaom.com/wp-content/uploads/sites/1/2012/07/postgres-mac-icon.jpg" alt="alt text" width="25%" height="25%">
</p>
## How is works

Promoters create accounts and sign in. This will make an HTTP request to my server which will either create the user if they don't already exist, and then log in the user to the main dashboard page. A user tokenis stored in local storage to recognize the user, and make other HTTP requests in relation to that users account.
<img src="https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.26.01%20PM.png" alt="alt text" >

A user can then fill out a campaign form, and my app makes a request to the server to create the campaign. The campaign will then be added to the database with that users ID attached to it. When the user is logged in my controller will pull all campaigns from that users account and populate their dashboard.
<img src="https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.35.52%20PM.png" alt="alt text" >

The share widget code is added to the promoters website, and when clicked redirects you to the influencer side. The script tag that a promoter adds to their website will allow the share button to call a function in my code that will open up the URL for the part of my site meant for social influencers to visit, and find active campaigns.
<img src="https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.40.39%20PM.png" alt="alt text" width="50%" height="50%">

Influencers activate campaigns, and share their personalized links across the web. These links are specific to a user, and will hit my server before redirecting to the campaign specified URL. When the link hits my server it will record the visit to my site, and update the respective tables in the database.
<img src="https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.39.35%20PM.png" alt="alt text" >

When traffic passes through the link the influencer gains points for each click they drive! My idea is that these points could be redeemed for cash or other things of value.

## Authors

* **Timothy Barnes** - [Github](https://github.com/TheRickestRick), [Personal Site]()
