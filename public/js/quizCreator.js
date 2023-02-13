var socket = io();
var questionNum = 1; //Starts at two because question 1 is already present

function updateDatabase(){
    var questions = [];
    var name = document.getElementById('name').value;
    for(var i = 1; i <= questionNum; i++){
        var question = document.getElementById('q' + i).value;
        var answer1 = document.getElementById(i + 'a1').value;
        var answer2 = document.getElementById(i + 'a2').value;
        var answer3 = document.getElementById(i + 'a3').value;
        var answer4 = document.getElementById(i + 'a4').value;
        var correct = document.getElementById('correct' + i).value;
        var answers = [answer1, answer2, answer3, answer4];
        questions.push({"question": question, "answers": answers, "correct": correct})
    }
    
    var quiz = {id: 0, "name": name, "questions": questions};
    socket.emit('newQuiz', quiz);
}

function addQuestion(){
    questionNum += 1;
    
    var questionsDiv = document.getElementById('allQuestions');
    
    var newQuestionDiv = document.createElement("div");
    var divQuest = document.createElement("div");
    var divA1N2 = document.createElement("div");
    var divA3N4 = document.createElement("div");
    var divCorAns = document.createElement("div");
    
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    var answer1Label = document.createElement('label');
    var answer1Field = document.createElement('input');
    
    var answer2Label = document.createElement('label');
    var answer2Field = document.createElement('input');
    
    var answer3Label = document.createElement('label');
    var answer3Field = document.createElement('input');
    
    var answer4Label = document.createElement('label');
    var answer4Field = document.createElement('input');
    
    var correctLabel = document.createElement('label');
    var correctField = document.createElement('input');
    
    questionLabel.innerHTML = "Question " + String(questionNum) + ": ";
    questionField.setAttribute('class', 'question');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text');
    
    answer1Label.innerHTML = "Answer 1 : ";
    answer2Label.innerHTML = " Answer 2 : ";
    answer3Label.innerHTML = "Answer 3 : ";
    answer4Label.innerHTML = " Answer 4 : ";
    correctLabel.innerHTML = "Correct Answer (1-4): ";
    
    answer1Field.setAttribute('id', String(questionNum) + "a1");
    answer1Field.setAttribute('type', 'text');
    answer2Field.setAttribute('id', String(questionNum) + "a2");
    answer2Field.setAttribute('type', 'text');
    answer3Field.setAttribute('id', String(questionNum) + "a3");
    answer3Field.setAttribute('type', 'text');
    answer4Field.setAttribute('id', String(questionNum) + "a4");
    answer4Field.setAttribute('type', 'text');
    correctField.setAttribute('id', 'correct' + String(questionNum));
    correctField.setAttribute('type', 'number');
    
    divQuest.setAttribute('id', 'quest');//Sets class of div
    divA1N2.setAttribute('id', 'answer1');
    divA3N4.setAttribute('id', 'answer2');   
    divCorAns.setAttribute('id', 'correctAns');

    divQuest.appendChild(questionLabel);
    divQuest.appendChild(questionField);
    divA1N2.appendChild(answer1Label);
    divA1N2.appendChild(answer1Field);
    divA1N2.appendChild(answer2Label);
    divA1N2.appendChild(answer2Field);
    divA3N4.appendChild(answer3Label);
    divA3N4.appendChild(answer3Field);
    divA3N4.appendChild(answer4Label);
    divA3N4.appendChild(answer4Field);
    divCorAns.appendChild(correctLabel);
    divCorAns.appendChild(correctField);

    newQuestionDiv.setAttribute('id', 'question-field');
    
    newQuestionDiv.appendChild(divQuest);
    newQuestionDiv.appendChild(divA1N2);
    newQuestionDiv.appendChild(divA3N4);
    newQuestionDiv.appendChild(divCorAns);
    
    questionsDiv.appendChild(newQuestionDiv);//Adds the question div to the screen
    
}

//Called when user wants to exit quiz creator
function cancelQuiz(){
    if (confirm("Are you sure you want to exit? All work will be DELETED!")) {
        window.location.href = "../";
    }
}

socket.on('startGameFromCreator', function(data){
    window.location.href = "../../host/?id=" + data;
});









