import Question, { AnswerType } from './components/question';
import QuestionsService, { QuestionType } from './QuestionsService';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

interface AppProps {}

export function App({}: AppProps) {
  const [questions, setQuestions] = useState<QuestionType>();
  const [questionIndex, setQuestionIndex] = useState<number>(-1);

  useEffect(() => {
    setQuestions(new QuestionsService().getQuestions());
  }, []);

  useEffect(() => {
    setQuestionIndex(0);
  }, questions);

  const options = [
    "15'000",
    "20'000",
    "30'000",
    "50'000",
    "100'000",
    ">100'000",
  ];
  if (questionIndex != -1) {
    return (
      <Question
        question={questions[questionIndex].question}
        answerOptions={questions[questionIndex].answerOptions}
        answerType={questions[questionIndex].answerType}
      />
    );
  } else {
    return <CircularProgress />;
  }
}
