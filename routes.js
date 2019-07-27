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
    app.get('/tweedr', tweedrControllerCallbacks.index); // see tweedr_ctrl.js line 55

    // ========================
    // GET login page
    // ========================
    app.get('/tweedr/login', tweedrControllerCallbacks.login); // see tweedr_ctrl.js line 56

    // ========================
    // GET register page
    // ========================
    app.get('/tweedr/register', tweedrControllerCallbacks.register); // see tweedr_ctrl.js line 57

    // ========================
    // POST users to register user
    // ========================
    app.post('/users', tweedrControllerCallbacks.users);  // see tweedr_ctrl.js



};