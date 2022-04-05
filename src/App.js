import { Provider, useDispatch, useSelector, useStore } from "react-redux";
import CareerTestContainer from "./components/CareerTestContainer/CareerTestContainer";
import StaticContentContainer from "./components/StaticContentContainer/StaticContentContainer";
import { useEffect } from "react";
import { setActiveUser } from "./slices/activeUserSlice";
import {
  setQuestionList,
  setPreviouslyCommittedStatus,
} from "./slices/questionsSlice";
import store from "./store";
import axios from "axios";

const App = (user) => {
  const dispatch = useDispatch();

  const onLoadApiCalls = async (user) => {
    const questionsRes = await axios.get(
      "https://fhc-api.onrender.com/questions",
      {
        params: { user: user.user },
      }
    );
    dispatch(setQuestionList(questionsRes.data.questions));

    await axios
      .get("https://fhc-api.onrender.com/submissions", {
        params: { user: user.user },
      })
      .then((res) => {
        dispatch(setPreviouslyCommittedStatus(true));
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(setPreviouslyCommittedStatus(false));
      });
  };

  useEffect(() => {
    dispatch(setActiveUser(user));
    onLoadApiCalls(user);
  });

  return (
    <Provider store={store}>
      <StaticContentContainer />
      <CareerTestContainer />
    </Provider>
  );
};

export default App;
