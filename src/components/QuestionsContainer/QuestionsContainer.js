import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increment } from "../../slices/questionsSlice";

const StyledContainer = styled.div`
  margin-top: 3em;
  height: 20em;
  width: 90%;
  margin: 3em auto auto auto;
  display: block;
`;

const StyledButton = styled.button`
  background-color: orange;
  color: white;
`;

const QuestionsContainer = () => {
  const { activeQuestion, activeUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [testStarted, setTestStarted] = useState(false);
  const [preSubmitAnswers, setPreSubmitAnswers] = useState([]);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const addAnswerToPreSubmitArray = (answer) => {
    const combinedAnswer = {
      answer: +answer,
      questionId: activeQuestion.questionList[activeQuestion.activeQuestion].id,
    };
    setPreSubmitAnswers([...preSubmitAnswers, combinedAnswer]);
  };

  const finalQuestionCheck = () => {
    return preSubmitAnswers.length >= activeQuestion.questionList.length - 1;
  };

  const completeTest = () => {
    addAnswerToPreSubmitArray(document.getElementById("customRange2").value);
    setReadyToSubmit(true);
  };

  const submitTest = async () => {
    var options = {
      method: "POST",
      url: "https://fhc-api.onrender.com/submissions",
      params: { user: activeUser.activeUser.user },
      headers: { "Content-Type": "application/json" },
      data: { answers: preSubmitAnswers },
    };

    await axios
      .request(options)
      .then((res) => {
        console.log("reached here?");
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // WIP
  // useEffect(() => {
  //   const node = document.getElementById("customRange2");

  //   console.log("node", node);
  //   if (node) {
  //     node.addEventListener("keyup", ({ key }) => {
  //       if (key === "Enter") {
  //         console.log("hit enter");
  //         addAnswerToPreSubmitArray();
  //       }
  //     });
  //   }
  // });

  return (
    <StyledContainer>
      {!testStarted ? (
        <StyledButton onClick={() => setTestStarted(true)}>
          Start the Test
        </StyledButton>
      ) : (
        <div>
          {!submitted && (
            <div>
              <p>
                Questions: {activeQuestion.activeQuestion + 1}/
                {activeQuestion.questionList.length} In a job I would be
                motivated by
              </p>
              <p>
                {
                  activeQuestion.questionList[activeQuestion.activeQuestion]
                    .text
                }
              </p>
              <input
                autoFocus
                type='range'
                defaultValue='4'
                className='form-range'
                min='1'
                max='8'
                id='customRange2'
              />
              <p>Use left and right to select, enter to confirm (WIP)</p>
              {!finalQuestionCheck() ? (
                <button
                  onClick={() => {
                    addAnswerToPreSubmitArray(
                      document.getElementById("customRange2").value
                    );
                    dispatch(increment());
                    document.getElementById("customRange2").focus();
                  }}
                >
                  Next
                </button>
              ) : readyToSubmit ? (
                <button
                  onClick={() => {
                    submitTest();
                  }}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => {
                    completeTest();
                  }}
                >
                  Next
                </button>
              )}
            </div>
          )}
          {submitted && <div>successful submission</div>}
        </div>
      )}
    </StyledContainer>
  );
};

export default QuestionsContainer;
