import { Provider, useDispatch, useSelector } from "react-redux";
import CareerTestContainer from "./components/CareerTestContainer/CareerTestContainer";
import StaticContentContainer from "./components/StaticContentContainer/StaticContentContainer";
import { useEffect, useState } from "react";
import { setActiveUser } from "./slices/activeUserSlice";
import {
  setQuestionList,
  setPreviouslyCommittedStatus,
} from "./slices/questionsSlice";
import store from "./store";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const App = (user) => {
  const dispatch = useDispatch();
  const { activeQuestion } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(setPreviouslyCommittedStatus(false));
        setLoading(false);
      });
  };

  useEffect(() => {
    dispatch(setActiveUser(user));
    onLoadApiCalls(user);
  }, []);

  return (
    <Provider store={store}>
      <StaticContentContainer />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {activeQuestion.previouslyCommittedStatus ? (
            <div>Previously Committed</div>
          ) : (
            <CareerTestContainer />
          )}
        </div>
      )}
    </Provider>
  );
};

export default App;
