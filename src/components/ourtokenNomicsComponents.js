import UnderlineImg from '../assets/images/underline.png';

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
                        <div className='our_tokenNomics_div_body_div_btm_mid' ></div>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default OurTokennomicsComponents;