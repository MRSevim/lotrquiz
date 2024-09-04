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
      correctAnswer: "a",
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
      correctAnswer: "c",
      selectedAnswer: null,
    },
  ],
  progress: { currentQuestion: 1, lastSeenQuestion: 1, finished: false },
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
      if (state.progress.currentQuestion === action.payload.id) {
        state.progress.currentQuestion += 1;
      }
      if (state.progress.lastSeenQuestion === action.payload.id) {
        state.progress.lastSeenQuestion += 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { answer } = quizSlice.actions;

export default quizSlice.reducer;
