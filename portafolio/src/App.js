import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Article } from './components/Article';
import { Header } from './components/Header';
import styles from './App.module.css';
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f6f6f6',
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.container_page}>
        <Header />
        <Article />
      </main>
    </ThemeProvider>
  );
}
