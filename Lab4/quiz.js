const quizQuestions = [
    { question : "8575 + 6525 = ?", answer : "15100"},
    { question : "what is the chemical symbol of water?", answer : "h2o"},
    { question : "who is known as father of computer?", answer : "charles babbage"},
    { question : "what is full form of HTML = ?", answer : "hyper text markup language"},
    { question : "what is full form of CSS = ?", answer : "cascading style sheet"},
    { question : "39 + 20 = ?", answer : "59"}
];

function runQuiz() {
    let score = 0;  

    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question);

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }
    alert("Your final score is : " + score + "/" + quizQuestions.length);
}

runQuiz();
