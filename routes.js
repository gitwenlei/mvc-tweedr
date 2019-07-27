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
    app.get('/tweedr', tweedrControllerCallbacks.index);

};