import HeroBg from '../assets/images/hero_bg.png';
import roundImg from '../assets/images/hero_vector.png'
import HeroSprial from '../assets/images/hero_spiral.png'

const HeroSectionComponents = () => {

    return (

        <div className='hero_section' >

            <div className="hero_section_main" >
                
                <div className="hero_section_main_center" >

                    <div className="hero_section_main_center_txt" >

                        <h5>
                            Innovative DeFi tool for
                            secure OTC trading 
                            <h5 style={{position:"relative"}} >  experience.
                                <img src={roundImg} alt='vexxf' />
                            </h5>
                        </h5>


                    </div>

                    <button className="hero_section_main_center_btn" >
                        Open Dapp
                    </button>

                </div>

                <div className="hero_section_main_relay" >
                    <h5>R</h5>
                    <h5>E</h5>
                    <h5>L</h5>
                    <h5>A</h5>
                    <h5>Y</h5>
                </div>

            </div>

            <img src={HeroBg} alt='hero_bg' className='hero_section_bg' />
            <img src={HeroSprial} alt='hero_sg' className='hero_section_spiral' />

        </div>

    );

}

export default HeroSectionComponents;