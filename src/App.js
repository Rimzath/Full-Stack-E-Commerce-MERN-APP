import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="text-red-600">
      <Outlet/>
    </div>
  );
}

export default App;
