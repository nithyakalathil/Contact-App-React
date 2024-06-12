import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddContact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
