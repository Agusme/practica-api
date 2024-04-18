import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Characters from './components/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/characters/:id' element={<Characters></Characters>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
