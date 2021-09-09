var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonElement = document.getElementById('answer-buttons');
var timerEl = document.querySelector("#timer");
var startPage = document.querySelector("#start-screen");
var submitHighscoresPg = document.querySelector("#submit-highscores-page");
var shuffledQuestions;
var currentQuestionIndex = 0;

// game starts when start is clicked
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
}); 


// function starts game
function startGame() {
 console.log('started');
 startButton.classList.add('hide');
 // shuffles questions so question is different each time
 shuffledQuestions = questions.sort(() => Math.random() - .5);
 // set to 0 because we're starting from the first question in shuffle array
 currentQuestionIndex = 0;
 questionContainerElement.classList.add('hide');
 setNextQuestion();
 countdown();
};

// sets the new question
function setNextQuestion() {
    // resets everything to default state once we set a new question
    resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// shows a question 
function showQuestion(question) {
    // removes the class of hide to show questions
    questionContainerElement.classList.remove("hide");

    // populate different answers
    // loop through answers to get a single answer for each
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // adds data attribute on button element
        // only shows if button is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
       
    });
};

// after we click on an answer we want to hide the next button
// while loop deletes all answers that came before and sets the new answers 
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    };
};

// selects answer 
function selectAnswer(e) {
 var selectedButton = e.target
 // whatever button we clicked on^
 var correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct);
 // whether answer should be set to correct or wrong^
 Array.from(answerButtonElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
 })
 nextButton.classList.remove('hide');
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

};

// questions in the quiz
var questions = [
    
        {
            question: "Commonly used data types DO NOT include?",
            answers: [
                {text: 'Strings', correct: false },
                {text: 'Boolean', correct: false },
                {text: 'Alerts', correct: true},
                {text: 'Numbers', correct: false}

            ]
        },

        {
            question: "The condition in an if/else statement is enclosed with ____.",
            answers: [
                {text: 'Quotes', correct: false },
                {text: 'Square Brackets', correct: false },
                {text: 'Parenthesis', correct: false },
                {text: 'Curly Brackets', correct: true }

            ]
        },

        {
            question: "Arrays in JavaScript can be used to store ___.",
            answers: [
             {text: "Numbers and strings", correct: false },
            {text: 'All of the above', correct: true },
                {text: 'Boolean', correct: false },
                {text: 'Other Arrays', correct: false }

            ]
        },
        {
            question: "String values must be enclosed within___ when being assigned to variables",
            answers: [
                {text: 'Quotes', correct: true },
                {text: 'Curly Brackets', correct: false },
                {text: 'Commas', correct: false },
                {text: 'Parenthesis', correct: false }

            ]
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
            answers: [
                {text: 'JavaScript', correct: false },
                {text: 'Terminal/Bash', correct: false },
                {text: 'Console.log', correct: true },
                {text: 'For loops', correct: false }

            ]
        },

];

// Timer that counts down from 100
// when time hits 0 it alerts the console 
// when question is wrong timer must go down by 5 for every wrong answer
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;

      } else {
        timerEl.textContent = '';
        alert("Time's Up!");
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  // start button event listener 
  // timer starts by itself fix that
startButton.addEventListener("click", function() {
    // makes startpage hidden after click
startPage.setAttribute("style", "display: none;");
     })

