
const bookshelf = require('../config/bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
}


module.exports.create = async (application) => {

  console.log('wszedlem');
  console.log('jeszcze nie odpalałem konstruktora modeli');
  const userModel = new User();

  console.log('tu jestem')
  return await userModel.query('where', 'name', '=', application.usName, 'and', 'surname', '=', application.surname, 'and', 'mail', '=', application.usMail)
    .fetch().then(function (model) {
      console.log('user istnieje');
      return 'wypełnił/wypełniła ankietę'
    }).catch((err) => {
      console.log('jestem w catchu sprawdzania usera')
      return 'nie wypełnił/wypełniła ankiety'
    });


};


