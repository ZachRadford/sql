var inquirer = require('inquirer');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'FF7'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

var answers

inquirer.prompt([
	{
        type: 'input',
        name: 'charName',
        message: 'What is the characters name?'
    }, {
    	type: 'input',
        name: 'charWeapon',
        message: 'What is the characters weapon?'
    }, {
    	type: 'input',
        name: 'charAge',
        message: 'What is the characters age?'
    }, {
    	type: 'input',
        name: 'charLimit',
        message: 'What is the characters limit break?'
    }
    ]).then(function(user){
    	answers = {
    		name: user.charName,
    		weapon: user.charWeapon,
    		age: user.charAge,
    		limitbreak: user.charLimit
    	}
    	writeSQL(answers);

    }).catch(function(){
    	console.log('Rejected')
    })


    function writeSQL(answers){
    	connection.query('INSERT INTO characters SET ?', answers,  function (error, results) {
  			if (error) throw error; 
		});
    }
