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
import Logo from './assets/images/logo.png';
import { Spinner } from '@nextui-org/react';
import { ComingSoonModal, ErrorModal } from './components/backDropComponent';
import PresalePage from './pages/presalePage';

const projectId = 'a6b30bc12f5a5db7c09d0b165d354ca9'

// 2. Set chains
const chains = [42161]

// 3. Create modal
const metadata = {
  name: 'Relay',
  description: 'Innovative DeFi tool for secure OTC trading experience',
  url: 'https://www.relaydapp.xyz',
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

  const [ openComingSoon, setOpenComingSoon ] = useState(false)

  const { address, chainId, isConnected,   } = useWeb3ModalAccount();

  const { signer, walletProvider } = useWeb3ModalSigner()

  const TradeFactorycontractAddress  = '0x84b4017433611e6E66fa20C6A425b1B291dd87E3';

  const MainControllercontractAddress = '0xa138a388cbd9796e9C08A159c40b6896b8538115'

  const PresaleSmartContractAddress = '0xf9d301f3A4C3839A4D44cb8B9d98D238ca43F0a0'

  const RpcUrl = 'https://arbitrum-goerli.infura.io/v3/a9999d0d4a744c9b893ae34318117d25'

  const [ preLoader, setpreLoader ] = useState(true)


  var userWalletAddress ;

  if ( address ) {
      var addressLength = address.length - 1
      userWalletAddress = `${address[0]}${address[1]}${address[2]}${address[3]}${address[4]}${address[5]}...${address[addressLength-3]}${address[addressLength-2]}${address[addressLength-1]}${address[addressLength]}`
  }else{
    userWalletAddress = null
  }


  setTimeout(() => {
    setpreLoader(false)
  }, 4000);


  const clearCacheData = () => {
    localStorage.clear()
    window.location.reload()
};

  return (
      <div className='mainApp' >

        { openComingSoon ? <ComingSoonModal closeModal={ () => setOpenComingSoon(false) } /> : <></> }

        <AppContext.Provider
          value={{
            sideNav: openSideNav,
            UpdatesideNav: () => setopenSideNav(!openSideNav),
            enableWeb3: () => open(),
            closeWeb3:clearCacheData,
            isWeb3Enabled: isConnected,
            user_account: address,
            displayAccount: userWalletAddress,
            signer:signer,
            walletProvider:walletProvider,
            TradeFactorycontractAddress:TradeFactorycontractAddress,
            MainControllercontractAddress:MainControllercontractAddress,
            RpcUrl:RpcUrl,
            PresaleSmartContractAddress:PresaleSmartContractAddress,
            comingsoon:() => setOpenComingSoon(true)
          }}
        >

        { preLoader ?
        
        <div style={{
          width:'100%',
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          backgroundColor:"#0D1019"
        }} >

            <img src={Logo} alt='' style={{
              width:"4rem",
              display:"block",
            }} />

            <Spinner size='lg' color='default' style={{
              marginTop:"2rem"
            }} />

        </div>
      
      :
        <Routes>
          <Route path='/' element={ <LandingPage/> } />

          <Route path='/presale' element={ <PresalePage/> } />

          <Route path='/staking' element={ <DappIndex
            component={<StakingPage closeHeader={ () => setopenSideNav(!openSideNav) } />}
          /> } />

          <Route path='/trades' element={ <DappIndex
            component={ <OtcDapp closeHeader={ () => setopenSideNav(!openSideNav) } /> }
          /> } />

          <Route path='/trade_detail/:tradeId' element={ <DappIndex
            component={ <TradeOtc closeHeader={ () => setopenSideNav(!openSideNav) } /> }
          /> } />

          <Route path='/setuptrade' element={<DappIndex
            component={ <SetuptradeDapp closeHeader={ () => setopenSideNav(!openSideNav) } /> }
          />} />


      </Routes>


      
      }

        </AppContext.Provider>
      </div>
  );
}

export default App;
