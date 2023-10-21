import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import LandingPage from './pages/landingPage';
import DappIndex from './dapp/dapp.index';
import SetuptradeDapp from './dapp/dapp.setuptrade';
import OtcDapp from './dapp/dapp.otc';
import StakingPage from './dapp/dapp.stakings';
import { useState } from 'react';
import AppContext from './context/Appcontext';

function App() {

  const [ openSideNav, setopenSideNav ] = useState(false)

  return (
    <div className='mainApp' >
      <AppContext.Provider
        value={{
          sideNav: openSideNav,
          UpdatesideNav: () => setopenSideNav(!openSideNav)
        }}
      >

      <Routes>
        <Route path='/' element={ <LandingPage/> } />

        <Route path='/staking' element={ <DappIndex
          component={<StakingPage closeHeader={ () => setopenSideNav(!openSideNav) } />}
        /> } />

        <Route path='/trades' element={ <DappIndex
          component={ <OtcDapp closeHeader={ () => setopenSideNav(!openSideNav) } /> }
        /> } />

        <Route path='/setuptrade' element={<DappIndex
          component={ <SetuptradeDapp closeHeader={ () => setopenSideNav(!openSideNav) } /> }
        />} />

      </Routes>
      </AppContext.Provider>

    </div>
  );
}

export default App;
