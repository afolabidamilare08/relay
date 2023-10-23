import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import LandingPage from './pages/landingPage';
import DappIndex from './dapp/dapp.index';
import SetuptradeDapp from './dapp/dapp.setuptrade';
import OtcDapp from './dapp/dapp.otc';
import StakingPage from './dapp/dapp.stakings';
import { useState } from 'react';
import AppContext from './context/Appcontext';
import { useMoralis, useWeb3Contract } from 'react-moralis';

function App() {

  const [ openSideNav, setopenSideNav ] = useState(false)

  const { enableWeb3, isWeb3Enabled, account } = useMoralis()

  var userWalletAddress ;

  if ( account ) {
      var addressLength = account.length - 1
      userWalletAddress = `${account[0]}${account[1]}${account[2]}${account[3]}${account[4]}${account[5]}...${account[addressLength-3]}${account[addressLength-2]}${account[addressLength-1]}${account[addressLength]}`
  }else{
    userWalletAddress = null
  }

  return (
      <div className='mainApp' >
        <AppContext.Provider
          value={{
            sideNav: openSideNav,
            UpdatesideNav: () => setopenSideNav(!openSideNav),
            enableWeb3: () => enableWeb3(),
            isWeb3Enabled: isWeb3Enabled,
            user_account: account,
            displayAccount: userWalletAddress
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
