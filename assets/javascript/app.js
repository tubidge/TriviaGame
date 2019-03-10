var playerWins;
var playerLosses;

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

function reset() {
    playerWins = 0;
    playerLosses = 0;
    console.log("Wins - " + playerWins + ", Losses - " + playerLosses);
    $("#question-one").empty;
    $("#question-two").empty;
};

function start() {
    var i = (Math.floor(Math.random() * 10))
    console.log("Rando: " + i);
    var question = questions[i].content;
    $("#question-one").text(question);
    $("answer-one").html("<input type='radio' value='true'>True</input>")
};

$(document).on("click", ".start-button", start);