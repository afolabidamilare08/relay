import EthImg from '../assets/images/eth.png';
import BnbImg from '../assets/images/bnb.png';
import ArmImg from '../assets/images/arm.png';
import {BsIncognito} from 'react-icons/bs';
import {BiInfoCircle} from 'react-icons/bi';
import ArrowUp from '../assets/images/Arrow_Up_Icon.png';
import {Popover, PopoverTrigger, PopoverContent, Switch} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import TradeComponent from '../components/trade_component';
import {IoMdMenu} from 'react-icons/io'
import {BackDrop, SelectTokenBdrop} from '../components/backDropComponent';
import { useState } from 'react';


const SetuptradeDapp = () => {

    const [ openModal, setopenModal ] = useState(true)

    const content = (
        <PopoverContent  >
          <div className="Otc_main_modal" >
            <Link to={"#"} className='Otc_main_modal_link' >
                <img src={EthImg} alt='' />
                <h6>Ethereum</h6>
            </Link>
            <Link to={"#"} className='Otc_main_modal_link' >
                <img src={BnbImg} alt='' />
                <h6>BSC</h6>
            </Link>
            <Link to={"#"} className='Otc_main_modal_link' >
                <img src={ArmImg} alt='' />
                <h6>Arbitrum</h6>
            </Link>
          </div>
        </PopoverContent>
      );

    return (

        <div className="Otc_main" >

            <div className="Otc_main_header" >

                <h5>SETUP TRADE</h5>

                <Link className='Otc_main_header_spc' >
                    
                    <IoMdMenu className='Otc_main_header_spc_ic' />
 
                    <div className='Otc_main_header_spc_txt' >RELAY</div>

                </Link>

                <div className="Otc_main_header_right" >

                    <div className="Otc_main_header_right_wallet otc_tophdvgt" >
                        <div className="Otc_main_header_right_wallet_center" >0x0000...0000</div>
                    </div> 

                </div>

            </div>

            <div className='Otc_main_body' >

                <div className='setupTrade' >

                    <div className='setupTrade_title' >

                        <h5>Set up a trade below</h5>

                        <div className='setupTrade_title_right' >
                            <h6>Setting a private trade?</h6>
                            <div className='setupTrade_title_right_switch' >
                                <div className='setupTrade_title_right_switch_div' >
                                    <BsIncognito color="#373739" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="setupTrade_main" >
                        <h5>Wallet:</h5>
                        <h6>0x0000...0000</h6>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Token to swap</h5>
                        <h6 onClick={ () => setopenModal(true) } >Select a token</h6>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Amount of token to swap:</h5>
                        <input type='text' placeholder='0' />
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Token wanted in exchange:</h5>
                        <h6 onClick={ () => setopenModal(true) } >Select a token</h6>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Amount of token wanted in exchange:</h5>
                        <h6>0</h6>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Performance tax</h5>
                        <h6>1.5%</h6>
                    </div>

                    <div className='setupTrade_list' >
                        <BiInfoCircle className='setupTrade_list_ic' />
                        <h5>Default performance tax is 1.5% and is set by contract</h5>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Tax recipient</h5>
                        <h6>0x0000...0000</h6>
                    </div>

                    <button className='setupTrade_btn' >
                        Setup a Trade
                    </button>

                </div>

            </div>

            { openModal ? 
            
                <SelectTokenBdrop closeModal={ () => setopenModal(false) } />

            : <></> }

        </div>

    );

}

export default SetuptradeDapp;