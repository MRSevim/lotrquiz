import { useSelector } from "react-redux";
export const Finished = () => {
  const progress = useSelector((state) => state.quiz.progress);
  const questions = useSelector((state) => state.quiz.questions);
  return (
    <div className="mx-2">
      <h1 className="my-2 text-xl font-bold">{progress.displayed.title}</h1>
      <p className="my-2 text-xl">
        You got {progress.correctQuestionCount} out of {questions.length}{" "}
        questions right.
      </p>
      <p>{progress.displayed.text}</p>
    </div>
  );
};
