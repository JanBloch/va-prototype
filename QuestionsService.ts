import { BasicQuestionType } from './basicQuestionType';
import { AnswerType } from './components/question';

export interface QuestionType extends BasicQuestionType {
  answer?: number | string;
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
        allowMultipleSelection: false,
      },
      {
        question:
          'Wählen Sie alle Aktivitäten aus, welche Sie regelmässig mit einem Auto tätigen oder planen mit einem Auto zu tätigen.',
        answerType: AnswerType.RADIO,
        answerOptions: [
          'Arbeitsweg',
          'Inlandreisen',
          'Auslandreisen',
          'Warentransport',
          'Sonstige Fortbewegung',
          'Vergnügungsfahrt',
        ],
        allowMultipleSelection: true,
      },
      {
        question: 'Wie hoch sollte das Kofferraumvolumen sein?',
        answerType: AnswerType.RADIO,
        answerOptions: ['200l', '500l', '1000l', '1500l', '>2000l'],
      },
      {
        question: 'Wie viele Sitzplätze sollte ihr Auto mindestens haben?',
        answerType: AnswerType.NUMBER,
      },
    ];
  }
}
export default QuestionsService;
