
let answeredCorrectly = 0;
let currentQuestion = 0;
let success_Audio = new Audio('audio/rightanswer-95219.mp3');
let fail_Audio = new Audio('audio/buzzer-or-wrong-answer-20582.mp3');

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){

    if(gameOver()){
        showLastScreen();
       if(answeredCorrectly>4){
        document.getElementById('top-img').src='image/ai-generated-8774244_1280.jpg';
    }else{
        document.getElementById('top-img').src='image/fail-1714367_1280.jpg';
    }
    }else{// progress bar
        showProgressBar();
        updateNextQuestion();
    }
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idofrightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']){
        answeredCorrectly++;
        
        document.getElementById(selection).parentNode.classList.add('bg-success');
        success_Audio.play();

    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofrightAnswer).parentNode.classList.add('bg-success');
        fail_Audio.play();
    }
        document.getElementById('next-btn').disabled=false;
}

function nextquestion(){
    currentQuestion++;
    document.getElementById('next-btn').disabled =true;
    resetNextQuestions();
    showQuestion();
}

function resetNextQuestions(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');

}

function playAgain(){
    document.getElementById('top-img').src='image/quiz-5595288_1280.jpg';
    document.getElementById('endscreen').style = 'display:none';
    document.getElementById('questionBody').style = '';
    answeredCorrectly = 0;
    currentQuestion = 0;
    init();
}
//from here down is shortened version of functions where they are originally
function gameOver(){
    return currentQuestion >= questions.length;
}

function showLastScreen() {
        document.getElementById('endscreen').style ="";
        document.getElementById('questionBody').style = 'display:none';
        document.getElementById('amountOfQuestion').innerHTML = questions.length;
        document.getElementById('correctAnswers').innerHTML = answeredCorrectly;
}

function showProgressBar(){
    let percent = (currentQuestion +1) / questions.length;
          percent =  Math.round(percent * 100);
         document.getElementById('progress-bar').innerHTML = `${percent}%`;
         document.getElementById('progress-bar').style = `width: ${percent}%`;
         console.log ('fortschrift', percent)
}

function updateNextQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion +1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['A'];
    document.getElementById('answer_2').innerHTML = question['B'];
    document.getElementById('answer_3').innerHTML = question['C'];
    document.getElementById('answer_4').innerHTML = question['D'];
    
}