import EthImg from '../assets/images/eth.png';
import {FaExchangeAlt} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {BiSolidCopy} from 'react-icons/bi';
import RelayIc from '../assets/images/relay_ic.png';
import { useEffect } from 'react';
import { useState } from 'react';
import { commonToken } from '../constants/tokens';
import {  motion } from 'framer-motion';
import CopyToClipboard from 'react-copy-to-clipboard';


const TradeComponent = ({ receivingToken, givingToken, trade, withdrawalFunction, cancelFunction  }) => {

    const [ recieveTok, setrecieveTok ] = useState()
    const [ givingTok, setgivingTok ] = useState()


    const getTokenDetails = async (token,number) => {

        try{
            var tokendet = null
            const response = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/${token.tokenAddress}/price?chain=eth`,{
                method: 'GET',
                headers:{
                "accept":"application/json",
                "X-API-Key":"lAoj7I9S6dCu2l4jbbIUGDSyssYJ0Rxe6zaZhdlkhwZTj1ot8rtjuqE5x28Z9NRU"
                }
            })

            const json = await response.json()

            if ( json.message ) {
                return
            }

            tokendet = {
                ...json
            }

            const hexToDecimal = hex => parseInt(hex, 16)
            let value = hexToDecimal(token.value._hex);
            value = value / 1000000

            tokendet = {
                ...tokendet,
                value: value
            }

            if ( number === 1 ) {
                setrecieveTok(tokendet)
            }else{
                setgivingTok(tokendet)
            }


        }
        catch(error){
            console.log(error)
        }

    }

    useEffect( () => {

        getTokenDetails(receivingToken,1)
        getTokenDetails(givingToken,2)

    } , [receivingToken,givingToken] )

    return (

        <motion.div className='trade_div'
                initial={{ scale: 0.5,}}
                whileInView={{ scale: 1, }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
        >

                    <div className='trade_div_top' >
                        <h5 className='trade_div_top_left' >{ recieveTok ? recieveTok.tokenSymbol : '' } / { givingTok ? givingTok.tokenSymbol : '' }</h5>
                        <div className='trade_div_top_right'  >
                            <h6 className='trade_div_top_right_txt' >Copy Trade URL</h6>
                            <CopyToClipboard text={`http://localhost:3000/trade_detail/${trade.tradeId}`} onCopy={ () => alert("Link Copied") } >
                                <BiSolidCopy className='trade_div_top_right_ic' style={{
                                    cursor:"pointer"
                                }} />
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className='trade_div_GW' >
                        <h6 className='trade_div_GW_txt' >
                            <span>Gives:</span>
                            { recieveTok ? recieveTok.value : '' }
                        </h6>
                        <h6 className='trade_div_GW_txt' >
                            <span>Wants:</span>
                            { givingTok ? givingTok.value : '' }
                        </h6>
                    </div>

                    <div className='trade_div_mid' >

                        <h5>(${ recieveTok ? Math.round(recieveTok.value * recieveTok.usdPrice) : '' })</h5>

                        <FaExchangeAlt className='trade_div_mid_ic' />

                        <h5>(${ givingTok ? Math.round(givingTok.value * givingTok.usdPrice) : '' })</h5>

                    </div>

                    <div className='trade_div_lst' >

                        <div className='trade_div_lst_pt' >

                            <img src={ recieveTok ? recieveTok.tokenLogo : RelayIc } style={{
                                width:'1.3rem'
                            }} alt='' />

                            <h5>{recieveTok ? recieveTok.tokenSymbol : ''}</h5>

                            {/* <FiExternalLink className='trade_div_lst_pt_ic' /> */}

                        </div>

                        <div className='trade_div_lst_pt' >

                            {/* <FiExternalLink className='trade_div_lst_pt_ic' /> */}

                            <img src={ givingTok ? givingTok.tokenLogo : RelayIc } alt='' style={{
                                width:'1.3rem'
                            }} />

                            <h5>{ givingTok ? givingTok.tokenSymbol : '' }</h5>

                        </div>

                    </div>

                    { givingToken.isSwapped && givingToken.isExecuted && receivingToken.isExecuted ?
                    
                        <button className='trade_div_btn' onClick={withdrawalFunction} >
                            Withdraw Token
                        </button> 
                    
                    :

                        <button className='trade_div_btn' onClick={cancelFunction} >
                            Cancel Trade
                        </button>
                    
                    }

                </motion.div>

    );

}



const TradeDetail = ({ receivingToken, givingToken, trade, withdrawalFunction, cancelFunction, acceptFunction  }) => {

    const [ recieveTok, setrecieveTok ] = useState()
    const [ givingTok, setgivingTok ] = useState()


    const getTokenDetails = async (token,number) => {

        try{
            var tokendet = null
            const response = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/${token.tokenAddress}/price?chain=eth`,{
                method: 'GET',
                headers:{
                "accept":"application/json",
                "X-API-Key":"lAoj7I9S6dCu2l4jbbIUGDSyssYJ0Rxe6zaZhdlkhwZTj1ot8rtjuqE5x28Z9NRU"
                }
            })

            const json = await response.json()

            if ( json.message ) {
                return
            }

            tokendet = {
                ...json
            }

            const hexToDecimal = hex => parseInt(hex, 16)
            let value = hexToDecimal(token.value._hex);
            value = value / 1000000

            tokendet = {
                ...tokendet,
                value: value
            }

            if ( number === 1 ) {
                setrecieveTok(tokendet)
            }else{
                setgivingTok(tokendet)
            }


        }
        catch(error){
            console.log(error)
        }

    }

    useEffect( () => {

        getTokenDetails(receivingToken,1)
        getTokenDetails(givingToken,2)

    } , [receivingToken,givingToken] )

    return (

        <motion.div className='trade_div'
                initial={{ scale: 0.5,}}
                whileInView={{ scale: 1, }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
        >

                    <div className='trade_div_top' >
                        <h5 className='trade_div_top_left' >{ recieveTok ? recieveTok.tokenSymbol : '' } / { givingTok ? givingTok.tokenSymbol : '' }</h5>
                        <div className='trade_div_top_right'  >
                            <h6 className='trade_div_top_right_txt' >Copy Trade URL</h6>
                            <CopyToClipboard text={`http://localhost:3000/trade_detail/${trade.tradeId}`} onCopy={ () => alert("Link Copied") } >
                                <BiSolidCopy className='trade_div_top_right_ic' style={{
                                    cursor:"pointer"
                                }} />
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className='trade_div_GW' >
                        <h6 className='trade_div_GW_txt' >
                            <span>Gives:</span>
                            { recieveTok ? recieveTok.value : '' }
                        </h6>
                        <h6 className='trade_div_GW_txt' >
                            <span>Wants:</span>
                            { givingTok ? givingTok.value : '' }
                        </h6>
                    </div>

                    <div className='trade_div_mid' >

                        <h5>(${ recieveTok ? Math.round(recieveTok.value * recieveTok.usdPrice) : '' })</h5>

                        <FaExchangeAlt className='trade_div_mid_ic' />

                        <h5>(${ givingTok ? Math.round(givingTok.value * givingTok.usdPrice) : '' })</h5>

                    </div>

                    <div className='trade_div_lst' >

                        <div className='trade_div_lst_pt' >

                            <img src={ recieveTok ? recieveTok.tokenLogo : RelayIc } style={{
                                width:'1.3rem'
                            }} alt='' />

                            <h5>{recieveTok ? recieveTok.tokenSymbol : ''}</h5>

                            {/* <FiExternalLink className='trade_div_lst_pt_ic' /> */}

                        </div>

                        <div className='trade_div_lst_pt' >

                            {/* <FiExternalLink className='trade_div_lst_pt_ic' /> */}

                            <img src={ givingTok ? givingTok.tokenLogo : RelayIc } alt='' style={{
                                width:'1.3rem'
                            }} />

                            <h5>{ givingTok ? givingTok.tokenSymbol : '' }</h5>

                        </div>

                    </div>

                    { receivingToken.isSwapped && givingToken.isExecuted && receivingToken.isExecuted ?
                    
                        <button className='trade_div_btn' onClick={withdrawalFunction} >
                            Withdraw Token
                        </button> 
                    
                    :

                        !receivingToken.isExecuted ? 

                            <button className='trade_div_btn' onClick={acceptFunction} >
                                Accept Trade
                            </button>
                        
                        :


                        <button className='trade_div_btn' onClick={cancelFunction} >
                            Cancel Trade
                        </button>
                    
                    }

                </motion.div>

    );

}


export {TradeDetail,TradeComponent};