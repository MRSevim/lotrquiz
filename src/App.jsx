import { Header } from "./components/Header";
import { Main } from "./components/quiz/Main";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="font-serif">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
