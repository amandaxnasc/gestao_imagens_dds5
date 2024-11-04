import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GestaoImagm from './views/GestaoImagem.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GestaoImagm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
