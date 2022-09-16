import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import CategoriesContainer from './components/CategoriesContainer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<CategoriesContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
