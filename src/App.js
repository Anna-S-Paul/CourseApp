import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import ViewallCourse from './components/ViewallCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<AddCourse/>}/>
<Route path='/search' element={<SearchCourse/>}/>
<Route path='/viewall' element={<ViewallCourse/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
