
import {BsIncognito} from 'react-icons/bs';
import {BiInfoCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {IoMdMenu} from 'react-icons/io';
import {ErrorModal, SelectTokenBdrop} from '../components/backDropComponent';
import { useState } from 'react';


const SetuptradeDapp = ({closeHeader}) => {

    const [ openModal, setopenModal ] = useState(false)
    const [ openMessage, setopenMessage ] = useState(false)


    return (

        <div className="Otc_main" >

            <div className="Otc_main_header" >

                <h5>SETUP TRADE</h5>

                <div className='Otc_main_header_spc' >
                    
                    <IoMdMenu className='Otc_main_header_spc_ic' style={{
                        cursor:"pointer"
                    }} onClick={closeHeader} />

                    <Link className='Otc_main_header_spc_txt' >RELAY</Link>

                </div>

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
                        <h6 onClick={ () => {
                            setopenMessage(false)
                            setopenModal(true)
                        } }>Select a token</h6>
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Amount of token to swap:</h5>
                        <input type='text' placeholder='0' />
                    </div>

                    <div className="setupTrade_main" >
                        <h5>Token wanted in exchange:</h5>
                        <h6 onClick={ () => {
                            setopenMessage(false)
                            setopenModal(true)
                        } } >Select a token</h6>
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

                    <button className='setupTrade_btn' onClick={ () => {
                            setopenMessage(true)
                            setopenModal(false)
                        } } >
                        Setup a Trade
                    </button>

                </div>

            </div>

            { openModal ? 
            
                <SelectTokenBdrop closeModal={ () => {
                    setopenModal(false)
                    setopenMessage(false)
                } } />

            : <></> }

            { openMessage ? 
                
                <ErrorModal closeModal={ () => {
                    setopenMessage(false)
                    setopenModal(false)
                } } />

            : <></> }

        </div>

    );

}

export default SetuptradeDapp;