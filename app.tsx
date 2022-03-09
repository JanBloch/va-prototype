import Question, { AnswerType } from './components/question';
import QuestionsService, { QuestionType } from './QuestionsService';
import React, { useEffect, useState } from 'react';

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
  return (
    <Question
      question="Wie viel sind sie bereit für ein Auto zu zahlen?"
      answerOptions={options}
      answerType={AnswerType.RADIO}
    />
  );
}
