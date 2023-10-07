import UnderlineImg from '../assets/images/underline.png';
import EclipseImg from '../assets/images/Ellipse.png';
import RightImg from '../assets/images/right_img_.png';
import RightEcliImg from '../assets/images/Ellipse_28.png';
import LeftEcliImg from '../assets/images/Ellipse_29.png';

const OurTokennomicsComponents = () => {

    return (

        <div className='our_tokenNomics_div' >

            <div className="our_tokenNomics_div_header" >

                <h5>Our <span>Tokenomics</span>
                
                    <img src={UnderlineImg} alt="underline" />

                </h5>

            </div>

            <div className='our_tokenNomics_div_body' >

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Initial Liquidity</h5>
                        <h6>45%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"45%"
                        }} ></div>
                    </div>

                </div>

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Liquidity Mining</h5>
                        <h6>20%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"20%"
                        }} ></div>
                    </div>

                </div>

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Public Sale</h5>
                        <h6>15%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"15%"
                        }} ></div>
                    </div>

                </div>

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Marketing and Listing</h5>
                        <h6>10%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"10%"
                        }} ></div>
                    </div>

                </div>

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Private Sale</h5>
                        <h6>6%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"6%"
                        }} ></div>
                    </div>

                </div>

                <div className='our_tokenNomics_div_body_div' >

                    <div className='our_tokenNomics_div_body_div_top' >
                        <h5>Team</h5>
                        <h6>4%</h6>
                    </div>

                    <div className='our_tokenNomics_div_body_div_btm' >
                        <div className='our_tokenNomics_div_body_div_btm_mid' style={{
                            width:"4%"
                        }} ></div>
                    </div>

                </div>

            </div>

            <img src={EclipseImg} alt="ss" className='our_tokenNomics_div_leftImg' />
            <img src={RightImg} alt="ss" className='our_tokenNomics_div_rightImg' />
            <img src={RightEcliImg} alt="ss" className='our_tokenNomics_div_miniRight' />
            <img src={LeftEcliImg} alt="ss" className='our_tokenNomics_div_miniLeft' />

        </div>

    );

}

export default OurTokennomicsComponents;