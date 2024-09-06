import { useSelector } from "react-redux";
import { Question } from "./Question";
import { TrackBars } from "./TrackBars";
import { Finished } from "./Finished";

export const Main = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const progress = useSelector((state) => state.quiz.progress);

  return (
    <section className="container my-5 mx-auto">
      <div className="flex justify-center">
        <div className="hidden w-1/4 md:block">
          <TrackBars />
        </div>
        <div className="md:w-3/4 md:mx-6">
          {progress.showEnding && <Finished />}
          {!progress.showEnding && (
            <>
              {questions.map((item) => {
                if (progress.currentQuestion === item.id) {
                  return <Question key={item.id} item={item} />;
                }
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
