import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
