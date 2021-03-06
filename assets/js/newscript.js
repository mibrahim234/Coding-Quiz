//Where you do all the script for the highscore html page and getItem from localStorage
// questions in the quiz
// you want things related together to stay together 
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

// This will be where you store the main question and setting localStorage


var clearHighscores = document.querySelector("#clear-highscores");
var testScores = document.getElementById('test');

function displayHighscores () {
    var displayScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
    console.log(displayScores.length);
    // either get scores from local storage or set to empty array
    // sort highscores 
    // loop through the array of highscores and create the html tags to display each 
    var storeScores; 
    for ( i = 0; i < displayScores.length; i++) {
        storeScores = document.createElement('li');
        storeScores.textContent = displayScores[i].initials + displayScores[i].scores
        var olTag = document.getElementById('test')
        olTag.appendChild(storeScores) 
        
    }
}
displayHighscores()


// Set and event listener to clearHighscores
// 2. Clear out your local storage for 'highScores'
// 3. Clear out your html content for id test
clearHighscores.addEventListener('click', function () {
 testScores.classList.add('hide');

});