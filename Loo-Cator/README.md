# Loo-cator

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



