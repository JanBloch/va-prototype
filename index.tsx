import Box from '@mui/material/Box/Box';
import React from 'react';
import { render } from 'react-dom';
import Question from './components/question';
import Grid from '@mui/material/Grid/Grid';
import './style.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box>
          <Question question="Wie viel sind sie bereit für ein Auto zu zahlen?" />
        </Box>
      </Grid>
    </Grid>
  );
}

render(<App />, document.getElementById('root'));
