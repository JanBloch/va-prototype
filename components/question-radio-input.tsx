import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
interface QuestionRadioInputProps {
  answer: any;
  setAnswer: Function;
  answerOptions: any[];
}
const QuestionRadioInput = ({
  answer,
  setAnswer,
  answerOptions,
}: QuestionRadioInputProps) => {
  const radioButtons = answerOptions.map((v) => {
    return <FormControlLabel value={v} control={<Radio />} label={v} />;
  });
  return (
    <RadioGroup
      name="radio-buttons-group"
      onChange={(e, value) => {
        setAnswer(value);
      }}
      value={answer ?? ''}
    >
      {...radioButtons}
    </RadioGroup>
  );
};
export default QuestionRadioInput;
