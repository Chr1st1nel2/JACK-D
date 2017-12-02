# JACK'D Arcade Games and Fun


### [Our Live Heroku App](https://mysterious-brushlands-34136.herokuapp.com)
##### Members: Jordan Pearson, Angela Fisher, Christine Li, Kendall Aresu, and Daniel York



## Iteration 3.0

__Goal:__ To have all pages up and running with basic functionality implemented. Games should be playable, even if still broken.

__Group Contribution Breakdown:__

Angela Fisher-
- added correct routes for every view, so all pages accessible by url
  - game selection page (no button yet): /games
  - snake game (no button yet): /games/snake
  - pong game (no button yet): /games/pong
- created initial site-wide footer (working w/ Tony to fix)
- migrated old home page to be the game selection page
- created final home page, still a WIP!!
- fixed issue with jQuery not loading
- deleted last traces of unneeded modules

Kendall Aresu-
- placeholder

Daniel York-
- placeholder

Jordan Pearson-
- placeholder

Christine Li-
- added Leaderboard
- fixed the layouts in the gameSelect page
- linked the gameSelect page to the individual game pages
- Added little icons in the top navbar
- put more functions in the new site-wide footer 



## Iteration 2.0

__Goal:__ To set up the shell of our site, getting the foundations of the needed modules and the basic versions of the pages up and running.

__Pages to be Added:__
- home page - **Christine Li**
- about page - **Christine Li**
- leaderboards - **Christine Li**
- game selection - **Angela Fisher**
- games - to be done
- settings - **Angela Fisher**

__Back End Updates:__
- create games module - **Jordan Pearson**
  - game files
  - game schema
- remove calendar module - **Kendall Aresu**
- remove articles module - **Kendall Aresu**
- integrate games module - **Angela Fisher**

__Front End Updates:__
- home page + header - **Jordan Pearson**


__Screenshots:__

Main page:
![it1_main](/screenshots/iteration1/it1_main.jpg)

About page:
![it1_about](/screenshots/iteration1/it1_about.png)

Settings page:
![it1_settings](/screenshots/iteration1/it1_settings.png)

Leaderboards page:
![it1_leaderboards](/screenshots/iteration1/it1_leaderboards.png)



## Iteration 1.0

__We've divided up the group work as follows:__
- Modify view to display an "Add private event" button when user is logged in (authenticated) - **Angela Fisher**
- Modify client controller to add an event with public or private setting - **Angela Fisher**
- Modify model schema to add an attribute that indicates public or private - **Kendall Aresu**
- Modify listing functionality in server controller to query DB appropriately - **Christine Li**
- Modify create functionality in server controller to ensure that a user object is saved with private events, or that a 403 error response is returned - **Christine Li**
- Modify CSS file to use `className` attribute to change display color of private events - **Kendall Aresu**

The four test cases for handling public/private events:
- The server test case beginning on line 223 of the server routes test file - **Daniel York**
- The server test case beginning on line 227 of the server routes test file - **Daniel York**
- The server test case beginning on line 231 of the server routes test file - **Jordan Pearson**
- The server test case beginning on line 235 of the server routes test file - **Jordan Pearson**
