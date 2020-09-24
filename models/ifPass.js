
const bookshelf = require('../config/bookshelf');

/** users table model*/
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
}

/** this function check if user pass answer */
module.exports.ifPass = async (application) => {

  console.log('wszedlem');
  console.log('jeszcze nie odpalałem konstruktora modeli');
  const userModel = new User();

  console.log('tu jestem')

  /** question to database. Emty response => user does not answer, not empty response => user pass answer */
  return await userModel.where({ name: application.usName, surname: application.usSurname, mail: application.usMail })
    .fetch().then(function (model) {
      console.log(model);
      return 'Wypełnił/wypełniła ankietę'
    }).catch((err) => {
      console.log('jestem w catchu sprawdzania usera')
      return 'Nie wypełnił/wypełniła ankiety'
    });


};