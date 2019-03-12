var playerWins;
var playerLosses;

// An array holding each trivia question, it's correct answer, and a comment if the answer is false.
var questions = [{
        name: "questionOne",
        content: "Earth's moon is the largest in our solar system.",
        answer: "False",
        comment: "Jupiter's Ganymede is the largest moon in our solar system."
    },
    {
        name: "questionTwo",
        content: "Earth's atmosphere is mainly made up of nitrogen and oxygen.",
        answer: "True"
    },
    {
        name: "questionThree",
        content: "A planet's gravitational pull depends on the mass of the planet.",
        answer: "True"
    },
    {
        name: "questionFour",
        content: "A molecule of ozone is made of three oxygen atoms.",
        answer: "True"
    },
    {
        name: "questionFive",
        content: "Like Earth, Mars has only one moon.",
        answer: "False",
        comment: "Mars has two moons."
    },
    {
        name: "questionSix",
        content: "The Milky Way makes a complete rotation every 200 million years.",
        answer: "True",
    },
    {
        name: "questionSeven",
        content: "One year on Mercury lasts 88 Earth days.",
        answer: "True",
    },
    {
        name: "questionEight",
        content: "The Milky Way is the name of our solar system.",
        answer: "False",
        comment: "The Milk Way is the name of our galaxy."
    },
    {
        name: "questionNine",
        content: "Neptune’s blue color is caused by the frozen gases on its surface.",
        answer: "False",
        comment: "Methane gas on Neptune absorbs red light, leaving the planet's reflection blue."
    },
    {
        name: "questionTen",
        content: "Mars is the second largest of the four rocky planets in our solar system.",
        answer: "False",
        comment: "Earth is the largest, followed by Venus, then Mars and Mercury."
    }
];


$(document).ready(function () {
    reset();
});

// Timer function that updates 'Time Remaining' every second.
var intervalID;
var timerOn = false;
var time = 6;

function startTimer() {
    if (!timerOn) {
        intervalID = setInterval(count, 1000);
        timerOn = true;
    };
};

function stopTimer() {
    clearInterval(intervalID);
    timerOn = false;
};

function count() {
    time--;
    $("#timer").text("Time Remaining: " + time);
    if (time === 0) {
        stopTimer();
        alert("Time's Up!");
        showResults();
        // I have not yet figured out how to capture user answers. 
        // Once I do, I will create a function to evaluate the answers.
        // Then I will create a function to display the user's score.
    };
};


function reset() {
    playerWins = 0;
    playerLosses = 0;
    console.log("Wins - " + playerWins + ", Losses - " + playerLosses);
};

// Declaring variables to hold each question object's answer and the corresponding 'comment'.
var answerOne;
var commentOne;
var answerTwo;
var commentTwo;
var answerThree;
var commentThree;
var answerFour;
var commentFour;
var answerFive;
var commentFive;

// Function to assign a random question to the each placeholder.
function start() {
    resetArray();
    createFirst();
    createSecond();
    createThird();
    createFourth();
    createFifth();

    // The following block of code works well for displaying 5 random questions on the page.
    // However, I could not figure out a way to assign the 'answer' from the question object array
    // to a variable using this for loop. So, I just created 5 separate functions further down. Nice n wet.
    // for (i = 0; i < 5; i++) {
    //     var index = (Math.floor(Math.random() * questions.length))
    //     var question = questions[index].content;
    //     console.log("Rando: " + question);
    //     questions.splice(index, 1);
    //     var qArr = ["#question-one", "#question-two", "#question-three", "#question-four", "#question-five"];
    //     var aArr = ["#answer-one", "#answer-two", "#answer-three", "#answer-four", "#answer-five"];
    //     $(qArr[i]).empty;
    //     $(qArr[i]).text(question);
    //     $(aArr[i]).html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");

    // };

    console.log("________");
    console.log(answerOne);
    console.log(commentOne);
    console.log(answerTwo);
    console.log(commentTwo);
    console.log(answerThree);
    console.log(commentThree);
    console.log(answerFour);
    console.log(commentFour);
    console.log(answerFive);
    console.log(commentFive);


    startTimer();
};

// The following five functions replaced my for loop from above. 
function createFirst() {
    var i = Math.floor(Math.random() * questions.length);
    answerOne = questions[i].answer;
    commentOne = questions[i].comment;
    var question = questions[i].content;
    questions.splice(i, 1);
    $("#question-one").empty;
    $("#question-one").text(question);
    $("#answer-one").html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");
};

