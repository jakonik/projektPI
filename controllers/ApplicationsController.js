const Application = require('../models/application');
const GetData = require('../models/GetData');
const IfPass = require('../models/ifPass');


exports.store = (req, res) => {
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
exports.store1 = (req, res) => {
    GetData.create({
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

    })//.catch(err => {
    //  console.log('ddddddddd')
    // req.flash('form', err);
    //res.redirect('/');
    // }
    //)


};
exports.store2 = (req, res) => {
    IfPass.create({
        'usName': req.body.usName,
        'usSurname': req.body.usSurname,
        'usMail': req.body.usMail
    }).then(function (xd) {
        console.log('po zabawie');
        console.log(xd);

        req.flash('form', xd);
        res.redirect('/');

    })//.catch(err => {
    //  console.log('ddddddddd')
    // req.flash('form', err);
    //res.redirect('/');
    // }
    //)


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


