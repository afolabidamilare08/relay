import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import LandingPage from './pages/landingPage';
import DappIndex from './dapp/dapp.index';
import SetuptradeDapp from './dapp/dapp.setuptrade';
import OtcDapp from './dapp/dapp.otc';
import StakingPage from './dapp/dapp.stakings';
import { useState } from 'react';

function App() {

  const [ openSideNav, setopenSideNav ] = useState(false)

  return (
    <div className='mainApp' >

      <Routes>
        <Route path='/' element={ <LandingPage/> } />

        <Route path='/staking' element={ <DappIndex
          component={<StakingPage/>}
        /> } />

        <Route path='/trades' element={ <DappIndex
          component={ <OtcDapp/> }
        /> } />

        <Route path='/setuptrade' element={<DappIndex
          component={ <SetuptradeDapp/> }
        />} />

      </Routes>

    </div>
  );
}

export default App;
