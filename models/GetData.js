
const bookshelf = require('../config/bookshelf');

class Application extends bookshelf.Model {
  get tableName() {
    return 'applications';
  }
}
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
}



const crypto = require('crypto');

const sha512 = function (password, salt) {
  let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  let value = hash.digest('hex');
  //value = value.toString();
  return value
};




module.exports.create = async (application) => {

  console.log('wszedlem');
  const toHash = application.usName + application.usSurname + application.usMail;
  const passHash = sha512(toHash, application.appHaslo);
  console.log('jeszcze nie odpalałem konstruktora modeli');
  const userModel = new User();
  let ifUserExist = -1;
  console.log('tu jestem')
  await userModel.query('where', 'name', '=', application.usName, 'and', 'surname', '=', application.surname, 'and', 'mail', '=', application.usMail)
    .fetch().then(function (model) {
      ifUserExist = 1;
      console.log('user istnieje');
    }).catch((err) => {
      ifUserExist = 0;
      console.log('jestem w catchu sprawdzania usera')
    });
  console.log("widać mnie")
  return new Promise(async (resolve, reject) => {
    if (ifUserExist == 0) {
      reject('ktos majstrowal przy twojej ankiecie');
      console.log('user nie istnieje')
    }
    const appModel = new Application();



    let appData = await appModel.query('where', 'haslo', '=', passHash).fetch();
    appData = appData.toJSON();
    console.log('ponizej mamy jsona');
    console.log(appData);
    toSecretHash = toHash + appData.mark + appData.message + appData.name + passHash;
    const secretHash = (sha512(toSecretHash, application.appHaslo));
    if (secretHash == application.secretHash) resolve('wszystko ok');
    else reject('ktoś kombinował w bazie danych');
    //.then(function (model) {
    // console.log(model)
    //tutaj porownujemy secret hashe
    //   reject('juz wypelniles ankiete');
  }).catch((err) => {
    console.log('dupa');
    return 'ktoś kombinował w bazie danych';
    // new Promise(async (innerResolve, innerReject) => {

    //   await new Application({

    //     haslo: passHash,
    //     name: application.appName,
    //     mark: application.appMark,
    //     message: application.appMessage
    //   }).save();

    //   await innerResolve(new User({

    //     name: application.usName,
    //     surname: application.usSurname,
    //     mail: application.usMail,
    //     czy_ankieta_wyp: 1
    //   }).save());

    //wyświetlasz hash z toHash + hash
    //     toSecretHash = toHash + passHash.passwordHash; 
    //    const secretHash = sha512(toSecretHash, salt);
    //     //console.log(secretHash);
    //    return secretHash;
    //  toSecretHash = toHash + passHash;
    // resolve(sha512(toSecretHash, application.appHaslo));
  })
  // .then((error) => {
  //   //toSecretHash = toHash + passHash;
  //   //resolve(sha512(toSecretHash, application.appHaslo));
  //   // return error;
  //   // console.log(error);
  // }).catch(console.log);

};









//'appHaslo': req.body.appHaslo,
//        'usName': req.body.usName,
//        'appName': req.body.appName,
//        'appMark': req.body.usMark,
//        'appMessage': jest hashem
//        'usSurname': req.body.usSurname,
//        'usMail': req.body.usMail



/*knex('users').insert({

    haslo: hashHasla.passwordHash,
    name: application.appName,
    mark: application.appMark,
    message: application.appMessage
});
knex('applications').insert({

    haslo: hashHasla.passwordHash,
    name: application.appName,
    mark: application.appMark,
    message: application.appMessage
});
*/
/*import sha256 from 'crypto-js/sha256';*/

//const knex = require('knex')(require('./knexfile'));
//const Application = ('./model/applications.');
//let Application = bookshelf.Model.extend({
 //   tableName: 'applications'
// });

//application.create().then(res => {}).catch(err => {

//})

// const User = bookshelf.Model.extend({
 //   tableName: 'users'
// });

//const { model } = require('../config/bookshelf');
//const app = require('../app');
//const applications = require('./applications');








// const express = require('express');
// const bookshelf = require('../config/bookshelf');
// const Application = bookshelf.Model.extend({
//   tableName: 'applications'
// });


// module.exports.create(req, res) => {
//   let users = await new Application().fetchAll();
//   res.json(users);











// //const { application } = require('express');
// //const { where } = require('sequelize/types');
// /*import sha256 from 'crypto-js/sha256';*/
// //const bookshelf = require('../config/bookshelf');
// //let Application = bookshelf.Model({
// //    tableName: 'applications'});

// //const crypto = require('crypto');

// //const sha512 = function(password, salt){
//  //   let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//  //   hash.update(password);
//  //   let value = hash.digest('hex');
//  //   //value = value.toString();
//  //   return {
//  //       salt:salt,
//  //       passwordHash:value
//  //   };
// //};

// //select * from `books` where `ISBN-13` = '9780440180296'
// //new Book({'ISBN-13': '9780440180296'})
//  // .fetch()
// //  .then(function(model) {
// //    // outputs 'Slaughterhouse Five'
// //    console.log(model.get('title'));
// //  });

// //module.exports.create = (application) => {

//  // return Application(where{id: 21})


// //};



// /*import sha256 from 'crypto-js/sha256';*/
// //const bookshelf = require('../config/bookshelf');
// //const Application = bookshelf.Model.extend({
// //  tableName: 'applications'
// //});
// //const crypto = require('crypto');

// //const sha512 = function(password, salt){
// //    let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
// //    hash.update(password);
// //    let value = hash.digest('hex');
//     //value = value.toString();
// //    return {
// //        salt:salt,
// //        passwordHash:value
//  //   };
// //};



// //module.exports.create = (application) => {
// //    const salt = application.haslo;

// //    const hashHasla = sha512(application.haslo, salt);



// //    const hashMessage = application.message;
// //    return new Application({
//  //      
//   //      haslo: hashHasla.passwordHash,
//    //     name: application.name,
//    //     mark: application.mark,
//   //      message: application.message
//  //   }).save();


// //};


