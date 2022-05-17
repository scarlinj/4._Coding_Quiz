function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        
    }

    function showResults(questions, quizContainer, resultsContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
};

var liveQuestions = [
    {
        question: "What are the three first languages of this course?",
        answers: {
            a: 'HTML, CSS, Javascript',
            b: 'Hotmail, Fandango, Gmail',
            c: 'Spanish, English, German'
        },
        correctAnswer: 'a'
    },
    {
        question: "How would you connect a css file to an html page?",
        answers: {
            a: 'Install the CSS in your browser',
            b: 'Click the button to attach CSS to HTML',
            c: 'Add the tag for the script in your HTML to include src='
        },
        correctAnswer: 'c'
    },
    {
        question: "What element in your HTML allows you to crate a list?",
        answers: {
            a: '<li></li>',
            b: '<ol></ol>',
            c: 'Both a and b'
        },
        correctAnswer: 'c'
    },
    {
        question: "How would you add an entire list item, listItemEl, to a list?",
        answers: {
            a: '.addChild(listItemEl',
            b: '.appendChild(listItemEl);',
            c: '.connectTheList(listItemEl);'
        },
        correctAnswer: 'b'
    },
    {
        question: "If you create a function within curly braces {} for another function, what happens when you reference that function outside of the parent function?",
        answers: {
            a: 'The program will locate the function as normal.',
            b: 'The program to break because it cannot find a variable with that name.',
            c: 'The program will tell you to try again.'
        },
        correctAnswer: 'b'
    },
];