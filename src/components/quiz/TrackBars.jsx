import { useSelector, useDispatch } from "react-redux";

export const TrackBars = () => {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const handleSelect = (id) => {};

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
              : "")
          }
        >
          {item.id}
        </div>
      ))}
    </section>
  );
};
