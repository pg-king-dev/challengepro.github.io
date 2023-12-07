//using selectors inside the element
const question = document.querySelectorAll(".question-answer");

question.forEach(function (questions) {
  //console.log(question)
  const btn = questions.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    question.forEach(function (item) {
      if (item !== questions) {
        item.classList.remove("show-text");
      }
    });

    questions.classList.toggle("show-text");
  });
});

//Making sure that the answer shows when entered and that it toggles accordingly
const questions = document.querySelectorAll(".question-answer");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    toggleAnswer(question);
  });

  question.addEventListener("keydown", (e) => {
    if (e.key === " " || e.keyCode === 13) {
      e.preventDefault();
      toggleAnswer(question);
    }
  });
});

function toggleAnswer(clickedQuestion) {
  questions.forEach((question) => {
    const answer = question.querySelector(".answer");
    const btn = question.querySelector(".question-btn");

    if (question === clickedQuestion) {
      // Toggle the visibility of the answer for the clicked question
      const AnswerVisible =
        answer.style.display === "none" || answer.style.display === "";
      answer.style.display = AnswerVisible ? "block" : "none";
      btn.setAttribute("aria-expanded", AnswerVisible);
      question.classList.toggle("show-text", AnswerVisible);
      toggleIcon(btn, AnswerVisible);
    } else {
      // Close answers for other questions
      answer.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
      question.classList.remove("show-text");
      toggleIcon(btn, false);
    }
  });
}

function toggleIcon(btn, AnswerVisible) {
  const plusIcon = btn.querySelector(".plus");
  const minusIcon = btn.querySelector(".minus");

  if (AnswerVisible) {
    plusIcon.style.display = "none";
    minusIcon.style.display = "inline";
  } else {
    plusIcon.style.display = "inline";
    minusIcon.style.display = "none";
  }
}

//making sure that the focuse is on the specific elements of our choice, creating lodgic using tabindex

// foucing only with keyboard
document.addEventListener("keydown", () => {
  document.body.classList.add("using-keyboard");
  document.body.classList.remove("using-mouse");
});
//not using mouse for focusing
document.addEventListener("mousedown", () => {
  document.body.classList.add("using-mouse");
  document.body.classList.remove("using-keyboard");
});

const elements = document.querySelectorAll("[tabindex]");

document.addEventListener("keydown", function (e) {
  if (e.key === "Tab" || e.keyCode === 40 || e.keyCode === 38) {
    // Prevent default tab behaviorwhich is to move the focus to the next focusable element on the page
    e.preventDefault();

    // This line finds the index of the currently focused element among the elements with a tabindex attribute. It converts the NodeList to an array using Array.from() and then uses indexOf to find the index of the currently focused element
    const currentIndex = Array.from(elements).indexOf(document.activeElement);

    // This calculates the index of the next element to receive focus. If the currently focused element is the last one, it wraps around to the first element.
    const nextIndex = (currentIndex + 1) % elements.length;

    // This sets the focus on the next element in the NodeList. The focus() method is used to move the keyboard focus to the specified element.
    elements[nextIndex].focus();
  }
});

//request of the project

//Users should be able to:

// - Hide/Show the answer to a question when the question is clicked
// - Navigate the questions and hide/show answers using keyboard navigation alone
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
