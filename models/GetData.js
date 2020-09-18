
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
  await userModel.where({ name: application.usName, surname: application.surname, mail: application.usMail })
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



    let appData = await appModel.where({ haslo: passHash }).fetch();
    appData = appData.toJSON();
    console.log('ponizej mamy jsona');
    console.log(appData);
    toSecretHash = toHash + appData.mark + appData.message + appData.name + passHash;
    const secretHash = (sha512(toSecretHash, application.appHaslo));
    if (secretHash == application.secretHash) resolve('wszystko ok');
    else reject('ktoś kombinował w bazie danych');
  }).catch((err) => {
    console.log('cośinnegoxd');
    return 'ktoś kombinował w bazie danych';

  })


};