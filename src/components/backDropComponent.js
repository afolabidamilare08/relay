import {AiOutlineClose} from 'react-icons/ai';
import {IoMdCheckmark} from 'react-icons/io';
import {BsFunnel} from 'react-icons/bs';
import {BiChevronDown, BiSearch} from 'react-icons/bi';
import {  motion } from 'framer-motion';
import ETHimg from '../assets/images/eth.png';
import BNBimg from '../assets/images/bnb.png';
import ARMimg from '../assets/images/arm.png';
import CloseImg from '../assets/images/close.png';



const BackDrop = ({closeModal}) => {

    return(

        <div className="backDrop" >

            <motion.div className="backDrop_contnet"
            
                initial={{ scale: 0.5,}}
                whileInView={{ scale: 1, }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            
            >

                <div className="backDrop_contnet_top" >

                    <h5>Filters</h5>

                    <AiOutlineClose className='backDrop_contnet_top_ic' onClick={ closeModal } />

                </div>

                <div className='backDrop_contnet_div' >

                    <h5 className='backDrop_contnet_div_title' >Assets to buy</h5>

                    <div className='backDrop_contnet_div_m' >
                        <h4>Select an asset</h4>
                        <BiChevronDown className='backDrop_contnet_div_m_ic' />
                    </div>

                </div>

                <div className='backDrop_contnet_div' >

                    <h5 className='backDrop_contnet_div_title' >Assets to sell</h5>

                    <div className='backDrop_contnet_div_m' >
                        <h4>Select an asset</h4>
                        <BiChevronDown className='backDrop_contnet_div_m_ic' />
                    </div>

                </div>   

                <div className='backDrop_contnet_div' >

                    <h5 className='backDrop_contnet_div_title' >Time interval</h5>

                    <div className='backDrop_contnet_div_m' >
                        <h4>All time</h4>
                        <BiChevronDown className='backDrop_contnet_div_m_ic' />
                    </div>

                </div> 

                <button className='backDrop_contnet_submit' >
                    <IoMdCheckmark className='backDrop_contnet_submit_ic' color='white' />
                    <h5>Save</h5>
                </button>   

                <div className='backDrop_contnet_filter' >

                    <button className='backDrop_contnet_filter_center' >
                        <BsFunnel/>
                        <h5>Reset filters</h5>
                    </button>
                    
                </div>                         

            </motion.div>

        </div>
    );

}

const SelectTokenBdrop = ({closeModal}) => {

    return (

        <div className="backDrop" >

            <motion.div className='backDrop_getToken'
            
                initial={{ scale: 0.5,}}
                whileInView={{ scale: 1, }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            
            >

                <div className="backDrop_getToken_close" style={{
                    display:"flex",
                    justifyContent:"flex-end",
                    marginBottom:"1rem"
                }} >
                    <AiOutlineClose color='white' style={{
                        cursor:"pointer"
                    }} onClick={closeModal} />
                </div>

                <div className='backDrop_getToken_top' >
                    <BiSearch className='backDrop_getToken_top_ic' />
                    <input type='text' placeholder='Search name or paste address' />
                </div>
                <div className='backDrop_getToken_choices' >

                    <div className='backDrop_getToken_choices_div' >
                        <img src={ETHimg} alt='' />
                        <h5>ETH</h5>
                    </div>

                    <div className='backDrop_getToken_choices_div' >
                        <img src={ETHimg} alt='' />
                        <h5>ETH</h5>
                    </div>

                    <div className='backDrop_getToken_choices_div' >
                        <img src={ETHimg} alt='' />
                        <h5>ETH</h5>
                    </div>

                    <div className='backDrop_getToken_choices_div' >
                        <img src={ETHimg} alt='' />
                        <h5>ETH</h5>
                    </div>

                </div>
                <div className='backDrop_getToken_selections' >

                    <div className='backDrop_getToken_selections_li' >

                        <img src={ETHimg} alt='' />

                        <div className='backDrop_getToken_selections_li_right' >
                            <h5>Ether</h5>
                            <h6>ETH</h6>
                        </div>

                    </div>

                    <div className='backDrop_getToken_selections_li' >

                        <img src={BNBimg} alt='' />

                        <div className='backDrop_getToken_selections_li_right' >
                            <h5>Ether</h5>
                            <h6>ETH</h6>
                        </div>

                    </div>

                    <div className='backDrop_getToken_selections_li' >

                        <img src={ARMimg} alt='' />

                        <div className='backDrop_getToken_selections_li_right' >
                            <h5>Ether</h5>
                            <h6>ETH</h6>
                        </div>

                    </div>

                </div>
            </motion.div>

        </div>

    );

}

const ErrorModal = ({closeModal}) => {

    return (

        <div className="backDrop" >

            <motion.div className='backDrop_getToken'
                        
                initial={{ scale: 0.5,}}
                whileInView={{ scale: 1, }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            
            >

                <img className='errorImg' alt='' src={CloseImg} />

                <h3 className='errorImg_top' >There has been an error</h3>

                <h2 className='errorImg_btm' >
                    We're sorry, but we were unable to connect to your wallet. 
                    If you continue to experience issues, please contact our 
                    support team for further assistance.
                </h2>

            </motion.div>

        </div>

    );

}

export { BackDrop, SelectTokenBdrop, ErrorModal };