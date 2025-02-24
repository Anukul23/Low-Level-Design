import logo from './logo.svg';
import './App.css';
import Countrydisplay from './components/Countrydisplay/Countrydisplay';
import Statedisplay from './components/Statedisplay/Statedisplay';
import Fullname from './components/Fullnamedisplay/Fullname';

function App() {
  return (
    <div className='App'>
      {/* <Countrydisplay/> */}
      {/* <Statedisplay/> */}
      <Fullname/>
    </div>
  );
}

export default App;
