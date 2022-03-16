import Question, { AnswerType } from './components/question';
import QuestionsService, { QuestionType } from './QuestionsService';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

interface AppProps {}

export function App({}: AppProps) {
  const [questions, setQuestions] = useState<QuestionType[]>();
  const [questionIndex, setQuestionIndex] = useState<number>(-1);

  useEffect(() => {
    setQuestions(new QuestionsService().getQuestions());
  }, []);

  useEffect(() => {
    setQuestionIndex(0);
  }, questions);

  if (questionIndex != -1) {
    return (
      <Question
        setAnswer={(answer) => {
          const _questions = [...questions];
          _questions[questionIndex].answer = answer;
          setQuestions(_questions);
        }}
        allowMultipleSelection={questions[questionIndex].allowMultipleSelection}
        answer={questions[questionIndex].answer}
        question={questions[questionIndex].question}
        answerOptions={questions[questionIndex].answerOptions}
        answerType={questions[questionIndex].answerType}
        isFirst={questionIndex == 0}
        isLast={questionIndex == questions.length - 1}
        previousClicked={() => {
          if (questionIndex > 0) setQuestionIndex(questionIndex - 1);
        }}
        nextClicked={() => {
          if (questionIndex < questions.length - 1)
            setQuestionIndex(questionIndex + 1);
        }}
      />
    );
  } else {
    return <CircularProgress />;
  }
}
