import EthImg from '../assets/images/eth.png';
import BnbImg from '../assets/images/bnb.png';
import ArmImg from '../assets/images/arm.png';
import {BsChevronDown, BsFunnel, BsIncognito} from 'react-icons/bs';
import ArrowUp from '../assets/images/Arrow_Up_Icon.png';
import {Popover, PopoverTrigger, PopoverContent, Switch} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import {TradeComponent} from '../components/trade_component';
import {IoMdMenu} from 'react-icons/io'
import {BackDrop, SuccessModal} from '../components/backDropComponent';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Appcontext';
import { ethers } from 'ethers';
import { abi2 } from '../constants/abi';
import {Spinner} from "@nextui-org/react";
import TransactionImg from '../assets/images/transaction.png';



const OtcDapp = ({closeHeader}) => {

    const [ openModal, setopenModal ] = useState(false)
    const { enableWeb3, displayAccount, user_account, TradeFactorycontractAddress, walletProvider, signer } = useContext(AppContext)

    const [ UserPublicTrades, setUserPublicTrades ] = useState(null)
    const [ UserPrivateTrades, setUserPrivateTrades ] = useState(null)
    const [ LoadingTransactions, setLoadingTransactions ] = useState(false)
    const [ Erorr, setErorr ] = useState(null)
    const [ showPrivate, setshowPrivate ] = useState(false)

    const [ pagStartNumber, setpagStartNumber ] = useState(0)
    const [ pagStopNumber, setpagStopNumber ] = useState(5)
    const [ initialTxlist, setinitialTxlist ] = useState(null)
    const [ FilteredResult, setFilteredResult ] = useState(null)

    const [ ListOfasset, setListOfasset ] = useState([]);

    const [ successMsg, setsuccessMsg ] = useState(false)

    const [ Filters, setFilters ] = useState({
        status:"All Trades",

    })


    const GetUserTransactions = async () => {

        setLoadingTransactions(true)

        try{

            var PublicTrades = []
            var PrivateTrades = []

            if ( !initialTxlist ) {
                const response = await fetch(`https://api-goerli.arbiscan.io/api?module=account&action=txlist&address=${user_account}&startblock=0&endblock=99999999&page=1&offset=990&sort=asc&apikey=57M724ZAHNA23XSWNF7RTRP4AJRT17NB28`)

                var json = await response.json()

                if ( json.status === 0 ) {
                    alert('Please Reconnect your wallet')
                    setLoadingTransactions(false)
                    return
                }

                setinitialTxlist(json.result)
            }

            if ( initialTxlist ) {
                json = {
                    result: initialTxlist
                }
            }

            for (let f = pagStartNumber; f < pagStopNumber; f++) {
                var trx = json.result[f];
                


                if ( trx ) {
                    
                    if ( trx.to === '0x84b4017433611e6e66fa20c6a425b1b291dd87e3' ) {
                    
                        const ethersScanProvider = await walletProvider.getTransactionReceipt(trx.hash)
    
                        // console.log(ethersScanProvider)
    
                        if ( ethersScanProvider.logs[0].topics ) {
                            const hexToDecimal = hex => parseInt(hex, 16)
                            const dec1 = hexToDecimal(ethersScanProvider.logs[0].topics[1]);
                            // console.log(dec1)
                            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
                            const response = await contract.getTrade(dec1)
    
                            // console.log(response)
    
                            if ( response.length > 1 ) {
                                
                                if ( response[1][0].owner === '0x0000000000000000000000000000000000000000' ) {
                                    
                                    PublicTrades.push({
                                        receivingToken: response[1][0],
                                        givingToken: response[1][1],
                                        time:trx.timeStamp,
                                        tradeId:dec1,
                                        blockHash:trx.blockHash,
                                        hash:trx.hash
                                    })
    
                                }else{
                                    PrivateTrades.push({
                                        receivingToken: response[1][0],
                                        givingToken: response[1][1],
                                        time:trx.timeStamp,
                                        tradeId:dec1,
                                        blockHash:trx.blockHash,
                                        hash:trx.hash
                                    })
                                }
    
                            }
    
                        }
                    }else{
                        // setLoadingTransactions(false)
                    }

                }

            }

            if ( UserPrivateTrades ) {
                setUserPrivateTrades([
                    ...UserPrivateTrades,
                    ...PrivateTrades
                ])
                setUserPublicTrades([
                    ...UserPublicTrades,
                    ...PublicTrades
                ])
            }else{
                setUserPublicTrades(PublicTrades)
                setUserPrivateTrades(PrivateTrades)
            }

            
            
            var pagstart = pagStartNumber + 5
            var pagstop = pagStopNumber + 5

            setpagStartNumber(pagstart)
            setpagStopNumber(pagstop)

            setLoadingTransactions(false)

        }
        catch(error){
            console.log(error)
            setLoadingTransactions(false)
            setErorr('Could not get transactions')
        }

    }


    const WithdrawalHandler = async (tradeID) => {

        try{

            var id = parseInt(tradeID)

            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
            const response = await contract.withdraw({
                withdraw:0,
                TradeId: id
            })

            setsuccessMsg(true)

        }
        catch(error){
            console.log(error)
        }
        
    }

    // const CancelHandler = async (tradeID) => {

    //     try{

    //         var id = parseInt(tradeID)

    //         const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
    //         const response = await contract.withdraw({
    //             withdraw:0,
    //             TradeId: id
    //         })

    //         setsuccessMsg(true)

    //     }
    //     catch(error){
    //         console.log(error)
    //     }
        
    // }

    useEffect( () => {

        // console.log(user_account)

        if ( user_account ) {
            GetUserTransactions()
        }

    }, [ user_account ] )


    const content = (
        <PopoverContent  >
          <div className="Otc_main_modal" >
            {/* <Link to={"#"} className='Otc_main_modal_link' >
                <img src={EthImg} alt='' />
                <h6>Ethereum</h6>
            </Link>
            <Link to={"#"} className='Otc_main_modal_link' >
                <img src={BnbImg} alt='' />
                <h6>BSC</h6>
            </Link> */}
            <Link to={"#"} className='Otc_main_modal_link' >
                <img src={ArmImg} alt='' />
                <h6>Arbitrum</h6>
            </Link>
          </div>
        </PopoverContent>
      );


      const content4Trades = (
        <PopoverContent  >
          <div className="Otc_main_modal" >
            <Link to={"#"} className='Otc_main_modal_link' >
                <h6>All Trades</h6>
            </Link>
            <Link to={"#"} className='Otc_main_modal_link' >
                <h6>Pending</h6>
            </Link>
            <Link to={"#"} className='Otc_main_modal_link' >
                <h6>Completed</h6>
            </Link>
          </div>
        </PopoverContent>
      );


    return (

        <div className="Otc_main" >

            <div className="Otc_main_header" >

                <h5>OTC TRADES</h5>

                <div className='Otc_main_header_spc' >
                    
                    <IoMdMenu className='Otc_main_header_spc_ic' style={{
                        cursor:"pointer"
                    }} onClick={closeHeader} />

                    <Link className='Otc_main_header_spc_txt' to={'/trades'} >RELAY</Link>

                </div>

                <div className="Otc_main_header_right" >

                    <div className='Otc_main_header_right_live' >
                        <img src={ArrowUp} alt='' />
                        <h6>24h Volume: ~0$ </h6>
                    </div>
                    <Popover key={'bottom-end'} placement={'bottom'} color="primary" >
                        <PopoverTrigger>
                    <div className="Otc_main_header_right_wallet" >
                        
                        <button className='Otc_main_header_right_wallet_btn otc_toph' >
                            <img src={ArmImg} alt='' />
                            <h4>Arbitrum</h4>
                            <BsChevronDown className='Otc_main_header_right_wallet_btn_ic' />
                        </button>
                        
                    </div>
                    </PopoverTrigger>
                        {content}
                        </Popover>

                    <div className="Otc_main_header_right_wallet otc_tophdvgt" >
                        

                        { displayAccount 
                        
                            ? 
                            
                            <div className="Otc_main_header_right_wallet_center" >{displayAccount}</div> 

                            :
                        
                            <div className="Otc_main_header_right_wallet_center" style={{
                                cursor:"pointer"
                            }} onClick={ () => enableWeb3() } >Connect Wallet</div> 
                            
                        }

                    </div> 

                </div>

            </div>

            <h6 className='Otc_main_txt' >Trades</h6>

            <div className='Otc_main_options' >

                <div className='Otc_main_options_left' >
                    <Popover key={'bottom-end'} placement={'bottom'} color="primary" >
                        <PopoverTrigger>
                            <div className='Otc_main_options_cov' >
                                <button className='Otc_main_options_cov_btn' >
                                    All Trades
                                    <BsChevronDown className='Otc_main_options_cov_btn_ic' />
                                </button>
                            </div>
                        </PopoverTrigger>
                        {content4Trades}
                    </Popover>

                    {/* <div className='Otc_main_options_cov' >
                        <button className='Otc_main_options_cov_btn' onClick={ () => setopenModal(true) } >
                            <BsFunnel className='Otc_main_options_cov_btn_icbefore' />
                            Filters
                        </button>
                    </div> */}
                </div>

                <div className='Otc_main_options_right' >
                    <h6>Show private trades</h6> 
                    <div className='setupTrade_title_right_switch' style={{
                        display:"flex",
                        justifyContent: showPrivate ? "flex-end" : 'flex-start',
                        transition:"all .4s"
                    }} >
                        <div className='setupTrade_title_right_switch_div' style={{ transition:"all .4s" }} onClick={ () => setshowPrivate(!showPrivate) } >
                            <BsIncognito color="#373739" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='Otc_main_body' style={{
                // minHeight:"80vh"
            }} >

                { !showPrivate ?
                
                    UserPublicTrades ? 

                    
                        UserPublicTrades.length > 0 ?

                            UserPublicTrades.map( (trade,index) => {

                                // if(trade.receivingToken.tokenAddress === '0x810756d3aE32b8c0446e5E107c4e797022940258'){
                                //     return <></>
                                // }
                                    return (
                                        <TradeComponent 
                                            key={index}
                                            trade={trade}
                                            givingToken={trade.givingToken}
                                            withdrawalFunction={ () => WithdrawalHandler(trade.tradeId) }
                                            receivingToken={trade.receivingToken}
                                            // cancelFunction={}
                                        />
                                    );
                                
                            } )
                        
                        : <div onClick={ 
                        () => console.log(UserPublicTrades)

                         } >clclcl</div>
                    
                    : LoadingTransactions ?
                    
                         <div style={{
                            height:'40vh',
                            width:"100%",
                            display:'flex',
                            justifyContent:'center',
                            alignItems:"center"
                         }} ><Spinner size='md' color='default' style={{
                            margin:"0 auto"
                         }} /></div>

                    : <></>
                
                : UserPrivateTrades ? 
                
                    UserPrivateTrades.length > 0 ?
                    
                        UserPrivateTrades.map( (trade,index) => {

                            // if(trade.receivingToken.tokenAddress === '0x810756d3aE32b8c0446e5E107c4e797022940258'){
                            //     return <></>
                            // }

                            return (
                                <TradeComponent 
                                    key={index} 
                                    trade={trade}
                                    withdrawalFunction={ () => WithdrawalHandler(trade.tradeId) }
                                    givingToken={trade.givingToken}
                                    receivingToken={trade.receivingToken}
                                />
                            );
                        } )

                    : <div style={{
                        width:"100%"
                    }} >
                        
                        <img src={TransactionImg} alt='' style={{
                            width:"6rem",
                            height:"6rem",
                            objectFit:"contain",
                            display:"block",
                            margin:"3rem auto"
                        }} />

                        <h5 style={{
                            color:"white",
                            textAlign:"center"
                        }} >No Transaction Yet</h5>

                    </div>

                : LoadingTransactions ?
                    
                <div style={{
                    height:'40vh',
                    display:'flex',
                    width:"100%",
                    justifyContent:'center',
                    alignItems:"center"
                 }} ><Spinner size='md' color='default' style={{
                    margin:"0 auto"
                 }} /></div>

           : <></> }

            </div>
            
            { initialTxlist && UserPrivateTrades ?
        

                initialTxlist.length > pagStartNumber  ? 
                
                <button className='trade_div_btn' style={{
                    width:"fit-content",
                    paddingLeft:"1.1rem",
                    paddingRight:"1.1rem",
                    display:"block",
                    margin:'2rem auto',
                    cursor:"pointer"
                }} onClick={ () => GetUserTransactions() } >
                    { LoadingTransactions ? <Spinner size='sm' color='default' /> : 'Load More' }
                </button>

                : <></>
            
            : <></> }

            { openModal ? 
            
            <BackDrop closeModal={ () => setopenModal(false) } />

            : <></> }

            { successMsg ?
            
                <SuccessModal closeModal={ () => setsuccessMsg(false) } />
            
            : <></> }

        </div>

    );

}

export default OtcDapp;