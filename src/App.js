import './App.css';
import Navbar from './components/Common/Navbar';
import MDashboard from './components/MCAUS/Motion/MDashboard';

function App() {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-grow">
      <MDashboard/>
    </div>
  </div>
  );
}

export default App;