var socket = io();
var playerAnswered = false;
var correct = false;
var name;
var score = 0;

var params = jQuery.deparam(window.location.search); //Gets the id from url

socket.on('connect', function() {
    //Tell server that it is host connection from game view
    socket.emit('player-join-game', params);
    
    document.getElementById('answer1').style.visibility = "visible";
    document.getElementById('answer2').style.visibility = "visible";
    document.getElementById('answer3').style.visibility = "visible";
    document.getElementById('answer4').style.visibility = "visible";
});

socket.on('noGameFound', function(){
    window.location.href = '../../';//Redirect user to 'join game' page 
});

function answerSubmitted(num){
    if(playerAnswered == false){
        playerAnswered = true;
        
        socket.emit('playerAnswer', num);//Sends player answer to server
        
        //Hiding buttons from user
        document.getElementById('btnContainer').style.visibility = "hidden";
        document.getElementById('answer1').style.visibility = "hidden";
        document.getElementById('answer2').style.visibility = "hidden";
        document.getElementById('answer3').style.visibility = "hidden";
        document.getElementById('answer4').style.visibility = "hidden";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Answer Submitted! Waiting on other players...";
        
    }
}

//Get results on last question
socket.on('answerResult', function(data){
    if(data == true){
        correct = true;
    }
});

socket.on('questionOver', function(data){
    if(correct == true){
        document.body.style.backgroundColor = "#D2DDF1";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Nice!";
        document.getElementById("resultGif").src = "../../assets/correct.gif";
        document.getElementById("resultGif").style.display = "block";
    }else{
        document.body.style.backgroundColor = "#d37552";
        document.getElementById('message').style.display = "block";
        document.getElementById('message').innerHTML = "Nice Try!";
        document.getElementById("resultGif").src = "../../assets/wrong.gif";
        document.getElementById("resultGif").style.display = "block";
    }
    document.getElementById('answer1').style.display = "none";
    document.getElementById('answer2').style.display = "none";
    document.getElementById('answer3').style.display = "none";
    document.getElementById('answer4').style.display = "none";
    socket.emit('getScore');
});

socket.on('newScore', function(data){
    document.getElementById('scoreText').innerHTML = "Score: " + data;
});

socket.on('nextQuestionPlayer', function(){
    correct = false;
    playerAnswered = false;
    document.getElementById('answer1').style.display = "block";
    document.getElementById('answer2').style.display = "block";
    document.getElementById('answer3').style.display = "block";
    document.getElementById('answer4').style.display = "block";
    document.getElementById('message').style.display = "none";
    document.getElementById("resultGif").style.display = "none";
    document.body.style.backgroundColor = "white";
    
});

socket.on('hostDisconnect', function(){
    window.location.href = "../../";
});

socket.on('playerGameData', function(data){
   for(var i = 0; i < data.length; i++){
       if(data[i].playerId == socket.id){
           document.getElementById('nameText').innerHTML = "Name: " + data[i].name;
           document.getElementById('scoreText').innerHTML = "Score: " + data[i].gameData.score;
       }
   }
});

socket.on('GameOver', function(){
    document.body.style.backgroundColor = "#D2DDF1";
    document.getElementById('answer1').style.display = "none";
    document.getElementById('answer2').style.display = "none";
    document.getElementById('answer3').style.display = "none";
    document.getElementById('answer4').style.display = "none";
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = "GAME OVER";
});

