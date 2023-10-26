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
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalSigner,  } from '@web3modal/ethers5/react'
import { abi } from './constants/abi';
import { ethers } from 'ethers';
import { formatEther } from '@ethersproject/units';
import { useEffect } from 'react';
import TradeOtc from './dapp/Trade.otc';

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

  const { open, close } = useWeb3Modal();

  const { address, chainId, isConnected,   } = useWeb3ModalAccount();

  const { signer, walletProvider } = useWeb3ModalSigner()

  const TradeFactorycontractAddress  = '0x84b4017433611e6E66fa20C6A425b1B291dd87E3';

  const MainControllercontractAddress = '0xa138a388cbd9796e9C08A159c40b6896b8538115'



  const decodeAddress = async () => {

    const decodedAddress = await ethers.utils.defaultAbiCoder.decode(['address'], '0x000000000000000000000000633872d6346f4c6d0f38e9d6a492ce96c6c9c38d')

    console.log(decodedAddress)

  }

  var userWalletAddress ;

  if ( address ) {
      var addressLength = address.length - 1
      userWalletAddress = `${address[0]}${address[1]}${address[2]}${address[3]}${address[4]}${address[5]}...${address[addressLength-3]}${address[addressLength-2]}${address[addressLength-1]}${address[addressLength]}`
  }else{
    userWalletAddress = null
  }


  const getTransactionLogs = async () => {

    try{

      const response = await fetch(`https://api.arbiscan.io/api?module=logs&action=getLogs&address=0x84b4017433611e6E66fa20C6A425b1B291dd87E3&page=1&offset=1000&apikey=57M724ZAHNA23XSWNF7RTRP4AJRT17NB28`)

      const json = await response.json();
 
      console.log(json)

    }
    catch (error) {
      console.log(error)
    }

  }


      // const clearCacheData = () => {
      //   caches.keys().then((names) => {
      //     names.forEach( (name) => {
      //       caches.delete(name)
      //     } )
      //   })
      // }

  return (
      <div className='mainApp' >
        <AppContext.Provider
          value={{
            sideNav: openSideNav,
            UpdatesideNav: () => setopenSideNav(!openSideNav),
            enableWeb3: () => open(),
            // closeWeb3: () => clearCacheData(),
            isWeb3Enabled: isConnected,
            user_account: address,
            displayAccount: userWalletAddress,
            signer:signer,
            walletProvider:walletProvider,
            TradeFactorycontractAddress:TradeFactorycontractAddress,
            MainControllercontractAddress:MainControllercontractAddress
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

          <Route path='/trade/:tradeId' element={ <DappIndex
            component={ <TradeOtc closeHeader={ () => setopenSideNav(!openSideNav) } /> }
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
