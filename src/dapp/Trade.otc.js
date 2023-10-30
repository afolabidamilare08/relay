import EthImg from '../assets/images/eth.png';
import BnbImg from '../assets/images/bnb.png';
import ArmImg from '../assets/images/arm.png';
import {BsChevronDown, BsFunnel, BsIncognito} from 'react-icons/bs';
import ArrowUp from '../assets/images/Arrow_Up_Icon.png';
import {Popover, PopoverTrigger, PopoverContent, Switch} from "@nextui-org/react";
import { Link, useParams } from 'react-router-dom';
import { TradeDetail } from '../components/trade_component';
import {IoMdMenu} from 'react-icons/io'
import {BackDrop, ErrorModal, SuccessModal} from '../components/backDropComponent';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Appcontext';
import { ethers } from 'ethers';
import { ERC20ABI, ERC721, abi2 } from '../constants/abi';
import {Spinner} from "@nextui-org/react";
import TransactionImg from '../assets/images/transaction.png';



const TradeOtc = ({closeHeader}) => {

    const [ openModal, setopenModal ] = useState(false)
    const { enableWeb3, displayAccount, user_account, TradeFactorycontractAddress, walletProvider, signer,  UpdatesideNav } = useContext(AppContext)

    const [ Trade, setTrade ] = useState(null)

    const [ LoadingTransactions, setLoadingTransactions ] = useState(false)
    const [ Erorr, setErorr ] = useState(null)
    const [ successMsg, setsuccessMsg ] = useState(false)
    const [ miniLoading, setminiLoading ] = useState(false)


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

        setminiLoading(true)

        try{

            var id = parseInt(tradeId)

            const hexToDecimal = hex => parseInt(hex, 16)
            let value = hexToDecimal(Trade.receivingToken.value._hex);

            console.log(value)


            let response ;
            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)


            if ( value < 1000000 ) {
                
                response = await contract.withdraw(id,{
                    gasLimit:1000000
                })  

            }else{
                response = await contract.withdraw(id)
            }

            

            if ( response ) {
                console.log(response)
                setsuccessMsg(true)
                setminiLoading(false)
                
                setTimeout(() => {
                    window.location.reload()
                }, 4000);

            }

        }
        catch(error){

            // var id = parseInt(tradeId)

            setminiLoading(false)
            console.log(error)
            setopenModal(true)
        
        }
        
    }

    const acceptHandler = async (tradeID) => {

        try{

            setminiLoading(true)

            var id = parseInt(tradeId)

            const hexToDecimal = hex => parseInt(hex, 16)
            let value = hexToDecimal(Trade.receivingToken.value._hex);

            console.log(value)

            // value = value / 1000000

            // console.log(Trade.givingToken)

            let approveResponse ;

            if ( value < 1000000 ) {
                
                const approveToken = new ethers.Contract(Trade.receivingToken.tokenAddress,ERC721,signer)
                approveResponse = await approveToken.approve('0x86a04287dafc09b450bee2b5c99cee0b1ae20be7',value)    

            }else{

                const approveToken = new ethers.Contract(Trade.receivingToken.tokenAddress,ERC20ABI,signer)
                approveResponse = await approveToken.approve('0xfe815da50dbedbcb3d0f3e076821c98b294fd81c',value)    

            }

            if ( approveResponse ) {
                
            }

            const contract = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
            const response = await contract.execute(id)
            
            console.log("")

            if( response ){

                const contrac2t = new ethers.Contract('0xa138a388cbd9796e9C08A159c40b6896b8538115',abi2,signer)
                const response2 = await contrac2t.swap(id)

                if ( response2 ) {
                    setminiLoading(false)
                    GetTrade(id)
                    setsuccessMsg(true)
                    // window.location.reload()
                }

            }

            // setsuccessMsg(true)

        }
        catch(error){
            console.log(error)
            setopenModal(true)
            setminiLoading(false)
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
                        loading={miniLoading}
                        acceptFunction={ () => acceptHandler(Trade.tradeId) }
                    />
             
             }

            </div>

            { openModal ? 
            
            <ErrorModal closeModal={ () => setopenModal(false) } />

            : <></> }


            { successMsg ?
            
                <SuccessModal closeModal={ () => setsuccessMsg(false) } />
            
            : <></> }

        </div>

    );

}

export default TradeOtc;