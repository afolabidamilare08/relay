import UnderlineImg from '../assets/images/underline.png';
import EclipseImg from '../assets/images/Ellipse.png';
import RightImg from '../assets/images/right_img_.png';
import RightEcliImg from '../assets/images/Ellipse_28.png';
import LeftEcliImg from '../assets/images/Ellipse_29.png';
import {  motion } from 'framer-motion';
import { PiWarningOctagonFill } from 'react-icons/pi'


const ClaimTokenComponent = () => {

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
                        <h6>XXX</h6>
                    </div>

                    <div className='presale_publicsale_div_claim_div' >
                        <h5>Ammount of tokens yet to be claimed:</h5>
                        <h6>XXX</h6>
                    </div>

                </div>

                <button className='presale_publicsale_div_btnBm' >
                    Claim Tokens
                </button>

            </div>


            {/* <img src={EclipseImg} alt="ss" className='presale_publicsale_div_leftImg' />
            <img src={RightImg} alt="ss" className='presale_publicsale_div_rightImg' />
            <img src={RightEcliImg} alt="ss" className='presale_publicsale_div_miniRight' />
            <img src={LeftEcliImg} alt="ss" className='presale_publicsale_div_miniLeft' /> */}


        </div>

    );

}

export default ClaimTokenComponent;