module.exports = function(app, passport) {

	// server routes

	app.get('/auth/facebook', 
		passport.authenticate('facebook', { 
			scope : 'email' 
		})
	);

	app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        })
    );

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

	function isLoggedIn(req, res, next) {

	    if (req.isAuthenticated())
	        return next();

    	res.redirect('/');
	}
	
	// frontend routes 

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
};