import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import { BasicQuestionType } from '../basicQuestionType';

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
}: QuestionProps) => {
  const radioButtons = answerOptions.map((v) => {
    return <FormControlLabel value={v} control={<Radio />} label={v} />;
  });
  console.log(answer);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {question}
        </Typography>
        <FormControl>
          <RadioGroup
            name="radio-buttons-group"
            onChange={(e, value) => {
              setAnswer(value);
            }}
            value={answer ?? ''}
          >
            {...radioButtons}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={isFirst} onClick={previousClicked}>
          Zurück
        </Button>
        <Button
          size="small"
          disabled={isLast}
          onClick={nextClicked}
          style={{ marginLeft: 'auto' }}
        >
          Weiter
        </Button>
      </CardActions>
    </Card>
  );
};

export default Question;
