import { useSelector } from "react-redux";
import { Question } from "./Question";
import { TrackBars } from "./TrackBars";

export const Main = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const progress = useSelector((state) => state.quiz.progress);

  return (
    <section className="container my-5 mx-auto">
      <div className="flex">
        <div className="w-1/4">
          <TrackBars />
        </div>
        <div className="w-3/4">
          {questions.map((item) => {
            if (progress.currentQuestion === item.id) {
              return <Question key={item.id} item={item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};
