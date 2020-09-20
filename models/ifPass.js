
const bookshelf = require('../config/bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
}


module.exports.ifPass = async (application) => {

  console.log('wszedlem');
  console.log('jeszcze nie odpalałem konstruktora modeli');
  const userModel = new User();

  console.log('tu jestem')
  return await userModel.where({ name: application.usName, surname: application.usSurname, mail: application.usMail })
    .fetch().then(function (model) {
      console.log(model);
      return 'wypełnił/wypełniła ankietę'
    }).catch((err) => {
      console.log('jestem w catchu sprawdzania usera')
      return 'nie wypełnił/wypełniła ankiety'
    });


};