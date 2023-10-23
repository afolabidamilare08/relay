import { Link, 
    NavLink, 
} from 'react-router-dom';
import '../sass/main.scss';
import LogoImg from '../assets/images/logo.png';
import TwitterImg from '../assets/images/twitter.png';
import TelegramImg from '../assets/images/telegram.png';
import MyGImg from '../assets/images/my_g.png';
import DiscordImg from '../assets/images/discord.png';
import { AiOutlineCopyrightCircle} from 'react-icons/ai';
import { useContext } from 'react';
import AppContext from '../context/Appcontext';
import { NormalBackdrop } from '../components/backDropComponent';
import {  motion } from 'framer-motion';


function DappIndex({ component }) {

    const { sideNav, UpdatesideNav, enableWeb3, displayAccount } = useContext(AppContext)

  return (

    <div className='dappIndex' >
      
        <div className='dappIndex_left' >

            <div>

                <Link className='dappIndex_left_logo' to={'/trades'} >
                    <img src={LogoImg} alt='log' />
                    <h5>Relay</h5>
                </Link>

                <div className='dappIndex_left_div' >

                    <NavLink 
                        to={'/setuptrade'} 
                        className={({ isActive, isPending }) =>
                            isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                    >
                        <span>💰</span>Setup a trade
                    </NavLink>

                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                        to={'/trades'} 
                    >
                        <span>🤝</span>OTC Trades
                    </NavLink>

                    <NavLink 
                        className={({ isActive, isPending }) =>
                        isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                        to={"/staking"} 
                    >
                        <span>🏦</span>Staking
                    </NavLink>

                    <Link className='dappIndex_left_div_link' >
                        <span>🪙</span>Get $RLY
                    </Link>

                    <Link className='dappIndex_left_div_link' >
                        <span>📚</span>Documentation
                    </Link>

                </div>

            </div>

            <div className='dappIndex_left_btm' >  

                <div className='dappIndex_left_btm_wallet' >

                    { displayAccount ? 

                        <div className='dappIndex_left_btm_wallet_center' >{ displayAccount ? displayAccount : '' }</div>

                    :
                    
                        <div className='dappIndex_left_btm_wallet_center' style={{
                            cursor:"pointer"
                        }} onClick={ () => enableWeb3() } >Connect Wallet</div>

                    }

    
                </div>

                <div className='dappIndex_left_btm_socials' >

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={TwitterImg} alt='twitter' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={TelegramImg} alt='telegram' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={MyGImg} alt='myg' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={DiscordImg} alt='discord' />
                    </Link>

                </div>

            </div>

        </div>
 
      { !sideNav ? <></> :
      
        <motion.div className='dappIndex_left special_sidenav'
            initial={{ scaleX: 0,transformOrigin:"0% 0%", opacity:1}}
            whileInView={{ scaleX: 1,transformOrigin:"0% 0%", opacity:1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
        >

            <div>

                <Link className='dappIndex_left_logo' to={'/trades'} 
                        onClick={ () => UpdatesideNav() }
            
                >
                    <img src={LogoImg} alt='log' />
                    <h5>Relay</h5>
                </Link>

                <div className='dappIndex_left_div' >

                    <NavLink 
                        onClick={ () => UpdatesideNav() }
                        to={'/setuptrade'} 
                        className={({ isActive, isPending }) =>
                            isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                    >
                        <span>💰</span>Setup a trade
                    </NavLink>

                    <NavLink
                        onClick={ () => UpdatesideNav() }
                        className={({ isActive, isPending }) =>
                        isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                        to={'/trades'} 
                    >
                        <span>🤝</span>OTC Trades
                    </NavLink>

                    <NavLink 
                        onClick={ () => UpdatesideNav() }
                        className={({ isActive, isPending }) =>
                        isPending ? "dappIndex_left_div_link" : isActive ? "dappIndex_left_div_link_active" : "dappIndex_left_div_link"
                        }
                        to={"/staking"} 
                    >
                        <span>🏦</span>Staking
                    </NavLink>

                    <Link 
                        className='dappIndex_left_div_link'
                        onClick={ () => UpdatesideNav() }
                     >
                        <span>🪙</span>Get $RLY
                    </Link>

                    <Link 
                        className='dappIndex_left_div_link'
                        onClick={ () => UpdatesideNav() }
                    >
                        <span>📚</span>Documentation
                    </Link>

                </div>

            </div>

            <div className='dappIndex_left_btm' >  

                <div className='dappIndex_left_btm_wallet' >
                   
                { displayAccount ? 

                    <div className='dappIndex_left_btm_wallet_center' >{ displayAccount ? displayAccount : '' }</div>

                    :

                    <div className='dappIndex_left_btm_wallet_center' style={{
                        cursor:"pointer"
                    }} onClick={ () => enableWeb3() } >Connect Wallet</div>

                }

                </div>

                <div className='dappIndex_left_btm_socials' >

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={TwitterImg} alt='twitter' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={TelegramImg} alt='telegram' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={MyGImg} alt='myg' />
                    </Link>

                    <Link className='dappIndex_left_btm_socials_link' >
                        <img src={DiscordImg} alt='discord' />
                    </Link>

                </div>

            </div>

        </motion.div>
      
      }

      <div className='dappIndex_right' >
        { component }
        <div className='dappIndex_right_btm1' >

        </div>

        <div className='dappIndex_right_btm' >
            <AiOutlineCopyrightCircle color='#FDFDFE' />
            2023.RELAY
        </div>

      </div>

     { !sideNav ? <></> : <NormalBackdrop closeModal={ () => UpdatesideNav() } /> }

    </div>

  );
}

export default DappIndex;
