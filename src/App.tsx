import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import ScrollArrowFunction from './components/ScrollArrowFunction';

function App() {
  return (
    <div className="App">
      <ScrollArrowFunction />
      <Header />
      <Body />
    </div>
  );
}

export default App;
