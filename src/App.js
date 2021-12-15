// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;


// create own file (Navbar, Header ..) then recall them in div. 
// recall css from .css file to .js file - 
// recall .js file from .js file to app.js