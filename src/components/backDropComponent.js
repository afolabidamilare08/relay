import {AiOutlineClose} from 'react-icons/ai';
import {IoMdCheckmark} from 'react-icons/io';
import {BsFunnel} from 'react-icons/bs';
import {BiChevronDown} from 'react-icons/bi';
import {  motion } from 'framer-motion';





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

const ModalMain = () => {

    return (

        <div className="Drop_main" >
        </div>

    );

}

export { BackDrop, ModalMain };