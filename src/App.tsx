import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Route from './Routes';
import { LightTheme } from './shared/themes';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
