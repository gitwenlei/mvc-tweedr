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
    app.get('/tweedr', tweedrControllerCallbacks.index); // see tweedr_ctrl.js line 40

    // ========================
    // GET login page
    // ========================
    app.get('/tweedr/login',tweedrControllerCallbacks.login); // see tweedr_ctrl.js line 41

};