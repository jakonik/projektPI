
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



/** create new answer function */
module.exports.create = async (application) => {

    const toHash = application.usName + application.usSurname + application.usMail;
    const passHash = sha512(toHash, application.appHaslo);

    return new Promise((resolve, reject) => {
        const userModel = new User();

        /** check if user pass questionnaire before */
        userModel.where({ name: application.usName, surname: application.usSurname, mail: application.usMail })
            .fetch().then(function (model) {
                console.log(model)

                reject('juz wypelniles ankiete');
            }).catch((err) => {
                /** save answer in database */
                new Promise(async (innerResolve, innerReject) => {

                    await new Application({

                        haslo: passHash,
                        name: application.appName,
                        mark: application.appMark,
                        message: application.appMessage
                    }).save();

                    await innerResolve(new User({

                        name: application.usName,
                        surname: application.usSurname,
                        mail: application.usMail,
                        czy_ankieta_wyp: 1
                    }).save());


                    toSecretHash = toHash + application.appMark + application.appMessage + application.appName + passHash;
                    resolve(sha512(toSecretHash, application.appHaslo));
                }).then((error) => {

                }).catch(console.log);

            })



    });





};