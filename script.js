const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
} else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
};



function startGame() {
 console.log('started');
 startButton.classList.add('hide');
 currentQuestionIndex = 0;
 questionContainerElement.classList.add('hide');
 setNextQuestion();
}

function setNextQuestion() {
    resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
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
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    };
}


function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
 })
 nextButton.classList.remove('hide');
}

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
                {text: '4', correct: true },
                {text: '7', correct: false }
            ]
        }
];