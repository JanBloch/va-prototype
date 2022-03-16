import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { BasicQuestionType } from "../basicQuestionType";
import { QuestionType } from "../QuestionsService";
import QuestionRadioInput from "./question-radio-input";

export enum AnswerType {
  RADIO = 1,
  NUMBER = 2,
}
export interface QuestionProps extends BasicQuestionType {
  isFirst: boolean;
  isLast: boolean;
  previousClicked: Function;
  nextClicked: Function;
  setAnswer: (a: string | number) => void;
  answer?: string | number;
}
const Question = ({
  question,
  answerType,
  answer,
  answerOptions,
  isFirst,
  isLast,
  previousClicked,
  nextClicked,
  setAnswer,
  allowMultipleSelection,
}: QuestionProps) => {
  const inputComponent = (() => {
    if (answerType == AnswerType.RADIO && !allowMultipleSelection) {
      return (
        <QuestionRadioInput
          answer={answer}
          answerOptions={answerOptions}
          setAnswer={setAnswer}
        />
      );
    }
  })();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {question}
        </Typography>
        <FormControl>{inputComponent}</FormControl>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          disabled={isFirst}
          onClick={() => previousClicked()}
        >
          Zurück
        </Button>
        <Button
          size="small"
          disabled={isLast}
          onClick={() => nextClicked()}
          style={{ marginLeft: "auto" }}
        >
          Weiter
        </Button>
      </CardActions>
    </Card>
  );
};

export default Question;
