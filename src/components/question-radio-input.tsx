import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
interface QuestionRadioInputProps {
  setAnswer: (a: string | string[]) => void;
  answer?: string | string[];
  answerOptions: string[];
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
      value={answer ?? ""}
    >
      {...radioButtons}
    </RadioGroup>
  );
};
export default QuestionRadioInput;
