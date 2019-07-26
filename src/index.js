import './styles.css';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import webApp from './reducers';
import App from './components/App';
import 'normalize.css';
import {unregister} from './registerServiceWorker';

const store = createStore(
  webApp,
  composeWithDevTools(),
);
const muiTheme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

unregister();
