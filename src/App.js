import './App.css';
import Navbar from './components/Navbar';
import MintNow from './components/MintNow';
import Home from './components/Home';
import Wanted from './components/Wanted';
import Meet from './components/Meet';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <MintNow />
      <Wanted />
      <Meet />
    </div>
  );
}

export default App;
