import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the fate of Frodo after the War of the Ring?",
      answers: {
        a: "He remains in the Shire",
        b: "He sails to the Undying Lands",
        c: "He becomes the King of Gondor",
        d: "He lives with Eagles",
      },
      correctAnswer: "b",
      selectedAnswer: null,
    },
    {
      id: 2,
      question:
        "How does Frodo’s journey differ between the books and movies when departing the Shire after his dear uncle leaves it?",
      answers: {
        a: "Frodo leaves immediately in both",
        b: "In the book, he leaves after 17 years; in the movie, it seems quicker",
        c: "In the book, he leaves after 4 year; in the movie, it seems quicker",
        d: "In the movie, Frodo never leaves the Shire",
      },
      correctAnswer: "b",
      selectedAnswer: null,
    },
    {
      id: 3,
      question:
        "Who is Tom Bombadil, whom the Fellowship meets in the books but not in the movies?",
      answers: {
        a: "A powerful wizard",
        b: "A hobbit from the Shire",
        c: "A mysterious and ancient being",
        d: "An elf from Rivendell",
      },
      correctAnswer: "c",
      selectedAnswer: null,
    },
    {
      id: 4,
      question: "In the movies, what is the fate of Saruman?",
      answers: {
        a: "He is killed by Wormtongue at Isengard",
        b: "He flees to Mordor",
        c: "He joins Sauron",
        d: "He is banished and survives",
      },
      correctAnswer: "a",
      selectedAnswer: null,
    },
    {
      id: 5,
      question: "What is the name of the undead army Aragorn commanded?",
      answers: {
        a: "Army of the Dead",
        b: "Dead Man of Belfalas",
        c: "Ghosts of Mordor",
        d: "Last Alliance of Men",
      },
      correctAnswer: "a",
      selectedAnswer: null,
    },
    {
      id: 6,
      question: "What happens to gollum in the end?",
      answers: {
        a: "Frodo forgives Gollum and they become friends",
        b: "Faramir kills him",
        c: "He dies of old age",
        d: "He burns in Mount Doom alongside his precious",
      },
      correctAnswer: "d",
      selectedAnswer: null,
    },
    {
      id: 7,
      question:
        "Which character in the movies says, “That still only counts as one!” during the Battle of Pelennor Fields?",
      answers: {
        a: "Legolas",
        b: "Gimli",
        c: "Aragorn",
        d: "Boromir",
      },
      correctAnswer: "b",
      selectedAnswer: null,
    },
    {
      id: 8,
      question:
        "Who is depicted as the primary antagonist that is also Lord of the Rings in the trilogy?",
      answers: {
        a: "Sauron",
        b: "Saruman",
        c: "The Witch-king of Angmar",
        d: "Lobelia Sackville-Baggins",
      },
      correctAnswer: "a",
      selectedAnswer: null,
    },
    {
      id: 9,
      question:
        "What is the name of the creature that guards the lake at the Western Gate of Moria?",
      answers: {
        a: "Kraken of Moria",
        b: "Lake Guardian",
        c: "Water Wight",
        d: "Watcher in the Water",
      },
      correctAnswer: "d",
      selectedAnswer: null,
    },
    {
      id: 10,
      question:
        "Which character that exist in the books were left out of movies?",
      answers: {
        a: "Ghân-buri-Ghân",
        b: "Prince Imrahil",
        c: "Goldberry",
        d: "All of the above",
      },
      correctAnswer: "d",
      selectedAnswer: null,
    },
    {
      id: 11,
      question: "Which place represent the good side in the trilogy?",
      answers: {
        a: "Minas Morgul",
        b: "Isengard",
        c: "Rivendell",
        d: "Fangorn",
      },
      correctAnswer: "c",
      selectedAnswer: null,
    },
    {
      id: 12,
      question:
        "Which of the below does not exist in Lord Of The Rings universe?",
      answers: {
        a: "Ent",
        b: "Warg",
        c: "Mumakil",
        d: "Hippogriff",
      },
      correctAnswer: "d",
      selectedAnswer: null,
    },
  ],
  progress: {
    currentQuestion: 1,
    lastSeenQuestion: 1,
    finished: false,
    correctQuestionCount: null,
    displayed: null,
    showEnding: false,
  },
};

const possibleTexts = {
  between03: {
    title: "Lost in the Shadow of Mordor",
    text: "The road goes ever on, but it seems you have wandered into the shadow. Fear not; even the smallest steps can lead to greatness. Study the lore of Middle-earth, and you may yet find your way to the light. Keep trying, for not all those who wander are lost!",
  },
  between47: {
    title: "A Brave Hobbit on a Grand Adventure",
    text: "Like a hobbit out of the Shire, you've shown courage and curiosity. You've glimpsed the wonders of Middle-earth, but there are many paths yet to tread. Keep your feet steady and your heart stout; adventure still calls, and you have the spirit to answer.",
  },
  between811: {
    title: "A Ranger of the North, Wise and Skilled",
    text: "You have the knowledge of a seasoned ranger, familiar with the hidden paths of Middle-earth. Your wisdom rivals that of Aragorn himself. Yet, there is always more to discover. Continue your quest, for the true king of trivia has yet to be crowned!",
  },
  at12: {
    title: "The Heir of Gondor, True King of Middle-earth!",
    text: "You stand triumphant, as if crowned by the light of Eärendil himself! Your knowledge shines brighter than the Silmarils, and your understanding rivals that of the wisest Elves. You are the true champion of Middle-earth, a legend among lore-masters. All hail the King!",
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answer: (state, action) => {
      const newQuestions = state.questions.map((question) => {
        if (question.id === action.payload.id) {
          question.selectedAnswer = action.payload.selectedAnswer;
        }
        return question;
      });

      state.questions = newQuestions;
    },
    selectQuestion: (state, action) => {
      state.progress.showEnding = false;
      state.progress.currentQuestion = action.payload.selectedQuestion;
    },
    goToNextQuestion: (state) => {
      if (state.progress.lastSeenQuestion === state.progress.currentQuestion) {
        state.progress.lastSeenQuestion += 1;
      }

      if (state.progress.currentQuestion < state.questions.length) {
        state.progress.currentQuestion += 1;
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.progress.currentQuestion > 1) {
        state.progress.currentQuestion -= 1;
      }
    },
    finish: (state) => {
      state.progress.finished = true;
      state.progress.showEnding = true;
      state.progress.correctQuestionCount = state.questions.filter(
        (item) => item.correctAnswer === item.selectedAnswer
      ).length;

      if (
        0 <= state.progress.correctQuestionCount &&
        state.progress.correctQuestionCount <= 3
      ) {
        state.progress.displayed = possibleTexts.between03;
      } else if (
        4 <= state.progress.correctQuestionCount &&
        state.progress.correctQuestionCount <= 7
      ) {
        state.progress.displayed = possibleTexts.between47;
      } else if (
        8 <= state.progress.correctQuestionCount &&
        state.progress.correctQuestionCount <= 11
      ) {
        state.progress.displayed = possibleTexts.between811;
      } else if (state.progress.correctQuestionCount === 12) {
        state.progress.displayed = possibleTexts.at12;
      }
    },
    showEnding: (state) => {
      state.progress.showEnding = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  answer,
  selectQuestion,
  goToNextQuestion,
  goToPreviousQuestion,
  finish,
  showEnding,
} = quizSlice.actions;

export default quizSlice.reducer;
