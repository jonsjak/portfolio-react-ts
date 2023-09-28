import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import ScrollArrowFunction from './components/ScrollArrowFunction';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const App: React.FC = () => {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
       isPropValid(prop) || prop === 'arrowflipped'
      }
    >
      <div className="App">
        <ScrollArrowFunction />
        <Header />
        <Body />
      </div>
    </StyleSheetManager>
    
  );
}

export default App;
