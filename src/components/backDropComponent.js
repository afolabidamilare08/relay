import {AiOutlineClose,AiFillWarning} from 'react-icons/ai';
import {IoMdCheckmark} from 'react-icons/io';
import {BsFunnel} from 'react-icons/bs';
import {BiChevronDown, BiSearch} from 'react-icons/bi';
import {  motion } from 'framer-motion';
import ETHimg from '../assets/images/eth.png';
import CloseImg from '../assets/images/close.png';
import { useState } from 'react';
import { commonToken } from '../constants/tokens';
// import Moralis from 'moralis';
// import { EvmChain } from '@moralisweb3/common-evm-utils';



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

    const [ Alltokens, setAlltokens ] = useState([])
    const [ Loading, setLoading ] = useState(false)
    const [ Query, setQuery ] = useState('')
    const [ selectedToken, setselectedToken ] = useState(null)

    const GetTokenbyAddress = async () => {

        try{

            const response = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/metadata?chain=eth&addresses%5B0%5D=${Query}`,{
                method: 'GET',
                headers:{
                "accept":"application/json",
                "X-API-Key":"lAoj7I9S6dCu2l4jbbIUGDSyssYJ0Rxe6zaZhdlkhwZTj1ot8rtjuqE5x28Z9NRU"
                }
            })

            const json = await response.json()

            if ( json.length > 0 ) {
                setselectedToken(json)
            }


        }
        catch(error){
            console.log(error)
        }

    }

    const GetTokenbySymbol = async () => {

        try{

            const response = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols?chain=eth&symbols=${Query}`,{
                method: 'GET',
                headers:{
                "accept":"application/json",
                "X-API-Key":"lAoj7I9S6dCu2l4jbbIUGDSyssYJ0Rxe6zaZhdlkhwZTj1ot8rtjuqE5x28Z9NRU"
                }
            })

            const json = await response.json()

            if ( json.length > 0 ) {
                setselectedToken(json)
            }


        }
        catch(error){
            console.log(error)
        }

    }



    if ( Query.length > 35 && !selectedToken ) {
        GetTokenbyAddress()
    }

    if ( Query.length > 2 && !selectedToken && Query.length < 12 ) {
        GetTokenbySymbol()
    }


    

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
                    justifyContent:"space-between",
                    marginBottom:"1rem",
                    alignItems:"center"
                }} >

                    <h1 style={{
                        color:"white"
                    }} >Select Token</h1>

                    <AiOutlineClose color='white' style={{
                        cursor:"pointer"
                    }} onClick={ () => closeModal(selectedToken) } />
                </div>

                <div className='backDrop_getToken_top' >
                    <BiSearch className='backDrop_getToken_top_ic' />
                    <input type='text' placeholder='Search name or paste address' value={Query} onChange={ (e) => {
                        setQuery(e.target.value)
                        setselectedToken(null)
                    } }  />
                </div>

                <div className='backDrop_getToken_choices' style={{
                    borderBottom: selectedToken ? '2px' : "0px"

                }} >

                    { commonToken.map( (token,index) => {
                        return (

                            <div className='backDrop_getToken_choices_div' key={index} onClick={ () => {
                                setselectedToken(token)
                                closeModal(token)
                            } } >
                                <img src={token.logo} alt='' style={{
                                    width:"1.1rem"
                                }} />
                                <h5>{token.name}</h5>
                            </div>

                        );
                    } ) }

                </div>

                <div className='backDrop_getToken_selections' style={{
                    maxHeight:"50vh",
                    overflowY:"auto",
                }} >

                    { selectedToken ?
                    
                    
                        selectedToken.map( (token,index) => {

                            if ( (!token.address_label || !token.logo) && Query.length < 10  ) {
                                return <></>
                            }

                            return (
                                <div className='backDrop_getToken_selections_li' key={index} onClick={ () => {
                                    setselectedToken(token)
                                    closeModal(token)
                                } } >

                                    <img src={ token.logo ? token.logo : ETHimg } alt='' />

                                    <div className='backDrop_getToken_selections_li_right' >
                                        <h5>{token.name}</h5>
                                        <h6>{token.symbol}</h6>
                                    </div>

                                </div>
                            );
                        } )

                    
                    : <></>  }

                </div>
            </motion.div>

        </div>

    );

}

const ErrorModal = ({closeModal}) => {

    return (

        <div className="backDrop" onClick={closeModal} >

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

const NormalBackdrop = ({closeModal}) => {
 
    return (
        <motion.div className="backDrop"
            // initial={{ scale: 0.5,}}
            // whileInView={{ scale: 1, }}
            // transition={{ duration: 0.4 }}
            // viewport={{ once: true }}
            onClick={closeModal}
        >
                

        </motion.div>
    );
    
}





const SliderModal = ({ display, closeModal}) => {

    return (
        <div className='sliderMain' style={{
            right: display ? '0rem' : '-20rem',
            display:"flex",
            alignItems:"center",
            cursor:"pointer"
        }} onClick={closeModal} >
            <div className='sliderMain_center' >
                Trade setup successful  🎉
            </div>
        </div>
    );

}

const ErrorSlideModal = ({error_msg, display, closeModal}) => {

    return (
        <div className='sliderError' style={{
            right: display ? '0rem' : '-20rem',
            display:"flex",
            alignItems:"center"
        }} onClick={ closeModal } >
            {error_msg} <AiFillWarning style={{
                marginLeft:'1rem'
            }} />
        </div>
    );

}


export { BackDrop, SelectTokenBdrop, ErrorModal, NormalBackdrop, SliderModal, ErrorSlideModal };