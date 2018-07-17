# Vyrl
Click on the image to watch the video demo! 
[![Capstone Video](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.35.52%20PM.png)](https://youtu.be/xoNnIZTmAKk)

## Background
Vyrl creates widgets to help people promote their online content (e.g. articles, blogs, mobile apps, etc.)  Content promoters simply create a widget that is then set to a certain amount of points. Based on these points, people (influencers) can earn money by sharing the widget link thereby driving more clicks.  Every time a person clicks on an influencers unique link, the influencers account tracks that click and awards points to the influencers account. In the world of online marketing it is often known that if you see a friend or acquaintance share something on social media, people are much more likely to click on it.

### Inspiration
This project was inspired from me thinking about how social networks should be treated as advertising platforms.
People share stuff on social networks which is like billboard space, except they don't get any compensation for sharing these things. I thought it would be nice if there was a way for people to be compensated for sharing content.


## Challenges
The project was built over a two week timeline, and there were a number of challenges encountered. Three of the most interesting ones were:
 - Creating a relational database with many different tables that have id's to connect the entities to entities in other tables.

 - Designing and building an account creation and login system from scratch that actually kept track of user information, and discarded it once logged out. I also had to create two different login pages, and account types to keep track of the promoters creating the campaigns, and the influences sharing them.
 
 - Re-learning the AngularJS framework, and building out my MVC designs. I hadn't touched AngularJS in over a month, so when I sat down to start writing I was a little rusty. I just started reading, and watching videos, and I quickly picked it back up, and built out my templates, and components.
 

## Built With

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="alt text" width="25%" height="25%">

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="alt text" width="25%" height="25%">

<img src="https://knexjs.org/assets/images/knex.png" alt="alt text" width="25%" height="25%">

<img src="https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default" alt="alt text" width="25%" height="25%">

<img src="https://www.vectorlogo.zone/logos/heroku/heroku-card.png" alt="alt text" width="25%" height="25%">

## How is works
Promoters create accounts and sign in.
They fill out a campaign form, and my app makes a request to the server to create the campaign.
The share widget code is added to the promoters website, and when clicked redirects you to the influencer side
Influencers activate campaigns, and share their personalized links across the web.
When traffic passes through the link the influencer gains points for each click they drive.

## Authors

* **Timothy Barnes** - [Github](https://github.com/TheRickestRick), [Personal Site]()
