var startQuiz = document.querySelector("#btn")
var quizArea = document.getElementById("quizarea")
var question = document.getElementById("question")
var button1 = document.getElementById("option1")
var button2 = document.getElementById("option2")
var button3 = document.getElementById("option3")
var button4 = document.getElementById("option4")
var result = document.getElementById("questionResults")
var currentQuestion = 0
var grade = 0
var endResults = document.getElementById("end-results")
var userInitials = document.getElementById("user-initials")
var saveInitials = document.getElementById("save-initials")

var timer = 60;
var timerObject;
var counter = document.getElementById("counter")

quizArea.style.display = "none"
endResults.style.display = "none"

var startBtnHandler = function () {
    counter.textContent = "Time Left: " + timer + "s"
 
    timerObject = setInterval(function () {
        counter.textContent = "Time Left: " + timer + "s"
        
        if(timer > 0) {
            timer--;
        } else {
            clearInterval(timerObject)
            counter.textContent = "Time's up!"
            displayResults()
        }
    },1000)
    startQuiz.style.display = "none"
    quizArea.style.display = "block"
    displayQuestion();
};




var questionlist = [ 
    {
        q:"1) How would you connect a CSS file to an HTML page?",
        c:["Install the CSS in your browser","Click the button to attach CSS to HTML","Add the tag for the script in your HTML to include src=","Install the CSS file"],
        a:3
    },
    {
        q:"2) What element in your HTML allows you to create a list?",
        c:["<li></li>","<ol></ol>","#Both a and b","$"],
        a:3
    },
    {
        q:"3) How would you add an entire list item, listItemEl, to a list?",
        c:["' '","( )","{ }","[ ]"],
        a:2
    }, {
        q:"4) The use of [ ] signifies which type of data storage?",
        c:[".createChild(listItemEl)",".appendChild(listItemEl);","./(listItemEl)",".connectTheList(listItemEl);"],
        a:2
    },
    {
        q:"5) If you create a function within curly braces {} for another function, what happens when you reference that function outside of the parent function?",
        c:["The program will locate the function as normal.","The program to break because it cannot find a variable with that name.","The program will tell you to try again.","Nothing will happen."],
        a:2
    }
]

function displayQuestion () {
    question.textContent = questionlist[currentQuestion].q
    button1.textContent = questionlist[currentQuestion].c[0]
    button2.textContent = questionlist[currentQuestion].c[1]
    button3.textContent = questionlist[currentQuestion].c[2]
    button4.textContent = questionlist[currentQuestion].c[3]
}

function optionHandler() {
    var userValue = this.getAttribute("data-value")
    if (userValue == questionlist[currentQuestion].a) {
        result.textContent = "Correct";
        grade += 10;
    } else{
        result.textContent = "Wrong";
        timer -= 10;
    }

    if(currentQuestion < questionlist.length - 1) {
        currentQuestion ++;
        displayQuestion()
    } else{
        clearInterval(timerObject)
        counter.textContent = "You've completed the quiz!"
        displayResults()
    }
}



function displayResults() {
    endResults.style.display = "block"
    quizArea.style.display = "none"
    document.querySelector("#final-score").textContent = "Your final score is " + grade + "."
}



function saveScores() {
    var userScores = JSON.parse(localStorage.getItem("initials")) || []
    var user = document.getElementById("user-initials").value
    userScores.push({user:user,score:grade})
    localStorage.setItem("initials", JSON.stringify(userScores))
    endResults.style.display = "none"
    var allScores = ""
    for (let i = 0; i < userScores.length; i++) {
        allScores += `<h6> ${userScores[i].user} scored ${userScores[i].score}/50 </h6>`
    }
    
    document.getElementById("all-scores").innerHTML = allScores
    counter.textContent = "ALL SCORES"
}




startQuiz.addEventListener("click", startBtnHandler)
button1.addEventListener("click", optionHandler)
button2.addEventListener("click", optionHandler)
button3.addEventListener("click", optionHandler)
button4.addEventListener("click", optionHandler)
saveInitials.addEventListener("click", saveScores)