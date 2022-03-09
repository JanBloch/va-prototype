import { BasicQuestionType } from './basicQuestionType';
import { AnswerType } from './components/question';

export interface QuestionType extends BasicQuestionType {
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
          'Keine Antwort',
        ],
      },
      {
        question: 'Welche Bezeichnung beschreibt Ihren Wohnort am genauesten?',
        answerType: AnswerType.RADIO,
        answerOptions: [
          'Grossstadt',
          'Stadt',
          'Vorort',
          'Dorf',
          'Bergdorf',
          'Keine Antwort',
        ],
      },
    ];
  }
}
export default QuestionsService;
