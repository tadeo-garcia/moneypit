<img src="https://i.imgur.com/HmQtgf3.jpg" align=center alt=MoneyPitLogo/>

# Welcome to [MoneyPit](https://money-pit.herokuapp.com/)

## The Developers:
- [Brandon Held](https://brandonheld.netlify.app/)
- [Nick Litz](http://www.nicholaslitz.com/)
- [Steven Tegnelia](https://uribgp.com)
- [Tadeo Garcia](https://tadeogarcia.me)

**Table of Contents**
- [MoneyPit Overview](#moneypit-overview)
- [Application Architecture & Technologies Used](#application-architecture)
- [Front-end Overview](#front-end-overview)
- [Back-end Overview](#back-end-overview)
- [Moving Forward](#moving-forward)

## MoneyPit Overview

MoneyPit is a [KickStarter](https://www.kickstarter.com/) inspired web app, focused on new technology around the world!

The front-end portion was built using the React and Redux libraries in JavaScript, while the back-end was developed using the Flask framework in Python.

Users can explore projects by category, search using the searchbar, or just browse the front page.

![MP Explore](/client/public/explore.gif)


## Application Architecture
MoneyPit is a fullstack Flask and React application. API calls are made to the Flask backend, and the responses are made available to the React components via the Redux store.

To deploy the app you simply need to have an updated build of the React Front-end, and run the docker file in the Back-end.

![MP Architecture](/client/public/moneypitarch.png)

# Front-end Overview
## React
React components are used throughout the site to provide a seamless user interface, whether that be navigating from project to project, searching for a project, or browsing projects by category. Additionally, there is an animation whenever a user successfully pledges to a project, which is achieved by using the React-confetti module.
![MP Pledge](/client/public/pledge.gif)

## Redux
Redux, react-redux, and redux-thunk are the foundation that manage the application's state, and provide requests and responses between React and Flask.

Depending on the page, project information is fetched on the page load and then stored in the Redux store. This allows the user to refresh the page and have the information persist.

Redux also stores and sets the information of the user that is currently logged in. This allows for different functionality across the site depending on if the user is authenticated. By storing the user's information in state, they have access to their created or backed projects. These projects, which are just a click away, show up in the user modal which is accesible throughout the whole site.

![MP User Modal](/client/public/usermodal.gif)

# Back-end Overview





# Code Snippets:
- [insert code snippets]

## Moving Forward
The next steps for MoneyPit would be to implement AWS so that users can upload pictures for their projects, and their profile pictures. Additionally we would like to integrate a service such as Stripe in order to securely process pledge transactions. Lastly, we would like to expand on the projects section in order to provide a place for community comments on the projects, if you have backed it.


- Users can search projects by category, keywords in the title, keywords in the description
- Users can explore projects by category, with a modal in the navbar
- Users can see their backed projects through a user modal in the navbar
- Users can see their created projects through a user modal in the navbar

# Bonus Features:

- Users can create a project
- Logged in user session will persist after the page refreshes



### Users can:
* Create a project
* Back a project
* Choose how to back a project, depending on the reward level

### Projects
* Projects will belong to a certain category
* Each project has a:
    * Owner
    * Title
    * Description
    * Organization
    * Location
    * Days Remaining (time left until you can no longer back this project)
    * Category
    * Funding Goal
    * End Date
    * Total Pledges
* Users can create and customize projects.
* Project cannot be backed once it has no more days remaining, because it has reached the end date.
    
### Categories
* Each category has a:
    * Title
* All projects belong to a category

### Pledge
* Each pledge has :
    * Amount
    * Backer Id
    * Project Id
* Pledges are based on the owner of the project

  
### Rewards
* Each Reward has a:
    * Title
    * Description
    * Amount to Unlock
    * Delivery Date
    * Project Id
    * Backer Id
* Users can earn a reward if they pledge the amount necessary to unlock that reward
* Total rewards will be kept track of, so the owner can see how many of each reward level he has accomplished

---



### Credits:
* Pictures and data are from https://apify.com/jaroslavhejlek/kickstarter-search
* Default category pictures from www.unsplash.com
