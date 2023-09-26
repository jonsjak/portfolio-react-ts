import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import ScrollArrowFunction from './components/ScrollArrowFunction';

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollArrowFunction />
      <Header />
      <Body />
    </div>
  );
}

export default App;
