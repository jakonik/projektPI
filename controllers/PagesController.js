
exports.home = (req, res) => {

    res.render('home', {
        formMessage: req.flash('form')
    });
};
exports.view = (req, res) => {

    res.render('view', {
        formMessage: req.flash('form')
    });
};
exports.ifPass = (req, res) => {

    res.render('ifPass', {
        formMessage: req.flash('form')
    });
};

