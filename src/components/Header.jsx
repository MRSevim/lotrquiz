import { useState } from "react";
import { TrackBars } from "./quiz/TrackBars";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-amber-300 px-2">
        <div className="flex justify-between items-center container mx-auto py-2">
          <h1 className=" text-3xl font-party-business">LotrQuiz</h1>
          <div className="block md:hidden">
            <button
              onClick={() => {
                setMenuOpen((prev) => !prev);
              }}
            >
              <hr
                className="w-4 h-1
           bg-black border-0 mt-0.5"
              ></hr>
              <hr
                className="w-4 h-1
           bg-black border-0 mt-0.5"
              ></hr>
              <hr
                className="w-4 h-1
           bg-black border-0 mt-0.5"
              ></hr>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed	bg-zinc-100 w-full h-full right-0 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="my-4 flex justify-center">
          <TrackBars setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </>
  );
};
