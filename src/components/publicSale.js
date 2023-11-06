import UnderlineImg from '../assets/images/underline.png';
import EclipseImg from '../assets/images/Ellipse.png';
import RightImg from '../assets/images/right_img_.png';
import RightEcliImg from '../assets/images/Ellipse_28.png';
import LeftEcliImg from '../assets/images/Ellipse_29.png';
import {  motion } from 'framer-motion';
import { PiWarningOctagonFill } from 'react-icons/pi'
import { useContext, useState } from 'react';
import AppContext from '../context/Appcontext';
import { ethers } from 'ethers';
import { ERC20ABI, PRESALEABI } from '../constants/abi';
import { Spinner } from '@nextui-org/react';
import { EditableSuccessModal, ErrorModal2 } from './backDropComponent';


const PublicSaleComponent = () => {

    const { user_account, enableWeb3, signer, PresaleSmartContractAddress } = useContext(AppContext)
    const [ isLoading, setisLoading ] = useState(false)
    const [ iserror, setiserror ] = useState({
        status:false,
        title:"",
        message:""
    })
    const [ isSuccess, setisSuccess ] = useState({
        status:false,
        title:"",
        message:""
    })
    const [ amountToContribute, setamountToContribute ] = useState('')

    const approveHandler = async () => {

        setisLoading(true)

        try{

            if ( amountToContribute === '' ) {
                setisLoading(false)
                return
            }

            let wei = parseInt(amountToContribute,10)
            // wei = wei * 10000000000000000000
            wei = ethers.utils.parseEther(amountToContribute)

            console.log(wei)

            const ApproveToken = new ethers.Contract('0x034f47c9c0B3489b12B82Fa0e280C4fdC0Addac7',ERC20ABI,signer)


            const approveResponse = await ApproveToken.approve(
                PresaleSmartContractAddress,
                wei
            )

            if ( approveResponse ) {
                console.log(approveResponse)
                setisLoading(false)
                setisSuccess({
                    status:true,
                    title:"Approval Successful",
                    message:"You have successfully approved this token"
                })
            }


        }
        catch(error){
            console.log(error)
            setisLoading(false)
            setiserror({
                status:true,
                title:"Something went wrong",
                message:"error message"
            })
        }

    }

    const contributeHandler = async () => {

        setisLoading(true)

        try{

            if ( amountToContribute === '' ) {
                setisLoading(false)
                return
            }

            let wei = parseInt(amountToContribute,10)
            // wei = wei * 10000000000000000000
            wei = ethers.utils.parseEther(amountToContribute)


            const contribute = new ethers.Contract(PresaleSmartContractAddress,PRESALEABI,signer)

            const contributeResponse = await contribute.buyTokens(
                wei,
                user_account
            )

            if( contributeResponse ){
                setisLoading(false)
                setamountToContribute('')
                setisSuccess({
                    status:true,
                    title:"Success",
                    message:"You have successfully contributed to this project"
                })
            }
        }
        catch(error){
            console.log(error)
            setisLoading(false)
            setiserror({
                status:true,
                title:"Something went wrong",
                message:"error message"
            })
        }

    }

    return (

        <div className='presale_publicsale_div' >

            <div className="presale_publicsale_div_header" >

                <h5>Public Sale                
                    <img src={UnderlineImg} alt="underline" />

                </h5>

            </div>

            <div className='presale_publicsale_div_body' >
                
                <h4 className='presale_publicsale_div_ised' >Funds raised:</h4>

                <div className='presale_publicsale_div_progress' >
                    <div className='presale_publicsale_div_progress_bar' ></div>
                </div>

                <div className='presale_publicsale_div_caution' >
                    <PiWarningOctagonFill className='presale_publicsale_div_caution_ic' />
                    <h6>Make sure that you’re contibuting WETH</h6>
                </div>

                <h4 className='presale_publicsale_div_contribute' >
                    Contribute WETH (1 $Relay: 0.0000037 WETH)
                </h4>

                <h4 className='presale_publicsale_div_ipsum' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>

                { user_account ?
                
                    <>
                    
                        <input type='text' placeholder='Enter the ammount in WETH' className='presale_publicsale_div_textBox' value={amountToContribute} onChange={ (e) => setamountToContribute(e.target.value) } />

                        <div className='presale_publicsale_div_fin' >
                            <button disabled={ isLoading } onClick={ () => approveHandler() } >{ isLoading ? <Spinner
                                color="default" size="sm"
                            /> : 'Approve WETH' }</button>
                            <button disabled={isLoading} onClick={ () => contributeHandler() } >{ isLoading ? <Spinner
                                color="default" size="sm"
                            /> : 'Contribute WETH' }</button>
                        </div>

                    </>
                
                : <button onClick={ () => enableWeb3() } className='presale_publicsale_div_btnBm' >
                    Connect Wallet
                </button> }

            </div>


            {/* <img src={EclipseImg} alt="ss" className='presale_publicsale_div_leftImg' />
            <img src={RightImg} alt="ss" className='presale_publicsale_div_rightImg' />
            <img src={RightEcliImg} alt="ss" className='presale_publicsale_div_miniRight' />
            <img src={LeftEcliImg} alt="ss" className='presale_publicsale_div_miniLeft' /> */}

            { isSuccess.status ? 
            
                <EditableSuccessModal
                    closeModal={ () => setisSuccess({
                        status:false,
                        title:"",
                        message:""
                    }) }
                    modal_message={ isSuccess.message }
                    modal_title={isSuccess.title}
                    presale={true}
                />
            
            : <></> }

            { iserror.status ?
            
            
                <ErrorModal2
                    closeModal={ () => setiserror({
                        status:false,
                        title:"",
                        message:""
                    }) }
                    msg={iserror.message}
                    presale={true}
                />

            : <></> }

        </div>

    );

}

export default PublicSaleComponent;