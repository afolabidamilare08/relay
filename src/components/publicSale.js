import UnderlineImg from '../assets/images/underline.png';
import EclipseImg from '../assets/images/Ellipse.png';
import RightImg from '../assets/images/right_img_.png';
import RightEcliImg from '../assets/images/Ellipse_28.png';
import LeftEcliImg from '../assets/images/Ellipse_29.png';
import {  motion } from 'framer-motion';
import { PiWarningOctagonFill } from 'react-icons/pi'


const PublicSaleComponent = () => {

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

                <input type='text' placeholder='Enter the ammount in WETH' className='presale_publicsale_div_textBox' />

                <div className='presale_publicsale_div_fin' >
                    <button>Approve WETH</button>
                    <button>Contribute WETH</button>
                </div>

            </div>


            {/* <img src={EclipseImg} alt="ss" className='presale_publicsale_div_leftImg' />
            <img src={RightImg} alt="ss" className='presale_publicsale_div_rightImg' />
            <img src={RightEcliImg} alt="ss" className='presale_publicsale_div_miniRight' />
            <img src={LeftEcliImg} alt="ss" className='presale_publicsale_div_miniLeft' /> */}


        </div>

    );

}

export default PublicSaleComponent;