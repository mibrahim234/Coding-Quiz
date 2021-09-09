const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

var shuffledQuestions;
var currentQuestionIndex = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide');
// } else {
//     startButton.innerText = 'Restart';
//     startButton.classList.remove('hide');
// };




function startGame() {
 console.log('started');
 startButton.classList.add('hide');
 //gives random array
 shuffledQuestions = questions.sort(() => Math.random() - .5);
 currentQuestionIndex = 0;
 questionContainerElement.classList.add('hide');
 setNextQuestion();
};

function setNextQuestion() {
    resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    // remove the class off the container that is hiding it
    questionContainerElement.classList.remove("hide");

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    });
};

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    };
};


function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
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
    element.classList.remove('wrong!');

};

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