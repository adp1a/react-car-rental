import './App.css';
import Home from './components/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={Search} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;