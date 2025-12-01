
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "vladimir putin" },
  { question: "Which language is used for web development?", answer: "javascript" }
];


function runQuiz() {
  
  let score = 0;

 
  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];

    
    let userAnswer = prompt(currentQuestion.question);

   
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

   
    userAnswer = userAnswer.toLowerCase().trim();


    if (userAnswer === currentQuestion.answer.toLowerCase().trim()) {
      // correct
      score++; 
      alert("Correct!");
    } else {
     
      alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
    }
  }

  
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

// 10. Run the quiz
runQuiz();

