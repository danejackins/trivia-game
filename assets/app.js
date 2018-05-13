$(function() {

$('#finish-btn').hide();

var timer;
var counter;

// Start game object
var game = {
    questions: [
        {
            question: "What is the capital of Colorado?",
            answer: "Denver",
            options: ["Sacramento", "Reno", "Albany", "Denver"]
        },
        {
            question: "What is the state bird of Colorado?",
            answer: "Lark Bunting",
            options: ["Hawk", "Seagull", "Lark Bunting", "Pelican"]
        },
        {
            question: "The longest road in America is in Colorado, which street is it?",
            answer: "Colfax Avenue",
            options: ["Colfax Avenue", "Federal Boulevard", "Hampden Avenue", "Colorado Boulevard"]
        },
        {
            question: "What is the state nickname?",
            answer: "The Centennial State",
            options: ["The Sunshine State", "The Mile-High State", "The Centennial State", "The Beehive State"]
        },
        {
            question: "How many 14ers (mountains with an elevation greater than 14,000 feet) are in Colorado?",
            answer: "53",
            options: ["25", "53", "88", "119"]
        },
        {
            question: "Which of the following was NOT a minor league sports team based in Denver prior to 1996?",
            answer: "The Rapids",
            options: ["The Rapids", "The Bears", "The Zephyrs", "The Grizzlies"]
        },
        {
            question: "What is the state flower?",
            answer: "Columbine",
            options: ["Mock Orange", "Mountain Laurel", "Indian Paintbrush", "Columbine"]
        },
        {
            question: "How about the state tree?",
            answer: "Blue Spruce",
            options: ["Quaking Aspen", "Blue Spruce", "Ponderosa Pine", "Pine"]
        },
        {
            question: "In which year did Colorado become a state?",
            answer: "1876",
            options: ["1864", "1876", "1890", "1912"]
        },
  
    ],
    start: function() {
        counter = 60;
        $("#run-btn").hide();
        $('#finish-btn').show();
        $('#questions').empty();

        this.displayQuestions();
        

        // put timer on page
        this.startTimer();

    },
    
    displayQuestions: function() {
        // put questions on page
        for (var i = 0; i < this.questions.length; i++) {
            var questionObj = this.questions[i];
            // add question to page
            $("#questions").append(`
                <div>
                    ${questionObj.question}
                </div>
            `);
            // add options to page
            for (var j = 0; j < questionObj.options.length; j++) {
                var answerChoice = questionObj.options[j];
                // <input type="radio" name="question0" value="Sacramento" />
                $("#questions").append(`
                    ${answerChoice}: <input type="radio" name=${"question-" + i} value="${answerChoice}" />
                `);
            } 
            // add a nice line break
            $("#questions").append("<br /><br />");
        }
    },

    startTimer: function() {
        /*
            Do this every second:
            1. Count down from 60 to 0
            2. Put counter on page
            3. If timer is at 0 force end game
        */

       timer = setInterval(function() {
        console.log(counter);
        $('#timer').text(counter);
        
        if (counter === 0) {
            // TODO: force end game
            endGame();
        }
        counter--;
       }, 1000);
       
    }

};

$("#run-btn").click(function() {

    console.log("That button worked");
    console.log('this', this);



    // run() button disappears
    game.start();



});

$('#finish-btn').click(function() {
    endGame();
});

function endGame() {
    clearInterval(timer);
   /*
        1. Loop through questions
        2. Check if user answer is correct
        3. Tally up results
        4. Display correct / incorrect

        endGame()
   */
    var numCorrect = 0;
    for (var i = 0; i < game.questions.length; i++) {
        var correctAnswer = game.questions[i].answer;
        var userAnswer = $(`input[name=question-${i}]:checked`).val();

        if (userAnswer === correctAnswer) {
            numCorrect++;
        }
        // ================== The code below shows how we gather userAnswer from radio buttons ===========
        //<input type="radio" name=${"question-" + i} value=${answerChoice} />
        //<input type="radio" name="question-" value="Hawk" />
        //var userAnswer = $(name=question-0);
        //console.log($(`input`));
        //console.log($(`input[name=question-${i}]`));
        //console.log($(`input[name=question-${i}]:checked`));
        //console.log($(`input[name=question-${i}]:checked`).val());
        //console.log('-------');

        //$('input[name=name_of_your_radiobutton]:checked').val();

    }
    alert(`You got ${numCorrect} out of ${game.questions.length}!`);

    var playAgain = confirm('Would you like to play again?');
    if (playAgain) {
        game.start();
        }   
    }
});