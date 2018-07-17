# Vyrl
[![IMAGE ALT TEXT HERE](https://youtu.be/xoNnIZTmAKk)

## Background
This app provides a way for content promoters to create a widget node to add to their content that they fill with points. The points convert to money, and influencers can spread the link around the web earning money for all of the clicks they drive.
Every time a person clicks on an influencers unique link the influencers account tracks that click and awards points to the influencers account. In the world of online marketing its often known that if you see a friend or acquaintance share something on social media, people are much more likely to click on it.

### Inspiration
This project was inspired from me thinking about how social networks should be treated as advertising platforms.
People share stuff on social networks which is like billboard space, except they don't get any compensation for sharing these things. I thought it would be nice if there was a way for people to be compensated for sharing content.

## How it Works
A content promoter can create a campaign by providing a URL to the content that they want to be shared and promoted. The promoter than can refresh their campaign list, and add the share widget button to their website. This button will allow influencers to click on the button, and be taken to the influencer login page. 
The influencer will then be prompted to create an account if they have not already. 
Once they get logged in they can see a list of active campaigns. They click the activate button, and then post the link somewhere where people will click on it.



## Challenges
The project was built over a two week timeline, and there were a number of challenges encountered. Three of the most interesting ones were:
 - Creating a relational database with many different tables that have id's to connect the entities to entities in other tables.

 - Designing and building an account creation and login system from scratch that actually kept track of user information, and discarded it once logged out. I also had to create two different login pages, and account types to keep track of the promoters creating the campaigns, and the influences sharing them.
 
 - Re-learning the AngularJS framework, and building out my MVC designs. I hadn't touched AngularJS in over a month, so when I sat down to start writing I was a little rusty. I just started reading, and watching videos, and I quickly picked it back up, and built out my templates, and components.

## Features

A Promoter must login to their account via the login screen.
![alt text](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.26.01%20PM.png)

When a promoter logs in they can drop down a form to input their campaign information. They will then see a table populated with all of the campaigns that they have created.
![alt text](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.35.52%20PM.png)

They will have access to a share widget that they can add to their website, and when clicked it will direct influencers to the influencer login page.

![alt text](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.40.39%20PM.png)

The influencer can then sign in.
![alt text](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.39.42%20PM.png)

When an influence logs in they will see all of the active campaigns, and the URL that they are promoting.
![alt text](https://github.com/TheRickestRick/Capstone/blob/master/ScreenShots/Screen%20Shot%202018-07-16%20at%203.39.35%20PM.png)

The influence can then activate the campaign, share the link across their social networks, and earn points for all of the traffic the send!



## Built With

* [AngularJS]
* [Node]
* [Knex]
* [Express]
* [Heroku]


## Authors

* **Timothy Barnes** - [Github](https://github.com/TheRickestRick), [Personal Site]()
