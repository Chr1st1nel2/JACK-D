# JACK'D Arcade Games and Fun


### [Our Live Heroku App](https://mysterious-brushlands-34136.herokuapp.com)
##### Members: Jordan Pearson, Angela Fisher, Christine Li, Kendall Aresu, and Daniel York


## Iteration 2.0

__Goal:__ To set up the shell of our site, getting the foundations of the needed modules and the basic versions of the pages up and running.

__Pages to be Added:__
- home page - **Christine Li**
- about page - **Daniel York**
- leaderboards - **Christine Li**
- game selection - **Angela Fisher**
- games - **Daniel York**
- settings - **Angela Fisher**

__Module(s) to be Created/Removed:__
- create games module - **Jordan Pearson**
  - game files
  - game schema
- remove calendar module **Kendall Aresu**
- remove articles module **Kendall Aresu**

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
