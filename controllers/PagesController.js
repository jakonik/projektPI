
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

    /*    res.json({
            'name':req.body.name,
            'mark':req.body.mark,
            'message':req.body.message
    
    
        });*/