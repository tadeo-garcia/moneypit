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

### Get your wallet ready, and back your favorite projects!
#### If nothing catches your eye, create your own project!

![MP Homepage](/client/public/homepage.gif)

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

### Code Snippets:
* [insert code snippets]

---

### Features to be added:
* Users can search projects by category, keywords in the title, keywords in the description
* Users can explore projects by category, with a modal in the navbar
* Users can see their backed projects through a user modal in the navbar
* Users can see their created projects through a user modal in the navbar

### Bonus Features:
* Users can create a project
* Logged in user session will persist after the page refreshes


### Credits:
* Pictures and data are from https://apify.com/jaroslavhejlek/kickstarter-search
* Default category pictures from www.unsplash.com
