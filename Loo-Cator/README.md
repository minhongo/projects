# IMPORTANT NOTE:
In our recording we mentioned the demo wasn't working on VM, but we managed to get it working!! I posted proof below - it is running on the NCSU Virtual Machine. We have the correct URL and and showed the required functionalities (service worker, installable app, and cache APIs) for the final project. All functionalities work as shown in the demo. 
![Running on VM](https://media.github.ncsu.edu/user/20712/files/82182106-dcdb-4749-bb41-ed1e7d7b4be5)
![Service Worker started + installable app](https://media.github.ncsu.edu/user/20712/files/a6f5c32f-4cee-47e1-b5b8-2614e748bf9f)

# Loo-cator
## Final Project Report


### What Works?
- Login (with unique username and password)
- Registration of a new account 
- User profile (view settings and reviews)
- Favoriting bathrooms and storing their accompanying floorplan location
  - Unfavoriting bathrooms
- Finding bathrooms of most buildings of North Carolina State University 
- Seeing all reviews for a bathroom
- Posting reviews
- Fully integrated and graceful offline experience 
- Installable application (PWA)
- Reponsive design for mobile and desktop 

### What Doesn't Work? 
- No administrator role is implemented

### Authentication & Authorization:
Authentication is done through the backend where users must be logged in with a valid/registered account to be able to access the functionalities of Loo-cator. We are using SHA-256 to keep passwords different and secured for each user. 
Authorization is maintained by the database, every new account by default, is just a regular user who can access all bathroom finding capablities. If a user isn't logged in then they will always be directed back to the login page.

### Navigation of Loo-cator & Offline Functionality 
- **/** or **/login**
  - Default login page where users must enter a valid/registered account to be let into the Loo-cator application
- **/signup**
  - Users must enter all required fields to create an account
- **/settings**
  - Users will be able to logout and see their account information 
- **/favorites**
  - Users can view their favorite bathrooms and its floorplans  
- **/profiles**
  - Users can view their reviews of bathrooms  
- **/offline** 
  - When the network is offline, users will be gracefully directed and notified their connection is offline  
- **/campuses**
  - User will select the campus where they are trying to find bathrooms 
- **/buildings/?id=""**
  - Users will select the building where they are trying to find bathrooms 
- **/floors/?id=""**
  - Users will select a floor they want to find 
- **/bathrooms/?id=""**
  - Users will select a bathroom they want to find 
- **/reviews/?id=""**
  - Users will select to view or post reviews for a bathroom 

### Caching Strategy & Offline Capabilities 
We are using a mixture of network first and cache first depending on what the user is trying to accomplish. When the user is trying to favorite (POST) or unfavorite (PUT) a bathroom location, network first caching is used as the user needs to be updated in real time of the results of their actions - referring to the cache first would not properly reflect the new updates to the database immediately. Everything involving retrieving (GET) a resource is done through the cache first. If the cache doesn't have the page, then it will be stored in the cache once retrieved and will be contained there for the lifetime of the program. 

As mentioned previously, since newly accessed pages are stored in the cache for the duration of the program, pages visited before going offline will remain available when offline. By default, the favorites page, containing favorited bathrooms and their accompanying floorplans, will stored in the cache on start-up.      

### Wireframe Implementation Status:
| **Pages** | **Status** | **Wireframe** |
|----------|----------|----------|
| Login | ✅ | |
| Signup | ✅ |  |
| Select Campus | ✅ |  |
| Select Building | ✅ | |
| Select Floor & Bathroom | ✅ | |
| Bathroom Overall Rating | ✅ | |
| Review Bathroom | ✅ | |
| User Profile/Favorites | ✅ | |
| Settings | ✅ | |


### API Endpoints:
| **Method** | **Route**     | **Description**     |
| ------------ | ------------ | ------------ |
| **POST** | /login | Logins with a valid username and password |
| **POST** | /register | Create a user with email, username, and password |
| **GET** | /campuses | Returns NC State campus |
| **GET** | /:campusId/buildings | Returns a list of all buildings in a specific campus |
| **GET** | /:building/info | Returns information about a specific building |
| **GET** | /:building | Returns all floors of a building |
| **GET** | /:building/floors | Returns all floor information of a specific building |
| **GET** | /:floorId/bathrooms | Returns all bathrooms of a specific floor |
| **GET** | /favorites/all | Returns all of the user's favorited bathrooms |
| **POST** | /favorites/add/user | Adds a bathroom to user's favorites list |
| **PUT** | /favorites/delete/user | Deletes a bathroom from user's favorites list |
| **GET** | /reviews/bathroom/:id | Returns all of a specific bathroom's reviews |
| **GET** | /reviews/user/:id | Returns all of a specific user's reviews |
| **POST** | /review | Creates a new review for a bathroom |

### ER/Database Diagram:
[database diagram](https://github.ncsu.edu/engr-csc342/csc342-2023Fall-GroupR/blob/main/Proposal/Wireframes/database.JPG)


### Total Contributions:
| **Name** | **Unity Id**     | **Contributions**     |
| ------------ | ------------ | ------------ |
| **Minh Ngo** | mtngo | **Milestone #1**: Got the API routes set up and retrieving or posting data to the mock .json data files. Got the frontend routes set up (APIClient.js and frontendRoutes.js) and worked with .js files (in js folder) to populate the html pages. --- **Milestone #2**: Reponsible for Authenication, TokenMiddleWare, and other tasks related to linking API backend with  the .sql database like creating a user constructor, DBConnection, and the registration/login page. --- **Milestone #3**: Completed offline capabilites (service workers and cache APIs) and worked on functionalities like being able to favorite/unfavorite a bathroom and viewing floorplans.|
| **Matthew Nguyen** | manguyen | **All Milestones**: Database, Frontend .js + HTML and CSS styling for responsive design. **Milestone 2**: Setup the foundations for our database. More responsive designing and re-styled the aesthetics for it. **Final Project** Finalized the styling and aesthetics for the app. Setup the webmanifest to make the PWA installable. |
| **Jacob Usher** | jdusher | **Milestone #1**: Frontend routes, some API routes, static js and html. --- **Milestone#2**: Designed/Implemented the Database schema, worked on Frontend and API routes. Implemented the static JS for the main flow of Loocator I.e. Campus > Building > Floor > Bathroom. ---- **Milestone #3**: Updated Database schema to include reviews and refactored some other parts. API routes and static JS for getting and posting reviews.|
