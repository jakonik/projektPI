
const bookshelf = require('../config/bookshelf');
/**  applications table model*/
class Application extends bookshelf.Model {
  get tableName() {
    return 'applications';
  }
}

/** users table model*/
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
}



const crypto = require('crypto');

/** sha512 function */
const sha512 = function (password, salt) {
  let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  let value = hash.digest('hex');
  return value
};



/** verification function */
module.exports.verification = async (application) => {

  console.log('wszedlem');
  const toHash = application.usName + application.usSurname + application.usMail;
  const passHash = sha512(toHash, application.appHaslo);
  console.log('jeszcze nie odpalałem konstruktora modeli');
  const userModel = new User();
  let ifUserExist = -1;
  console.log('tu jestem')

  /** chceck if user exist */
  await userModel.where({ name: application.usName, surname: application.usSurname, mail: application.usMail })
    .fetch().then(function (model) {
      ifUserExist = 1;
      console.log('user istnieje');
    }).catch((err) => {
      ifUserExist = 0;
      console.log('jestem w catchu sprawdzania usera')
    });
  console.log("widać mnie")

  /** check if answer was modified */
  return new Promise(async (resolve, reject) => {
    if (ifUserExist == 0) {
      reject('W bazie nie istnieje rekord z twoimi danymi, sprawdź czy podałeś poprawne dane.');
      console.log('user nie istnieje')
    }
    const appModel = new Application();


    /** database question to get data to generating hash */
    let appData = await appModel.where({ haslo: passHash }).fetch().catch((err) => { reject("Podałeś błędne dane lub ktoś zmodyfikował twoją ankietę.") });
    appData = appData.toJSON();
    console.log('ponizej mamy jsona');
    console.log(appData);
    toSecretHash = toHash + appData.mark + appData.message + appData.name + passHash;
    const secretHash = (sha512(toSecretHash, application.appHaslo));
    if (application.secretHash == secretHash) { resolve('Twoja ankieta nie została zmodyfikowana'); }
    else { reject('Podałeś błędne dane lub ktoś zmodyfikował twoją ankietę.'); }
  }).catch((err) => {
    return err;


  })


};