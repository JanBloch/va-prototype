import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import React, { useEffect, useState } from 'react';

interface QuestionMultipleSelectProps {
  answerOptions: string[];
  setAnswer: (a: string | string[]) => void;
  answer: string | string[];
}
const QuestionMultipleSelect = ({
  answerOptions,
  setAnswer,
  answer,
}: QuestionMultipleSelectProps) => {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(answerOptions.length).fill(false)
  );
  if (answer && answer.length == answerOptions.length)
    setChecked(answerOptions.map((v, i) => !!answer[i]));
  useEffect(() => {
    setAnswer(answerOptions.filter((v, i) => checked[i]));
  }, [checked]);
  const options = answerOptions.map((v, i) => (
    <FormControlLabel
      control={
        <Checkbox
          key={v}
          onChange={(event, checkboxChecked) => {
            const _checked = [...checked];
            _checked[i] = checkboxChecked;
            setChecked(_checked);
          }}
        />
      }
      label={v}
    />
  ));
  return <FormGroup>{...options}</FormGroup>;
};
export default QuestionMultipleSelect;
