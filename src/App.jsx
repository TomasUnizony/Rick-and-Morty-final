import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import SearchBar from './components/searchBar/SearchBar';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
