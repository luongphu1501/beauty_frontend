import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
