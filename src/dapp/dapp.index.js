import { Link, 
    // Route,
    //  Routes
} from 'react-router-dom';
import '../sass/main.scss';
import LogoImg from '../assets/images/logo.png';
import TwitterImg from '../assets/images/twitter.png';
import TelegramImg from '../assets/images/telegram.png';
import MyGImg from '../assets/images/my_g.png';
import DiscordImg from '../assets/images/discord.png';

function DappIndex() {
  return (

    <div className='dappIndex' >
      
      <div className='dappIndex_left' >

        <div>

            <Link className='dappIndex_left_logo' >
                <img src={LogoImg} alt='log' />
                <h5>Relay</h5>
            </Link>

            <div className='dappIndex_left_div' >

                <Link className='dappIndex_left_div_link' >
                    <span>💰</span>Setup a trade
                </Link>

                <Link className='dappIndex_left_div_link' >
                    <span>🤝</span>OTC Trades
                </Link>

                <Link className='dappIndex_left_div_link' >
                    <span>🏦</span>Staking
                </Link>

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

    </div>

  );
}

export default DappIndex;
