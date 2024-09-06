import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      image: {
        src: "/images/1.webp",
        alt: "Frodo falling with the ring",
      },
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
      image: {
        src: "/images/2.webp",
        alt: "Frodo and Sam leaving Shire",
      },
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
      image: { src: "/images/3.webp", alt: "Jolly Tom Bombadil" },
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
      image: {
        src: "/images/4.webp",
        alt: "Saruman using palantir",
      },
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
      image: {
        src: "/images/5.webp",
        alt: "Leader of the Dead Army",
      },
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
      image: { src: "/images/6.webp", alt: "Gollum being adorable" },
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
      image: {
        src: "/images/7.webp",
        alt: "Battle of the Pelennor Fields clash",
      },
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
      image: { src: "/images/8.webp", alt: "One Ring" },
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
      image: { src: "/images/9.webp", alt: "Creature swimming" },
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
      image: {
        src: "/images/10.webp",
        alt: "Fellowship of the Ring",
      },
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
      image: { src: "/images/11.webp", alt: "Gandalf Agitated" },
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
      image: { src: "/images/12.webp", alt: "Smaug in Erebor" },
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

const possibleEndings = {
  between03: {
    image: {
      src: "/images/ending1.webp",
      alt: "Mordor",
    },
    title: "Lost in the Shadow of Mordor",
    text: "The road goes ever on, but it seems you have wandered into the shadow. Fear not; even the smallest steps can lead to greatness. Study the lore of Middle-earth, and you may yet find your way to the light. Keep trying, for not all those who wander are lost!",
  },
  between47: {
    image: {
      src: "/images/ending2.webp",
      alt: "Fellowship of the ring Drawing by haley",
    },

    title: "The Courage of the Fellowship",
    text: "You have the heart of a hero, standing side by side with the Fellowship. Whether wielding the courage of Samwise, the wisdom of Gandalf, or the strength of Gimli, you’ve shown great spirit. You’ve traveled far, but there are still lands to explore and stories to uncover!",
  },
  between811: {
    image: {
      src: "/images/ending3.webp",
      alt: "Boromir and Faramir side by side",
    },

    title: "A Guardian of Middle-earth: Wise and Honorable",
    text: "Like the Elves of Rivendell or the Dúnedain Rangers, your knowledge is deep and your journey long. You have proven yourself a protector of the free peoples, with wisdom and valor to match. Few can claim such understanding of Middle-earth’s secrets—your legend grows!",
  },
  at12: {
    image: {
      src: "/images/ending4.webp",
      alt: "Galadriel looking at her ring",
    },

    title: "Champion of the Ages: A Legend of Middle-earth!",
    text: "You stand among the greatest, like Aragorn reclaiming the throne of Gondor or Galadriel wielding the power of her ring. Your knowledge is unmatched, your wisdom profound. The tales of Middle-earth are yours to command, and your name will be sung in the halls of Valinor. A true champion has arisen!",
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
        state.progress.displayed = possibleEndings.between03;
      } else if (
        4 <= state.progress.correctQuestionCount &&
        state.progress.correctQuestionCount <= 7
      ) {
        state.progress.displayed = possibleEndings.between47;
      } else if (
        8 <= state.progress.correctQuestionCount &&
        state.progress.correctQuestionCount <= 11
      ) {
        state.progress.displayed = possibleEndings.between811;
      } else if (state.progress.correctQuestionCount === 12) {
        state.progress.displayed = possibleEndings.at12;
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
