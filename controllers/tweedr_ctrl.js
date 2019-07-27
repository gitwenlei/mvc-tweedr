module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => { // function declared in routes.js
      db.tweedr.getAll((error, allTweets) => { //see db.js line 97 tweedr: tweedrModelsObject && model file tweedr_model.js line 9 getAll function - show all tweets
        console.log(allTweets);
        response.render('tweedr/index', { allTweets }); //display index html page in views folder
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return {
    index: indexControllerCallback, // see above line 9
  };
}