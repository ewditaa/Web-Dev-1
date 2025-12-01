// Quiz questions array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "vladimir putin" },
  { question: "Which language is used for web development?", answer: "javascript" }
];

// Function to run the quiz
function runQuiz() {
  // 3. Score initialization
  let score = 0;

  // 4. Loop through questions
  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];

    // 5. Prompt for user input
    let userAnswer = prompt(currentQuestion.question);

    // If user cancels the prompt, stop the quiz
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    // 6. Normalize the input
    userAnswer = userAnswer.toLowerCase().trim();

    // 7. Check the answer
    if (userAnswer === currentQuestion.answer.toLowerCase().trim()) {
      // correct
      score++; // 8. Update score
      alert("Correct!");
    } else {
      // incorrect
      alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
    }
  }

  // 9. Display the final score
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

// 10. Run the quiz
runQuiz();
