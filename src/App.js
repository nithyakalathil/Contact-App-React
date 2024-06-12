import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';
import View from './components/View';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddContact/>}/>
      <Route path='/s' element={<Search/>}/>
      
      <Route path='/v' element={<View/>}/>
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
