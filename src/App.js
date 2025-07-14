import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './component/Add';
import Home from './component/Home';
import View from './component/View';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/a' element = {<Add />} />    
    <Route path='/v' element = {<View />} />    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
