import EthImg from '../assets/images/eth.png';
import {FaExchangeAlt} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {BiSolidCopy} from 'react-icons/bi';
import RelayIc from '../assets/images/relay_ic.png';





const TradeComponent = () => {

    return (

        <div className='trade_div' >

                    <div className='trade_div_top' >
                        <h5 className='trade_div_top_left' >RLY / ETH</h5>
                        <div className='trade_div_top_right' >
                            <h6 className='trade_div_top_right_txt' >Copy Trade URL</h6>
                            <BiSolidCopy className='trade_div_top_right_ic' />
                        </div>
                    </div>

                    <div className='trade_div_GW' >
                        <h6 className='trade_div_GW_txt' >
                            <span>Gives:</span>
                            10,123
                        </h6>
                        <h6 className='trade_div_GW_txt' >
                            <span>Wants:</span>
                            5.00
                        </h6>
                    </div>

                    <div className='trade_div_mid' >

                        <h5>($10,123)</h5>

                        <FaExchangeAlt className='trade_div_mid_ic' />

                        <h5>($7,742.85)</h5>

                    </div>

                    <div className='trade_div_lst' >

                        <div className='trade_div_lst_pt' >

                            <img src={RelayIc} alt='' />

                            <h5>RLY</h5>

                            <FiExternalLink className='trade_div_lst_pt_ic' />

                        </div>

                        <div className='trade_div_lst_pt' >

                            <FiExternalLink className='trade_div_lst_pt_ic' />

                            <img src={EthImg} alt='' />

                            <h5>ETH</h5>

                        </div>

                    </div>

                    <button className='trade_div_btn' >
                        Cancel Trade
                    </button>

                </div>

    );

}

export default TradeComponent;