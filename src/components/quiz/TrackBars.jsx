import { useSelector, useDispatch } from "react-redux";
import { selectQuestion } from "../../redux/slices/quizSlice";

export const TrackBars = ({ setMenuOpen }) => {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const handleSelect = (id) => {
    dispatch(selectQuestion({ selectedQuestion: id }));
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <section className="grid grid-cols-4 gap-3">
      {quiz.questions.map((item) => (
        <div
          onClick={() => {
            handleSelect(item.id);
          }}
          key={item.id}
          className={
            "w-12 m-auto p-2 text-2xl text-center border-2 border-amber-300 rounded-lg cursor-pointer hover:bg-amber-100" +
            (quiz.progress.lastSeenQuestion < item.id
              ? " bg-slate-400 pointer-events-none"
              : "") +
            (item.selectedAnswer && !quiz.progress.finished
              ? " bg-yellow-400"
              : "") +
            (quiz.progress.finished &&
            item.selectedAnswer &&
            item.correctAnswer === item.selectedAnswer
              ? " bg-green-500"
              : "") +
            (quiz.progress.finished &&
            item.selectedAnswer &&
            item.correctAnswer !== item.selectedAnswer
              ? " bg-red-500"
              : "")
          }
        >
          {item.id}
        </div>
      ))}
    </section>
  );
};
