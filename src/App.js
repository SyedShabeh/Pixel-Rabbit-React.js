import './App.css';
import Navbar from './components/Navbar';
import MintNow from './components/MintNow';
import Home from './components/Home';
import Wanted from './components/Wanted';
import Meet from './components/Meet';
import Legend from './components/Legend';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <MintNow />
      <Wanted />
      <Meet />
      <Legend />
      <Footer />
    </div>
  );
}

export default App;
