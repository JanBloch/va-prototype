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

export enum AnswerType {
  RADIO = 1,
  NUMBER = 2,
}
export interface QuestionProps {
  question: string;
  answerType: AnswerType;
  answerOptions?: string[];
}
const Question = ({ question, answerType, answerOptions }: QuestionProps) => {
  const radioButtons = answerOptions.map((v) => {
    return <FormControlLabel value={v} control={<Radio />} label={v} />;
  });
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {question}
        </Typography>
        <FormControl>
          <RadioGroup name="radio-buttons-group">{...radioButtons}</RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small">Zurück</Button>
        <Button size="small" style={{ marginLeft: 'auto' }}>
          Weiter
        </Button>
      </CardActions>
    </Card>
  );
};

export default Question;
