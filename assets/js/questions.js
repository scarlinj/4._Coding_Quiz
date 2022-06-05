var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var menu = document.getElementById('menu');


function countdown() {
    var timeLeft = 60;


}

var questions = [
    // {
    //             question: "What are the three first languages of this course?",
    //             choices: ["HTML, CSS, Javascript", "Hotmail, Fandango, Gmail", "Spanish, English, German"],
    //             answer: "HTML, CSS, Javascript"
    //             },
            //     answer: 'a'
            // },

// below not working.  Test another method.
    {
        question: "What are the three first languages of this course?",
        choices: {
            a: 'HTML, CSS, Javascript',
            b: 'Hotmail, Fandango, Gmail',
            c: 'Spanish, English, German'
        },
        answer: 'a'
    },
    {
        question: "How would you connect a css file to an html page?",
        choices: {
            a: 'Install the CSS in your browser',
            b: 'Click the button to attach CSS to HTML',
            c: 'Add the tag for the script in your HTML to include src='
        },
        answer: 'c'
    },
    {
        question: "What element in your HTML allows you to crate a list?",
        choices: {
            a: '<li></li>',
            b: '<ol></ol>',
            c: 'Both a and b'
        },
        answer: 'c'
    },
    {
        question: "How would you add an entire list item, listItemEl, to a list?",
        choices: {
            a: '.addChild(listItemEl',
            b: '.appendChild(listItemEl);',
            c: '.connectTheList(listItemEl);'
        },
        answer: 'b'
    },
    {
        question: "If you create a function within curly braces {} for another function, what happens when you reference that function outside of the parent function?",
        choices: {
            a: 'The program will locate the function as normal.',
            b: 'The program to break because it cannot find a variable with that name.',
            c: 'The program will tell you to try again.'
        },
        answer: 'b'
    },
];

var userScore= 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#timer");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

timer.addEventListener("click", function () {
    // if ()
});