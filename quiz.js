const quizData = [
  {
    question: "What is EV battery swapping?",
    type: "mcq",
    options: [
      "Replacing an electric vehicle with a new one",
      "Swapping the tires of an EV",
      "Replacing a discharged EV battery with a fully charged one",
      "Charging the battery using solar energy"
    ],
    answer: 2
  },
  {
    question: "Which of these is a benefit of battery swapping over charging?",
    type: "mcq",
    options: [
      "Takes longer than regular charging",
      "Increases vehicle weight",
      "Reduces downtime for drivers",
      "Requires more expensive equipment"
    ],
    answer: 2
  },
  {
    question: "How long does a typical battery swap take?",
    type: "mcq",
    options: [
      "30–45 minutes",
      "10–15 minutes",
      "1–2 hours",
      "Less than 5 minutes"
    ],
    answer: 3
  },
  {
  question: "Identify the part shown below:",
  type: "mcq",
  image: "https://media.licdn.com/dms/image/v2/C4E12AQHHfseoJogwWw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1583973769657?e=2147483647&v=beta&t=qow4LqRgb2fkZHmNDEyLbk22stwS4avwGLshwoFiGjU",
  options: [
    "Battery Management System (BMS)",
    "Battery Pack",
    "Charging Port",
    "Inverter"
  ],
  answer: 2
},
  {
    question: "What is the average lifespan of a swappable EV battery?",
    type: "mcq",
    options: [
      "1–2 years",
      "3–5 years",
      "6–8 years",
      "Over 10 years"
    ],
    answer: 2
  },
  {
    question: "Battery swapping reduces e-waste.",
    type: "tf",
    options: ["True", "False"],
    answer: 0
  },
  {
  question: "🔍 Myth or Fact: EV batteries catch fire easily.",

  type: "mcq",
  options: [
    "Myth",
    "Fact"
  ],
  answer: 0
},
  {
    question: "Battery swapping requires specialized charging stations.",
    type: "tf",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "You’re on a long trip and your EV battery is low. What would you do?",
    type: "mcq",
    options: [
      "Wait until the battery is completely dead and then decide",
      "Try to reach the next city without stopping",
      "Visit the nearby swap station and replace your battery",
      "Call roadside assistance and wait for hours"
    ],
    answer: 2
  },
  {
    question: "You arrive at a battery swap station, but it shows a delay of 20 minutes. What should you do?",
    type: "mcq",
    options: [
      "Leave the station and drive until the battery dies",
      "Calmly wait or check the nearest alternative swap station using the app",
      "Argue with the staff and demand instant service",
      "Try to manually charge the battery on your own"
    ],
    answer: 1
  }
];
function renderQuiz() {
  const quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = "";
  quizData.forEach((q, index) => {
    let questionHTML = `<div class="mb-4"><p class="quiz-question">${index + 1}. ${q.question}</p>`;
    if (q.image) {
      questionHTML += `<img src="${q.image}" class="img-fluid my-3" style="max-height: 300px;" alt="Quiz Image">`;
    }
    q.options.forEach((option, i) => {
      questionHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q${index}" id="q${index}opt${i}" value="${i}" required>
          <label class="form-check-label quiz-option" style="font-size: 1.2rem;" for="q${index}opt${i}">${option}</label>  
        </div>`;
    });
    questionHTML += `</div>`;
    quizContent.innerHTML += questionHTML;
  });
}
document.addEventListener("DOMContentLoaded", renderQuiz);

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("quiz-result").innerHTML = `🎉 You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.`;
});
