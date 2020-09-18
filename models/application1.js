/*import sha256 from 'crypto-js/sha256';*/
const bookshelf = require('../config/bookshelf');
//let Promise = require('bluebird');
//const Application = ('./model/applications.js');
//let Application = bookshelf.Model.extend({
 //   tableName: 'applications'
// });

 //class Application extends bookshelf.Model {
  //  get tableName() {
  //      return 'applications';
 //   }
//}

 class User extends bookshelf.Model {
    get tableName() {
       return 'users';
   }
}
// const User = bookshelf.Model.extend({
 //   tableName: 'users'
// });
const crypto = require('crypto');
//const { model } = require('../config/bookshelf');
//const app = require('../app');
//const applications = require('./applications');

module.exports.create = (application) => {
   
    
    
 
     
    
  //   new Application({
       
   //     haslo: hashHasla.passwordHash,
    //    name: application.appName,
    //    mark: application.appMark,
    //    message: application.appMessage
   // }).save();
  

    
     new User({
       
        name: application.usName
        surname: application.usSurname,
       mail: application.usMail,
        czy_ankieta_wyp: 1
   }).save();
    return 0;
};

//'appHaslo': req.body.appHaslo,
//        'usName': req.body.usName,
//        'appName': req.body.appName,
//        'appMark': req.body.usMark,
//        'appMessage': jest hashem
//        'usSurname': req.body.usSurname,
//        'usMail': req.body.usMail

