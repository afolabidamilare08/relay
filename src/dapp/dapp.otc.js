import EthImg from '../assets/images/eth.png';
import BnbImg from '../assets/images/bnb.png';
import ArmImg from '../assets/images/arm.png';
import {BsChevronDown, BsFunnel} from 'react-icons/bs';
import {FaExchangeAlt} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';
import {BiSolidCopy} from 'react-icons/bi';
import ArrowUp from '../assets/images/Arrow_Up_Icon.png';
import {Popover, PopoverTrigger, PopoverContent, Switch} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import RelayIc from '../assets/images/relay_ic.png';



const OtcDapp = () => {

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

                <h5>OTC TRADES</h5>

                <div className="Otc_main_header_right" >

                    <div className='Otc_main_header_right_live' >
                        <img src={ArrowUp} alt='' />
                        <h6>24h Volume: ~0$ </h6>
                    </div>
                    <Popover key={'bottom-end'} placement={'bottom'} color="primary" >
                        <PopoverTrigger>
                    <div className="Otc_main_header_right_wallet" >
                        
                        <button className='Otc_main_header_right_wallet_btn' >
                            <img src={EthImg} alt='' />
                            Ethereum
                            <BsChevronDown className='Otc_main_header_right_wallet_btn_ic' />
                        </button>
                        
                    </div>
                    </PopoverTrigger>
                        {content}
                        </Popover>

                    <div className="Otc_main_header_right_wallet" >
                        <div className="Otc_main_header_right_wallet_center" >0x0000...0000</div>
                    </div> 

                </div>

            </div>

            <h6 className='Otc_main_txt' >Trades</h6>

            <div className='Otc_main_options' >

                <div className='Otc_main_options_left' >
                    <div className='Otc_main_options_cov' >
                        <button className='Otc_main_options_cov_btn' >
                            All trades
                            <BsChevronDown className='Otc_main_options_cov_btn_ic' />
                        </button>
                    </div>

                    <div className='Otc_main_options_cov' >
                        <button className='Otc_main_options_cov_btn' >
                            <BsFunnel className='Otc_main_options_cov_btn_icbefore' />
                            Filters
                        </button>
                    </div>
                </div>

                <div className='Otc_main_options_right' >
                    <h6>Show private trades</h6> <Switch defaultSelected aria-label="Automatic updates" />
                </div>

            </div>

            <div className='Otc_main_body' >

                <div className='Otc_main_body_div' >

                    <div className='Otc_main_body_div_top' >
                        <h5 className='Otc_main_body_div_top_left' >RLY / ETH</h5>
                        <div className='Otc_main_body_div_top_right' >
                            <h6 className='Otc_main_body_div_top_right_txt' >Copy Trade URL</h6>
                            <BiSolidCopy className='Otc_main_body_div_top_right_ic' />
                        </div>
                    </div>

                    <div className='Otc_main_body_div_GW' >
                        <h6 className='Otc_main_body_div_GW_txt' >
                            <span>Gives:</span>
                            10,123
                        </h6>
                        <h6 className='Otc_main_body_div_GW_txt' >
                            <span>Wants:</span>
                            5.00
                        </h6>
                    </div>

                    <div className='Otc_main_body_div_mid' >

                        <h5>($10,123)</h5>

                        <FaExchangeAlt className='Otc_main_body_div_mid_ic' />

                        <h5>($7,742.85)</h5>

                    </div>

                    <div className='Otc_main_body_div_lst' >

                        <div className='Otc_main_body_div_lst_pt' >

                            <img src={RelayIc} alt='' />

                            <h5>RLY</h5>

                            <FiExternalLink className='Otc_main_body_div_lst_pt_ic' />

                        </div>

                        <div className='Otc_main_body_div_lst_pt' >

                            <FiExternalLink className='Otc_main_body_div_lst_pt_ic' />

                            <img src={RelayIc} alt='' />

                            <h5>RLY</h5>

                        </div>

                    </div>

                    <button className='Otc_main_body_div_btn' >
                        Cancel Trade
                    </button>

                </div>

            </div>

        </div>

    );

}

export default OtcDapp;