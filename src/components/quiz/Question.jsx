import { useDispatch } from "react-redux";
import { answer } from "../../redux/slices/quizSlice";

export const Question = ({ item }) => {
  const dispatch = useDispatch();

  const handleSelect = (key) => {
    dispatch(answer({ selectedAnswer: key, id: item.id }));
  };

  return (
    <div key={item.id} className="m-4 ml-12 text-2xl">
      <div>
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
                  item.question.selectedAnswer === key
                    ? "border-amber-300 selected"
                    : ""
                }
              >
                {key.toUpperCase()}-)
              </div>{" "}
              {item.answers[key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
