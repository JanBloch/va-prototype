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

interface QuestionProps {
  question: string;
}
const Question = ({ question }: QuestionProps) => {
  const options = [
    "15'000",
    "20'000",
    "30'000",
    "50'000",
    "100'000",
    ">100'000",
  ];
  const radioButtons = options.map((v) => {
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
