module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

    // require the controller
    const tweedrControllerCallbacks = require('./controllers/tweedr_ctrl')(allModels);

    // ========================
    // GET home page
    // ========================
    app.get('/', tweedrControllerCallbacks.index); // see tweedr_ctrl.js line 55


    // ========================
    // LOGIN STUFF
    // ========================
    // login form
    app.get('/login', tweedrControllerCallbacks.login); // see tweedr_ctrl.js line 56
    // verify user login
    app.post('/check', tweedrControllerCallbacks.check);  // see tweedr_ctrl.js


    // ========================
    // REGISTRATION STUFF
    // ========================
    // show registration form
    app.get('/register', tweedrControllerCallbacks.register); // see tweedr_ctrl.js
    // save new user to database
    // ========================
    app.post('/users', tweedrControllerCallbacks.users);  // see tweedr_ctrl.js


    // ========================
    // TWEETING STUFF
    // ========================
    // Show create new tweet form
    // app.get('/tweet',tweedrControllerCallbacks.tweet);



};