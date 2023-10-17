import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import LandingPage from './pages/landingPage';
import DappIndex from './dapp/dapp.index';

function App() {
  return (
    <div className='mainApp' >

      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/dapp' element={ <DappIndex/> } />
      </Routes>

    </div>
  );
}

export default App;
