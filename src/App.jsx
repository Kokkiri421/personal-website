import React from 'react';
// import { useTranslation } from 'react-i18next';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Background from './components/common/Background';
import MainPage from './components/pages/MainPage';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100%;
    height: 100%;
  }
`;

function App() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <>
      <GlobalStyle />
      <Background>
        <Router>
          <div>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/">Home</Link>
            <Routes>
              <Route path="/about" element={<div>skills</div>} />
              <Route path="/skills" element={<div>skills</div>} />
              <Route path="/" element={<MainPage />} />
            </Routes>
          </div>
        </Router>
      </Background>
    </>
  );
}

export default App;
