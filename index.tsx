import React from 'react';
import { render } from 'react-dom';
import Grid from '@mui/material/Grid/Grid';
import Box from '@mui/material/Box/Box';

import './style.css';
import { App } from './app';

const AppContainer = () => {
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
          <App />
        </Box>
      </Grid>
    </Grid>
  );
};

render(<AppContainer />, document.getElementById('root'));
