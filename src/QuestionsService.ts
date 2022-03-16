import { BasicQuestionType } from "./basicQuestionType";
import { AnswerType } from "./components/question";

export interface QuestionType extends BasicQuestionType {
  answer?: string[] | string;
}
class QuestionsService {
  getQuestions(): QuestionType[] {
    return [
      {
        question: "Wie viel sind Sie bereit, für ein Auto zu zahlen?",
        answerType: AnswerType.RADIO,
        answerOptions: [
          "15'000",
          "20'000",
          "30'000",
          "50'000",
          "100'000",
          ">100'000",
          "Keine Antwort",
        ],
      },
      {
        question: "Welche Bezeichnung beschreibt Ihren Wohnort am genauesten?",
        answerType: AnswerType.RADIO,
        answerOptions: [
          "Grossstadt",
          "Stadt",
          "Vorort",
          "Dorf",
          "Bergdorf",
          "Keine Antwort",
        ],
      },
      {
        question:
          "Für welche der folgenden Aktivitäten werden Sie ihr Auto am meisten verwenden?",
        answerType: AnswerType.RADIO,
        answerOptions: [
          "Arbeitsweg",
          "Inlandreisen",
          "Auslandreisen",
          "Warentransport",
          "Sonstige Fortbewegung",
          "Vergnügungsfahrt",
        ],
      },
      {
        question: "Wie hoch sollte das Kofferraumvolumen sein?",
        answerType: AnswerType.RADIO,
        answerOptions: ["200l", "500l", "1000l", "1500l", ">2000l"],
      },
      {
        question: "Wie viele Sitzplätze benötigen Sie?",
        answerType: AnswerType.RADIO,
        answerOptions: [
          "Nicht mehr als zwei",
          "Nicht mehr als vier",
          "Nicht mehr als sechs",
          "Mehr als sechs",
        ],
      },
    ];
  }
}
export default QuestionsService;