function createSecond() {
    var i = Math.floor(Math.random() * questions.length);
    answerTwo = questions[i].answer;
    commentTwo = questions[i].comment;
    var question = questions[i].content;
    questions.splice(i, 1);
    $("#question-two").empty;
    $("#question-two").text(question);
    $("#answer-two").html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");
};

function createThird() {
    var i = Math.floor(Math.random() * questions.length);
    answerThree = questions[i].answer;
    commentThree = questions[i].comment;
    var question = questions[i].content;
    questions.splice(i, 1);
    $("#question-three").empty;
    $("#question-three").text(question);
    $("#answer-three").html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");
};

function createFourth() {
    var i = Math.floor(Math.random() * questions.length);
    answerFour = questions[i].answer;
    commentFour = questions[i].comment;
    var question = questions[i].content;
    questions.splice(i, 1);
    $("#question-four").empty;
    $("#question-four").text(question);
    $("#answer-four").html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");
};

function createFifth() {
    var i = Math.floor(Math.random() * questions.length);
    answerFive = questions[i].answer;
    commentFive = questions[i].comment;
    var question = questions[i].content;
    questions.splice(i, 1);
    $("#question-five").empty;
    $("#question-five").text(question);
    $("#answer-five").html("<input type='radio' name='answer' value='true'/>True <input type='radio' name='answer' value='false'/>False");
};


// This function displays the correct answer and the applicable comment, if available, for each question.
function showResults() {
    if (answerOne === "False") {
        $("#correct-one").text("The correct answer is: " + answerOne + ". " + commentOne + ".");
    } else {
        $("#correct-one").text("The correct answer is: " + answerOne + ".");
    };

    if (answerTwo === "False") {
        $("#correct-two").text("The correct answer is: " + answerTwo + ". " + commentTwo + ".");
    } else {
        $("#correct-two").text("The correct answer is: " + answerTwo + ".");
    };

    if (answerThree === "False") {
        $("#correct-three").text("The correct answer is: " + answerThree + ". " + commentThree + ".");
    } else {
        $("#correct-three").text("The correct answer is: " + answerThree + ".");
    };

    if (answerFour === "False") {
        $("#correct-four").text("The correct answer is: " + answerFour + ". " + commentFour + ".");
    } else {
        $("#correct-four").text("The correct answer is: " + answerFour + ".");
    };

    if (answerFive === "False") {
        $("#correct-five").text("The correct answer is: " + answerFive + ". " + commentFive + ".");
    } else {
        $("#correct-five").text("The correct answer is: " + answerFive + ".");
    };
};

function scoreGame() {

}

// This function resets the original object array. 
// This is necessary because I am splicing each object from the array as it is randomly chosen to be displayed on the page.
function resetArray() {
    questions = [{
            name: "questionOne",
            content: "Earth's moon is the largest in our solar system.",
            answer: "False",
            comment: "Jupiter's Ganymede is the largest moon in our solar system."
        },
        {
            name: "questionTwo",
            content: "Earth's atmosphere is mainly made up of nitrogen and oxygen.",
            answer: "True"
        },
        {
            name: "questionThree",
            content: "A planet's gravitational pull depends on the mass of the planet.",
            answer: "True"
        },
        {
            name: "questionFour",
            content: "A molecule of ozone is made of three oxygen atoms.",
            answer: "True"
        },
        {
            name: "questionFive",
            content: "Like Earth, Mars has only one moon.",
            answer: "False",
            comment: "Mars has two moons."
        },
        {
            name: "questionSix",
            content: "The Milky Way makes a complete rotation every 200 million years.",
            answer: "True",
        },
        {
            name: "questionSeven",
            content: "One year on Mercury lasts 88 Earth days.",
            answer: "True",
        },
        {
            name: "questionEight",
            content: "The Milky Way is the name of our solar system.",
            answer: "False",
            comment: "The Milk Way is the name of our galaxy."
        },
        {
            name: "questionNine",
            content: "Neptune’s blue color is caused by the frozen gases on its surface.",
            answer: "False",
            comment: "Methane gas on Neptune absorbs red light, leaving the planet's reflection blue."
        },
        {
            name: "questionTen",
            content: "Mars is the second largest of the four rocky planets in our solar system.",
            answer: "False",
            comment: "Earth is the largest, followed by Venus, then Mars and Mercury."
        }
    ];
};




$(document).on("click", ".start-button", start);