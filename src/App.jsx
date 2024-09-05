import { Header } from "./components/Header";
import { Main } from "./components/quiz/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Provider store={store}>
      <div className="font-serif">
        <Header />
        <Main />
      </div>
      <Analytics />
    </Provider>
  );
}

export default App;
