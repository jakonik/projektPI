const Application = require('../models/application');
const GetData = require('../models/GetData');
const IfPass = require('../models/ifPass');


exports.pass = (req, res) => {
    Application.create({
        'appHaslo': req.body.appHaslo,
        'usName': req.body.usName,
        'appName': req.body.appName,
        'appMark': req.body.appMark,
        'appMessage': req.body.appMessage,
        'usSurname': req.body.usSurname,
        'usMail': req.body.usMail
    }).then(function (xd) {
        console.log('po zabawie');
        console.log(xd);
        const hash = "twój tajny hash to " + xd;
        req.flash('form', hash);
        res.redirect('/');

    }).catch(err => {
        req.flash('form', err);
        res.redirect('/');
    }
    )


};
exports.verification = (req, res) => {
    GetData.verification({
        'appHaslo': req.body.appHaslo,
        'secretHash': req.body.secretHash,
        'usName': req.body.usName,
        'usSurname': req.body.usSurname,
        'usMail': req.body.usMail
    }).then(function (xd) {
        console.log('po zabawie');
        console.log(xd);

        req.flash('form', xd);
        res.redirect('/');

    })


};
exports.ifPass = (req, res) => {
    IfPass.ifPass({
        'usName': req.body.usName,
        'usSurname': req.body.usSurname,
        'usMail': req.body.usMail
    }).then(function (xd) {
        console.log('po zabawie');
        console.log(xd);

        req.flash('form', xd);
        res.redirect('/');

    })


};
exports.getData = (req, res) => {



    const getdata = GetData.create({
        'haslo': req.body.haslo,
        'name': req.body.name,
        'message': req.body.message

    }).then(function () {
        req.flash('form', 'Dziękujemy!');
        res.redirect('/');

    });


};