// const express = require('express')
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express()

// app.use(cors())

// const db = mysql.createConnection({
 
//   host: 'localhost',
//   user: 'KOMPUTER\oksana',
//   password: '',
//   database: 'websoft',
// })
// db.connect()
// app.get('/', (req, res) => {
  
//   db.query(`USE websoft
//             GO
//             SELECT * FROM data`, function(error, results, fields) {
//     if (results) {
//       res.send(results)
//     } else {
//       console.log(error);
//     }
//   })
// })
  

// app.listen(3306, () => {
//   console.log('listening');
// })
var Connection = require('tedious').Connection;  
    var config = {  
        server: 'localhost',  //update me
        authentication: {
            type: 'default',
            
            options: {
                userName: 'root', //update me
                password: 'root',  //update me 
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'websoft',  //update me
            trustServerCertificate: true,
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        if (err) {
            console.log(err);
        } else {
            executeStatement()
        }
        // console.log("Connected");  
    });
    
    connection.connect();
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        var request = new Request("SELECT * Table_1;", function(err, result) {  
        if (err) {  
            console.log(err);} 
            else {
                console.log(result);
            } 
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    } 
    