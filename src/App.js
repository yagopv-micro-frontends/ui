import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/button';
import { theme } from './lib/theme';
import GlobalStyle from './lib/global-style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button>Hello</Button>
    </ThemeProvider>
  );
}

export default App;
