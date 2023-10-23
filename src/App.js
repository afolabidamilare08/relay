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
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'

const projectId = 'a6b30bc12f5a5db7c09d0b165d354ca9'

// 2. Set chains
const chains = [42161]

// 3. Create modal
const metadata = {
  name: 'Relay',
  description: 'Innovative DeFi tool for secure OTC trading experience',
  url: 'https://relay-three.vercel.app',
  // url: 'http://localhost:3000',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains,
  projectId
})

function App() {

  const [ openSideNav, setopenSideNav ] = useState(false);

  const { open } = useWeb3Modal();

  const { address, chainId, isConnected  } = useWeb3ModalAccount();

  var userWalletAddress ;

  if ( address ) {
      var addressLength = address.length - 1
      userWalletAddress = `${address[0]}${address[1]}${address[2]}${address[3]}${address[4]}${address[5]}...${address[addressLength-3]}${address[addressLength-2]}${address[addressLength-1]}${address[addressLength]}`
  }else{
    userWalletAddress = null
  }

  return (
      <div className='mainApp' >
        <AppContext.Provider
          value={{
            sideNav: openSideNav,
            UpdatesideNav: () => setopenSideNav(!openSideNav),
            enableWeb3: () => open(),
            isWeb3Enabled: isConnected,
            user_account: address,
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
