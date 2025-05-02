const questions =[
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad"
  },
  {
    question: "How many Surahs are there in the Holy Quran?",
    options: ["114", "110", "100", "120"],
    answer: "114"
  },
  {
    question: "Which is the largest ocean in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "Balochistan", "KPK"],
    answer: "Balochistan"
  },
  {
    question: "Where is the UN headquarters located?",
    options: ["Paris", "New York", "London", "Geneva"],
    answer: "New York"
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Fuji", "Mount Everest"],
    answer: "Mount Everest"
  },
  {
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Tim Berners-Lee"
  },
  {
    question: "When did Pakistan conduct its first nuclear test?",
    options: ["1998", "1999", "2000", "1996"],
    answer: "1998"
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Malta", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "What is the national flower of Pakistan?",
    options: ["Rose", "Sunflower", "Jasmine", "Lily"],
    answer: "Jasmine"
  },
  {
    question: "Who was the first human created by Allah?",
    options: ["Moses", "Jesus", "Muhammad (PBUH)", "Adam"],
    answer: "Adam"
  },
  {
    question: "Who won the FIFA World Cup 2022?",
    options: ["France", "Brazil", "Argentina", "Germany"],
    answer: "Argentina"
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Liaquat Ali Khan", "Quaid-e-Azam", "Zulfiqar Bhutto", "Benazir Bhutto"],
    answer: "Liaquat Ali Khan"
  },
  {
    question: "Which Surah is the longest in the Quran?",
    options: ["Al-Kausar", "Yaseen", "Al-Baqarah", "Al-Falaq"],
    answer: "Al-Baqarah"
  },
  {
    question: "What is the most spoken language in the world?",
    options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
    answer: "Mandarin Chinese"
  },
  {
    question: "What is the national sport of Pakistan?",
    options: ["Hockey", "Cricket", "Football", "Squash"],
    answer: "Hockey"
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "NaCl", "CH4"],
    answer: "H2O"
  },
  {
    question: "What is the largest animal on Earth?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Shark"],
    answer: "Blue Whale"
  },
  {
    question: "Where is the Kaaba located?",
    options: ["Medina", "Jerusalem", "Cairo", "Makkah"],
    answer: "Makkah"
  },
  {
    question: "When did Pakistan gain independence?",
    options: ["14 August 1947", "15 August 1947", "26 January 1950", "23 March 1940"],
    answer: "14 August 1947"
  }
];
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(opt => {
      const li = document.createElement("li");
      li.classList.add("option");
      li.innerHTML = `
        <label>
          <input type="radio" name="option" value="${opt}"> ${opt}
        </label>
      `;
      optionsEl.appendChild(li);
    });
  }
  
  nextBtn.onclick = () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (!selectedOption) {
      alert("choose any option");
      return;
    }
  
    const userAnswer = selectedOption.value;
    if (userAnswer === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  };
  
  function showResult() {
    questionEl.classList.add("hidden");
    optionsEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
  
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `<h3>Your Total marks is: ${score} / ${questions.length}</h3>`;
  }
  
  showQuestion();
  