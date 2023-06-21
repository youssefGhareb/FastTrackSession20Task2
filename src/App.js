import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { AppHeader } from './components/AppHeader/AppHeader';
import { JobsListing } from './components/JobsListing/JobsListing';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`${darkMode ? "app-body-dark" : "app-body"}`}>
      <AppHeader />
      <JobsListing />
    </div>
  );
}

export default App;
