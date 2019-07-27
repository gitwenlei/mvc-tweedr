module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let indexControllerCallback = (request, response) => { // function declared in routes.js
        db.tweedr.getAll((error, allTweets) => {
        // see db.js line 97 tweedr: tweedrModelsObject
        // model file tweedr_model.js line 9
        // getAll function - show all tweets
        // console.log(allTweets);
        response.render('tweedr/index', { allTweets }); //display index page in views folder
        });
    };

    // ========================
    // Show login form
    // ========================
    let loginForm = (request, response) => { // function declared in routes.js
        response.render('tweedr/login'); //display login form
  };


    // =======================================
    // Check user login details
    // ========================================
    let checkControllerCallback = (request, response) => { // function declared in routes.js
        db.tweedr.checkUsers(request.body, (error, results) => {
            if (results !== null) {
                // console.log(results);
                let user_id = results[0].id;
                console.log('correct' , results[0]);
                response.cookie('loggedin', true);
                response.cookie('user_id', user_id);
                response.redirect('/tweedr');
            } else {
                console.log('invalid' , results[0]);
                console.log("incorrect password");
                response.send('invalid input');
            }
        });
    };


    // ========================
    // Show register page
    // ========================
    let registerControllerCallback = (request, response) => { // function declared in routes.js
      db.tweedr.getRegister((error, allUsers) => {
        // console.log(allUsers);
        response.render('tweedr/register', { allUsers }); //display registration form
      });
    };


    // =======================================
    // Show user registration successful page
    // ========================================
    let usersControllerCallback = (request, response) => { // function declared in routes.js
        db.tweedr.postUsers(request.body, (error, allUsers) => {
        // response.send("Registration Successful!");
        response.redirect('/tweedr');
        });
    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return {
    index: indexControllerCallback, // see above line 9
    login: loginForm, // see above line 22
    register: registerControllerCallback, // see above line 36
    users: usersControllerCallback, // see above line 50
    check: checkControllerCallback,
  };
}