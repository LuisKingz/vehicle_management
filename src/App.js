import { Login } from './routes/Login';
import "./styles/style.css";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
        </div>
        <div className='col-10-lg'>
          <Login />
        </div>
        <div className='col-1'>
        </div>
      </div>
    </div>
  );
}

export default App;
