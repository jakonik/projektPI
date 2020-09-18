
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

    const toHash = application.usName + application.usSurname + application.usMail;
    const passHash = sha512(toHash, application.appHaslo);

    return new Promise((resolve, reject) => {
        const userModel = new User();

        // userModel.query('where', 'name', '=', application.usName, 'and', 'surname', '=', application.usSurname, 'and', 'mail', '=', application.usMail)
        //     .fetch().then(function (model) {
        //         console.log(model)
        //         //tutaj wyświetlasz info "juz wypelniles ankiete"
        //         reject('juz wypelniles ankiete');
        //     }).catch((err) => {
        //         new Promise(async (innerResolve, innerReject) => {

        //             await new Application({

        //                 haslo: passHash,
        //                 name: application.appName,
        //                 mark: application.appMark,
        //                 message: application.appMessage
        //             }).save();

        //             await innerResolve(new User({

        //                 name: application.usName,
        //                 surname: application.usSurname,
        //                 mail: application.usMail,
        //                 czy_ankieta_wyp: 1
        //             }).save());

        //             //wyświetlasz hash z toHash + hash
        //             //     toSecretHash = toHash + passHash.passwordHash; 
        //             //    const secretHash = sha512(toSecretHash, salt);
        //             //     //console.log(secretHash);
        //             //    return secretHash;
        //             toSecretHash = toHash + application.appMark + application.appMessage + application.appName + passHash;
        //             resolve(sha512(toSecretHash, application.appHaslo));
        //         }).then((error) => {
        //             //toSecretHash = toHash + passHash;
        //             //resolve(sha512(toSecretHash, application.appHaslo));
        //             // return error;
        //             // console.log(error);
        //         }).catch(console.log);

        //     })

        userModel.where({ name: application.usName, surname: application.usSurname, mail: application.usMail })
            .fetch().then(function (model) {
                console.log(model)
                //tutaj wyświetlasz info "juz wypelniles ankiete"
                reject('juz wypelniles ankiete');
            }).catch((err) => {
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

                    //wyświetlasz hash z toHash + hash
                    //     toSecretHash = toHash + passHash.passwordHash; 
                    //    const secretHash = sha512(toSecretHash, salt);
                    //     //console.log(secretHash);
                    //    return secretHash;
                    toSecretHash = toHash + application.appMark + application.appMessage + application.appName + passHash;
                    resolve(sha512(toSecretHash, application.appHaslo));
                }).then((error) => {
                    //toSecretHash = toHash + passHash;
                    //resolve(sha512(toSecretHash, application.appHaslo));
                    // return error;
                    // console.log(error);
                }).catch(console.log);

            })



    });





};