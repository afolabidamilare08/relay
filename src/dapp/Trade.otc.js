import EthImg from '../assets/images/eth.png';
import BnbImg from '../assets/images/bnb.png';
import ArmImg from '../assets/images/arm.png';
import {BsChevronDown, BsFunnel, BsIncognito} from 'react-icons/bs';
import ArrowUp from '../assets/images/Arrow_Up_Icon.png';
import {Popover, PopoverTrigger, PopoverContent, Switch} from "@nextui-org/react";
import { Link, useParams } from 'react-router-dom';
import { TradeDetail } from '../components/trade_component';
import {IoMdMenu} from 'react-icons/io'
import {BackDrop, ErrorModal} from '../components/backDropComponent';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Appcontext';
import { ethers } from 'ethers';
import { ERC20ABI, abi2 } from '../constants/abi';
import {Spinner} from "@nextui-org/react";
import TransactionImg from '../assets/images/transaction.png';



const TradeOtc = ({closeHeader}) => {

    const [ openModal, setopenModal ] = useState(false)
    const { enableWeb3, displayAccount, user_account, TradeFactorycontractAddress, walletProvider, signer,  UpdatesideNav } = useContext(AppContext)

    const [ Trade, setTrade ] = useState(null)

    const [ LoadingTransactions, setLoadingTransactions ] = useState(false)
    const [ Erorr, setErorr ] = useState(null)
    const [ successMsg, setsuccessMsg ] = useState(false)


    const { tradeId } = useParams()

    const GetTrade = async () => {

        setLoadingTransactions(true)

        var TradeID = parseInt(tradeId)

        try{

            console.log(signer)

            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
            const response = await contract.getTrade(TradeID)

            console.log(response)

            if ( response.length > 1 ) {
                setTrade({
                    receivingToken: response[1][0],
                    givingToken: response[1][1],
                })
                setLoadingTransactions(false)
            }

        }
        catch(error){
            console.log(error)
            setLoadingTransactions(false)
            setErorr('Could not get transactions')
        }

    }

    useEffect( () => {

            // console.log(tradeId)
            // console.log(user_account)

        if ( tradeId && signer ) {
            GetTrade(tradeId)
        }

    }, [ tradeId, signer ] )


    const WithdrawalHandler = async (tradeID) => {

        try{

            var id = parseInt(tradeId)

            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
            const response = await contract.withdraw(id)

            if ( response ) {
                console.log(response)
                setsuccessMsg(true)
            }

        }
        catch(error){
            console.log(error)
            setopenModal(true)
        }
        
    }

    const acceptHandler = async (tradeID) => {

        try{

            var id = parseInt(tradeId)

            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
            const response = await contract.execute(id)
            
            console.log("")

            if( response ){

                const contrac2t = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
                const response2 = await contrac2t.swap(id)

                if ( response2 ) {
                    GetTrade(id)
                }

            }

            // setsuccessMsg(true)

        }
        catch(error){
            console.log(error)
            setopenModal(true)
        }
        
    }

    return (

        <div className="Otc_main" >

            <div className="Otc_main_header" >

                <h5>OTC TRADE</h5>

                <div className='Otc_main_header_spc' >
                    
                    <IoMdMenu className='Otc_main_header_spc_ic' style={{
                        cursor:"pointer"
                    }} onClick={closeHeader} />

                    <Link className='Otc_main_header_spc_txt' to={'/trades'} >RELAY</Link>

                </div>

                <div className="Otc_main_header_right" >

                    <div className="Otc_main_header_right_wallet otc_tophdvgt" >
                        

                        { displayAccount 
                        
                            ? 
                            
                            <div className="Otc_main_header_right_wallet_center" style={{
                                cursor:"pointer"
                            }} >{displayAccount}</div> 

                            :
                        
                            <div className="Otc_main_header_right_wallet_center" style={{
                                cursor:"pointer"
                            }} onClick={ () => enableWeb3() } >Connect Wallet</div> 
                            
                        }

                    </div> 

                </div>

            </div>

            <h6 className='Otc_main_txt' >Trade</h6>

            <div className='Otc_main_body' style={{
                minHeight: !Trade ? "80vh" : ''
            }} >


                { !Trade ?
                
                    LoadingTransactions ?
                    
                        <div style={{
                            height:'40vh',
                            width:"100%",
                            display:'flex',
                            justifyContent:'center',
                            alignItems:"center"
                        }} ><Spinner size='md' color='default' style={{
                            margin:"0 auto"
                        }} /></div>
                    
                    :

                        <div style={{
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
                
                :  
                
                    <TradeDetail 
                        givingToken={Trade.givingToken}
                        receivingToken={Trade.receivingToken}
                        trade={Trade}
                        withdrawalFunction={ () => WithdrawalHandler(Trade.tradeId) }
                        // cancelFunction={}
                        acceptFunction={ () => acceptHandler(Trade.tradeId) }
                    />
             
             }

            </div>

            { openModal ? 
            
            <ErrorModal closeModal={ () => setopenModal(false) } />

            : <></> }

        </div>

    );

}

export default TradeOtc;