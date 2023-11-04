import HeroBg from '../assets/images/hero_bg.png';
import roundImg from '../assets/images/hero_vector.png'
import HeroSprial from '../assets/images/hero_spiral.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/Appcontext';
import Logo from '../assets/images/heroLogo.png';

const PresaleHeroSection = () => {

    const { comingsoon } = useContext(AppContext)

    return (

        <div className='presale_hero_section' >


            <div className='presale_hero_section_top' >
                <img src={Logo} alt='' />
                <h4>Relay</h4>
            </div>

            <div className='presale_hero_section_main' >

                Innovative DeFi tool for
                secure OTC trading experience.

            </div>

            <img src={HeroBg} alt='hero_bg' className='presale_hero_section_bg' />
            <img src={HeroSprial} alt='hero_sg' className='presale_hero_section_spiral' />

        </div>

    );

}

export default PresaleHeroSection;