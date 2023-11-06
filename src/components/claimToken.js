import UnderlineImg from '../assets/images/underline.png';
import EclipseImg from '../assets/images/Ellipse.png';
import RightImg from '../assets/images/right_img_.png';
import RightEcliImg from '../assets/images/Ellipse_28.png';
import LeftEcliImg from '../assets/images/Ellipse_29.png';
import {  motion } from 'framer-motion';
import { PiWarningOctagonFill } from 'react-icons/pi'
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Appcontext';
import { ethers } from 'ethers';
import { ERC20ABI, PRESALEABI, VESTINGABI } from '../constants/abi';
import { Spinner } from '@nextui-org/react';
import { EditableSuccessModal, ErrorModal2 } from './backDropComponent';

const ClaimTokenComponent = () => {

    const { user_account, enableWeb3, signer } = useContext(AppContext)
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

    const [ Claimed, setClaimed ] = useState('')
    const [ Outstanding, setOutstanding ] = useState('')

    const claimHandler = async () => {

        setisLoading(true)

        try{

            const claim = new ethers.Contract('0x679E06CB1D115f612cba350659959Ad29C619Bb8',VESTINGABI,signer)

            const claimResponse = await claim.claim()

            if( claimResponse ){
                setisLoading(false)
                setisSuccess({
                    status:true,
                    title:"Success",
                    message:"You have successfully contributed to this project"
                })
            }

        }
        catch(error){
            setisLoading(false)
            setiserror({
                status:true,
                title:"Something went wrong",
                message:"error message"
            })
        }

    }


    const HandleGetclaimed = async () => {

        try{

            const claim = new ethers.Contract('0x679E06CB1D115f612cba350659959Ad29C619Bb8',VESTINGABI,signer)

            const claimResponse = await claim.claimed(user_account)

            if( claimResponse ){

                const hexToDecimal = (hex) => parseInt(hex, 16);
                let number = hexToDecimal(claimResponse._hex);
                // console.log(number)

                setClaimed(number)

                const OutstandingResponse = await claim.outstanding(user_account)
                
                if ( OutstandingResponse ){
                    let out = hexToDecimal(OutstandingResponse._hex);
                    // console.log(out)
    
                    setOutstanding(out)
                }


            }


        }
        catch(error){

        }

    }

    useEffect( () => {
        if (user_account && Claimed === '' ) {
            HandleGetclaimed()
        }
    }, [user_account] )


    return (

        <div className='presale_publicsale_div' >

            <div className="presale_publicsale_div_header" >

                <h5>Claim your tokens                
                    <img src={UnderlineImg} alt="underline" />

                </h5>

            </div>

            <div className='presale_publicsale_div_body' >

                <div className='presale_publicsale_div_caution' >
                    <PiWarningOctagonFill className='presale_publicsale_div_caution_ic' />
                    <h6>Claimed tokens have 3-day linear vesting</h6>
                </div>

                <div className='presale_publicsale_div_claim' >

                    <div className='presale_publicsale_div_claim_div' >
                        <h5>Amount of tokens claimed:</h5>
                        <h6>{ Claimed }</h6>
                    </div>

                    <div className='presale_publicsale_div_claim_div' >
                        <h5>Ammount of tokens yet to be claimed:</h5>
                        <h6>{Outstanding}</h6>
                    </div>

                </div>

                { user_account ? <button disabled={isLoading} className='presale_publicsale_div_btnBm'  onClick={ () => claimHandler() } >
                    { isLoading ? <Spinner color="default" size="sm" /> : 'Claim Tokens' }
                </button> : <button onClick={ () => enableWeb3() } className='presale_publicsale_div_btnBm' >
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

export default ClaimTokenComponent;