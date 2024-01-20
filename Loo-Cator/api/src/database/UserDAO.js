const db = require('./DBConnection');
const User = require('./info/User');
const crypto = require('crypto');

function getUserByCredentials(username, password) {
    return db.query('SELECT * FROM user WHERE usr_username=?', [username]).then(({results}) => {
      const user = new User(results[0]);
      if (user) {
        return user.validatePassword(password);
      }
      else { 
        throw new Error("No such user.");
      }
    });
  }

  function getUserWithUsername(username) {
    return db.query('SELECT * FROM user WHERE usr_username=?', [username]).then(({ results }) => {
        if (results.length > 0) 
          return results[0]; 
        else return null; 
      });
  }

  function createAccount(user) {
    let salt = crypto.randomBytes(16).toString('hex');
    let keyBuffer = crypto.pbkdf2Sync(user.password, salt, 100000, 64, 'sha512');
    let keyHex = keyBuffer.toString('hex');
  
    return db.query('INSERT INTO user (usr_first_name, usr_last_name, usr_username, usr_password, usr_salt, email, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [user.first_name, user.last_name, user.username, keyHex, salt, user.email, 0])
        .then(({ results }) => {
            return getUserWithUsername(results.username);
        });
  }

  module.exports = {
    getUserByCredentials: getUserByCredentials,
    getUserWithUsername: getUserWithUsername,
    createAccount: createAccount,
  };

// module.exports = {
//     getUserWithId: (id) => {
//         return new Promise((resolve, reject) => {
//             let realUser = usersJSON.find(realUser => realUser.id == id);
//             if (realUser) resolve(realUser);
//             else reject('User does not exist.')
//         });
//     }, 

//     getUserWithUsername: (username) => {
//         return new Promise((resolve, reject) => {
//             let realUser = usersJSON.find(realUser => realUser.username == username);
//             if (realUser) resolve(realUser);
//             else reject('Username is invalid.')
//         });
//     }, 

//     createAccount: (obj) => {
//         return new Promise((resolve, reject) => {
//             let newUser = obj;
//             usersJSON.push(newUser);
//             resolve("User account created!");
//         });
//     },

//     getFavorites: (username) => {

//     },

//     getReviews: (username) => {

//     },

//     favoriteBathroom: (floor) => {
        
//     },

//     removeFavorite: (floor) => {

//     }, 
// };

// function getFilteredUser(user) {
//     return {
//         "id": user.id,
//         "first_name": user.first_name,
//         "last_name": user.last_name,
//         "username": user.username,
//     }
// }