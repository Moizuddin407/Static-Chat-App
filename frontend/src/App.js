import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-dom'
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <Header/>
      <Chat/>
    </div>
  );
}

export default App;
