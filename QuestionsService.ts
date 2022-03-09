import { AnswerType, QuestionProps } from './components/question';

export interface QuestionType extends QuestionProps {
  answer?: number;
}
class QuestionsService {
  getQuestions(): QuestionType[] {
    return [
      {
        question: 'Wie viel sind Sie bereit, für ein Auto zu zahlen?',
        answerType: AnswerType.RADIO,
        answerOptions: [
          "15'000",
          "20'000",
          "30'000",
          "50'000",
          "100'000",
          ">100'000",
        ],
      },
    ];
  }
}
export default QuestionsService;
