import logo from './logo.svg';
import './App.css';
import { Navbar } from './Frontend/component/Navbar';
import { AllRoutes } from './Frontend/routes/allRoutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
