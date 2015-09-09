//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
  var str = request.url;
  var pieces = str.match(/\w+/g);

  if (pieces[0] === 'math'){
    switch(pieces[1]){
      case 'add': 
        var result = parseInt(pieces[2]) + parseInt(pieces[3]);
        break;
      case 'subtract': 
        var result = parseInt(pieces[2]) - parseInt(pieces[3]);
        break;
      case 'multiply':
        var result = parseInt(pieces[2]) * parseInt(pieces[3]); 
        break;
      case 'divide': 
        var result = parseInt(pieces[2]) / parseInt(pieces[3]);
        break;  
      default:      
    }
  }else{
    response.end('This is not math!');
  }
    response.end('answer: ' + result);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});