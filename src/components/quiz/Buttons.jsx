import { useDispatch, useSelector } from "react-redux";
import {
  goToNextQuestion,
  goToPreviousQuestion,
} from "../../redux/slices/quizSlice";
import { finish, showEnding } from "../../redux/slices/quizSlice";

export const Buttons = () => {
  const progress = useSelector((state) => state.quiz.progress);
  const dispatch = useDispatch();

  const goToPreviousq = () => {
    dispatch(goToPreviousQuestion());
  };

  const goToNextq = () => {
    dispatch(goToNextQuestion());
  };

  const finishClick = () => {
    dispatch(finish());
  };
  const seeEndingClick = () => {
    dispatch(showEnding());
  };

  return (
    <div className="flex justify-between xl:w-3/4">
      <Button onClick={goToPreviousq} disabled={progress.currentQuestion === 1}>
        Previous
      </Button>
      {progress.lastSeenQuestion === 12 && !progress.finished && (
        <Button onClick={finishClick}>Finish</Button>
      )}
      {progress.finished && (
        <Button onClick={seeEndingClick}>See ending</Button>
      )}
      <Button
        onClick={goToNextq}
        extraClasses={progress.currentQuestion === 12 ? " hidden" : ""}
      >
        Next
      </Button>
    </div>
  );
};

const Button = ({ children, onClick, disabled, extraClasses }) => {
  return (
    <button
      onClick={onClick}
      className={
        "cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" +
        (disabled ? " pointer-events-none	dark:bg-gray-600" : "") +
        extraClasses
      }
    >
      {children}
    </button>
  );
};
