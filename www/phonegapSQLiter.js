cordova.define("net.orworks.PhonegapSQLiter", function(require, exports, module) { 

var exec = require('cordova/exec');
/**
* @return Object literal singleton instance of SQLiteShell
*/
var SQLiteShell =
{
    /**
    * Method to open a database.
    * @param fullPath Full path to the database file.
    * @param successCallback The callback which will be called when database is opened successfully.
    * @param failureCallback The callback which will be called when database can't be opened.
    */
    openDatabaseFromSD: function (fullPath, toCreate, successCallback, errorCallback)
    {
    	cordova.exec(
            successCallback,    // Success callback from the plugin
		    errorCallback,      // Error callback from the plugin
		    'PhonegapSQLiter',   // Tell PhoneGap to run "SQLiteActivity" Plugin
		    'openDatabaseFromSD', 		// Tell plugin, which action we want to perform
		    [fullPath, toCreate ? 1 : 0] 	        // Passing list of args to the plugin
		    );
    },

    /**
    * Executes a query and return a single string. Note: number is returned as string 
    * and have to eval()-ed before using.
    * @param sql: SQL string.
    * @param params: An array of parameters.
    * @param successCallback The callback which will be called when the query is executed successfully.
    * @param failureCallback The callback which will be called when the query can't be executed.
    */
    execQuerySingleResult: function (sql, params, successCallback, errorCallback)
    {
    	cordova.exec(
		    successCallback,    // Success callback from the plugin
		    errorCallback,      // Error callback from the plugin
		    'PhonegapSQLiter',   // Tell PhoneGap to run "SQLiteActivity" Plugin
		    'execQuerySingleResult', 		// Tell plugin, which action we want to perform
		    [sql, params] 	        // Passing list of args to the plugin
		    );
    },

    /**
    * Executes a query and return a 2D javascript array. Rows are records and columns are data cols.
    * Note: numbers are returned as strings in the array and have to eval()-ed before using.
    * @param sql: SQL string.
    * @param params: An array of parameters.
    * @param successCallback The callback which will be called when the query is executed successfully.
    * @param failureCallback The callback which will be called when the query can't be executed.
    */
    execQueryArrayResult: function (sql, params, successCallback, errorCallback)
    {
    	PhoneGap.exec(
    		function (result)
    		{
    			cordova.exec(
    				function (result)
    				{
		        // We get a 2D array as a string. Convert it to a 2D array of strings.
		        var resultArray = eval(result);
		        successCallback(resultArray);
		    },    // Success callback from the plugin
		    errorCallback,      // Error callback from the plugin
		    'PhonegapSQLiter',   // Tell PhoneGap to run "SQLiteActivity" Plugin
		    'execQueryArrayResult', 		// Tell plugin, which action we want to perform
		    [sql, params] 	        // Passing list of args to the plugin
		    );
    		},

    /**
    * Executes a bunch of queries, which doesn't return any result.
    * @param sqlStatements: Array containing sql statements.
    *        Example: [ "DROP TABLE IF EXISTS DEMO",
    *                   "CREATE TABLE IF NOT EXISTS DEMO (id unique, data)",
    *                   "INSERT INTO DEMO (id, data) VALUES (1, 'First row')",
    *                   "INSERT INTO DEMO (id, data) VALUES (2, 'Second row')"];
    * @param params: An array of parameters.
    * @param successCallback The callback which will be called when queries are executed successfully.
    * @param failureCallback The callback which will be called when queries couldn't be executed.
    */
    execQueryNoResult: function (sqlStatements, successCallback, errorCallback)
    {
    	cordova.exec(
		    successCallback,    // Success callback from the plugin
		    errorCallback,      // Error callback from the plugin
		    'PhonegapSQLiter',   // Tell PhoneGap to run "SQLiteActivity" Plugin
		    'execQueryNoResult', 		// Tell plugin, which action we want to perform
		    [sqlStatements] 	        // Passing list of args to the plugin
		    );
    },

    /**
    * Closes a database safely.
    */
    closeDB: function ()
    {
    	cordova.exec(
	        null,    // Success callback from the plugin
	        null,      // Error callback from the plugin
	        'PhonegapSQLiter',   // Tell PhoneGap to run "SQLiteActivity" Plugin
	        'closeDB', 		// Tell plugin, which action we want to perform
	        [] 	        // Passing list of args to the plugin
	        );
    }
};

module.exports = SQLiteShell;

});
