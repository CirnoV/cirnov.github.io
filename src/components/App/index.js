import React from 'react';
// import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
// import Content from '../Content/Content';

const muiTheme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div>
        TEST!!!
      </div>
    </MuiThemeProvider>
  );
}

export default App;
