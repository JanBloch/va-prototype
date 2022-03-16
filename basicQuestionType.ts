import { AnswerType } from './components/question';

export interface BasicQuestionType {
  question: string;
  answerType: AnswerType;
  answerOptions?: string[];
  allowMultipleSelection?: boolean;
}
