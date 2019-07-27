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
        console.log(allTweets);
        response.render('tweedr/index', { allTweets }); //display index html page in views folder
      });
  };

    // ========================
    // Show login page
    // ========================
    let loginControllerCallback = (request, response) => { // function declared in routes.js
      db.tweedr.getLogin((error, allUsers) => {
      // see db.js line 97 tweedr: tweedrModelsObject
      // model file tweedr_model.js line 30
      // getLogin function - show login pg
        console.log(allUsers);
        response.render('tweedr/login', { allUsers }); //display login html page in views folder
      });
  };


    // ========================
    // Show register page
    // ========================
    let registerControllerCallback = (request, response) => { // function declared in routes.js
      db.tweedr.getRegister((error, allUsers) => {
      // see db.js line 97 tweedr: tweedrModelsObject
      // model file tweedr_model.js line 52
      // getRegisterfunction - show register pg
        console.log(allUsers);
        response.render('tweedr/register', { allUsers }); //display register page in views folder
      });
    };


    // =======================================
    // Show user registration successful page
    // ========================================
    let usersControllerCallback = (request, response) => { // function declared in routes.js
        db.tweedr.postUsers(request.body, (error, allUsers) => {
        // see db.js line 97 tweedr: tweedrModelsObject
        // see tweedr_model.js line 73
        // postUsers function
        // console.log("all users: " , allUsers)
        response.send("Registration Successful!");
        // response.render('tweedr/register', { allUsers }); //display register page in views folder
        });
    };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return {
    index: indexControllerCallback, // see above line 9
    login: loginControllerCallback, // see above line 22
    register: registerControllerCallback, // see above line 36
    users: usersControllerCallback, // see above line 50
  };
}