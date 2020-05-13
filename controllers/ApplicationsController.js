// Store new application
exports.store = (req, res) => {
    req.flash('form', 'Dziękujemy!');
    res.redirect('/');
};