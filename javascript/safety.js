const questions = [
    {
        question: "Which is safest when walking at night in a new city?",
        potential_answers: [
            "Avoid main roads and take shortcuts",
            "Flash expensive jewellery and valuables",
            "Stick to well-lit, busy streets",
        ],
        answer: 2
    },
    {
        question: "What’s the safest way to store important travel documents?",
        potential_answers: [
            "Carry originals and copies stored separately",
            "Keep everything only on your phone",
            "Post photos of them online for backup"
        ],
        answer: 0
    },
    {
        question: "If your phone dies while abroad, what’s wise to carry?",
        potential_answers: [
            "Extra SIM cards",
            "Spare sunglasses",
            "Portable charger"
        ],
        answer: 2
    },
    {
        question: "What’s a smart tip for using taxis abroad?",
        potential_answers: [
            "Only use official taxi services or trusted ride apps",
            "Get into any car that offers you a ride",
            "Get into a car that is not highlighted taxi"
        ],
        answer: 0
    },
    {
        question: "If you get lost in a foreign city, what should you do?",
        potential_answers: [
            "Pull out a large paper map in the middle of the street",
            "Step into a busy café or shop to reorient yourself",
            "Wander aimlessly until you find your way"
        ],
        answer: 1
    }
];

let questionNumber = 0;
let score = 0;

const questionContainer = document.getElementById("questionContainer");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const scoreNumber = document.getElementById("quizScore");

function loadQuizQuestion() {
    const q = questions[questionNumber];
    questionContainer.innerHTML = `
        <h2 class="font-semibold">${q.question}</h2>
        ${q.potential_answers.map((option, i) => `
            <button class="block w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
                    onclick="checkAnswer(${i})">${option}</button>
        `).join("")}
    `;
}

function checkAnswer(selected) {
    const correct = questions[questionNumber].answer;
    if (selected === correct) {
        score++;
        alert("Correct!");
    } else {
        alert(`Incorrect! The right answer was: ${questions[questionNumber].potential_answers[correct]}`);
    }
    nextQuestionButton.classList.remove("hidden");
}

nextQuestionButton.addEventListener("click", () => {
    questionNumber++;
    if (questionNumber < questions.length) {
        loadQuizQuestion();
        nextQuestionButton.classList.add("hidden");
    } else {
        questionContainer.innerHTML = "<h2>Quiz Complete!</h2>";
        scoreNumber.textContent = `You scored ${score} out of ${questions.length}`;
        nextQuestionButton.remove();
    }
});

loadQuizQuestion();
