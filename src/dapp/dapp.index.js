import { Link, 
    NavLink, 
    Route,
     Routes
} from 'react-router-dom';
import '../sass/main.scss';
import LogoImg from '../assets/images/logo.png';
import TwitterImg from '../assets/images/twitter.png';
import TelegramImg from '../assets/images/telegram.png';
import MyGImg from '../assets/images/my_g.png';
import DiscordImg from '../assets/images/discord.png';
import OtcDapp from './dapp.otc';
import { AiOutlineCopyrightCircle} from 'react-icons/ai';
import SetuptradeDapp from './dapp.setuptrade';
import StakingPage from './dapp.stakings';

function DappIndex({ component }) {


  return (

    <div className='dappIndex' >
      
      <div className='dappIndex_left' >

        <div>

            <Link className='dappIndex_left_logo' >
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
                <div className='dappIndex_left_btm_wallet_center' >0x0000...0000</div>
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

      <div className='dappIndex_right' >
        { component }
        <div className='dappIndex_right_btm1' >

        </div>

        <div className='dappIndex_right_btm' >
            <AiOutlineCopyrightCircle color='#FDFDFE' />
            2023.RELAY
        </div>

      </div>

    </div>

  );
}

export default DappIndex;
