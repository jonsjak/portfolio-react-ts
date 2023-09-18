import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { ScrollArrow } from './components/ScrollArrow';

function App() {
  return (
    <div className="App">
      <ScrollArrow />
      <Header />
      <Body />
    </div>
  );
}

export default App;
