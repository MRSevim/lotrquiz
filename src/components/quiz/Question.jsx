import { useDispatch, useSelector } from "react-redux";
import { answer } from "../../redux/slices/quizSlice";
import { Buttons } from "./Buttons";
import { CenteredImage } from "../CenteredImage";

export const Question = ({ item }) => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.quiz.progress);

  const handleSelect = (key) => {
    if (!progress.finished) {
      dispatch(answer({ selectedAnswer: key, id: item.id }));
    }
  };

  return (
    <div key={item.id} className="mx-4 text-2xl">
      <div>
        <CenteredImage src={item.image.src} alt={item.image.alt} />
        <Buttons />
        {item.id}.{item.question}
      </div>
      <div className="my-3">
        {Object.keys(item.answers).map((key) => (
          <div key={key} className="my-1 flex">
            <div
              className="flex cursor-pointer"
              onClick={() => {
                handleSelect(key);
              }}
            >
              <div
                className={
                  item.selectedAnswer === key
                    ? "-m-1 border-4 border-amber-300 rounded-full"
                    : ""
                }
              >
                {key.toUpperCase()}-)
              </div>{" "}
              {item.answers[key]}
              {progress.finished && key === item.correctAnswer && (
                <i
                  className="ms-2 text-green-500 fa fa-check"
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
