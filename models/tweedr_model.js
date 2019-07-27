/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let getAll = (callback) => {  // called in tweedr_ctrl file line 10
        let query = `SELECT * FROM tweets`;
        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
          }
        });
    };


    // ========================
    // Show login page
    // ========================
    let getLogin = (callback) => {  // called in tweedr_ctrl file line 23
        let query = `SELECT * FROM users`;
        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
          }
        });
    };


    // ========================
    // Check user login details
    // ========================
    let checkUsers = (tweedr, callback) => {  // called in tweedr_ctrl file line 23
        let query = `SELECT * FROM users WHERE name=$1`;
        const values = [tweedr.name];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error){
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0 ) {
                    if (queryResult.rows[0].password === tweedr.password) {
                        callback(null, queryResult.rows);
                    } else {
                        callback(null, null);
                    }
                } else {
                    callback(null, null);
                }
            }
        });
    };



    // ========================
    // Show register page
    // ========================
    let getRegister = (callback) => {  // called in tweedr_ctrl file line 23
        let query = `SELECT * FROM users`;
        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
          }
        });
    };


    // ========================================
    // Show user registration successful page
    // ========================================
    let postUsers = (tweedr, callback) => {  // called in tweedr_ctrl file line 51
        let query = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`;
        const values = [tweedr.name, tweedr.password];

        dbPoolInstance.query(query, values, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
          }
        });
    };



    return {
        getAll,
        getLogin,
        getRegister,
        postUsers,
        checkUsers,
    };
};