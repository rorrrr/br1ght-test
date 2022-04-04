import { Provider } from "react-redux";
import store from "./store";
import CareerTestContainer from "./components/CareerTestContainer/CareerTestContainer";
import StaticContentContainer from "./components/StaticContentContainer/StaticContentContainer";

const App = (user) => {
  return (
    <Provider store={store}>
      {console.log("store", store)}
      <StaticContentContainer />
      <CareerTestContainer />
    </Provider>
  );
};

export default App;
