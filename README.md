# JACK'D Arcade Games and Fun


### [Our Live Heroku App](https://mysterious-brushlands-34136.herokuapp.com)
##### Members: Jordan Pearson, Angela Fisher, Christine Li, and Kendall Aresu

## Iteration 4.0

__Goal:__ To have the site completely finished with all the proper functionality.

__Group Contribution Breakdown:__
Angela Fisher- placeholder

Kendall Aresu-
- finalized the scoring functionality of pong
- fixed the flickering when pong was reset
- cleaned up Pong

Jordan Pearson- placeholder

Christine Li- placeholder

__Screenshots__:
Home page:
![itr4_home](/screenshots/iteration4/itr4_home.png)

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
- implemented Pong game javascript code
- implemented Snake game javascript code

Christine Li-
- added Leaderboard
- fixed the layouts in the gameSelect page
- linked the gameSelect page to the individual game pages
- Added little icons in the top navbar
- put more functions in the new site-wide footer

__Screenshots:__

Home page:
![itr3_home](/screenshots/iteration3/itr3_home.png)

GameSelect page:
![it3_games](/screenshots/iteration3/ite3_games.png)

Leaderboard page:
![it3_leaderboard](/screenshots/iteration3/itr3_leaderboard.png)

Pong game:
![it3_Pong](/screenshots/iteration3/itr3_Pong.png)

Snake game:
![it3_snake](/screenshots/iteration3/itr3_snake.png)



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
