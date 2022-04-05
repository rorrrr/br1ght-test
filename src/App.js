import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import CareerTestContainer from "./components/CareerTestContainer/CareerTestContainer";
import StaticContentContainer from "./components/StaticContentContainer/StaticContentContainer";
import { useEffect } from "react";
import { setActiveUser } from "./slices/activeUserSlice";
import store from "./store";

const App = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveUser(user));
  }, [dispatch, user]);

  return (
    <Provider store={store}>
      <StaticContentContainer />
      <CareerTestContainer />
    </Provider>
  );
};

export default App;
