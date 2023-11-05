import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { MdDehaze } from 'react-icons/md';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useContext } from 'react';
import AppContext from '../context/Appcontext';


const PresaleHeader = () => {

    const { comingsoon } = useContext(AppContext)

    const content = (
        <PopoverContent>
          <div className="px-1 py-2" >
                    <Link to={'/staking'} style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >Website</Link>

                    <a href="https://relay-2.gitbook.io/relay/" style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >Dapp</a>
          </div>
        </PopoverContent>
      );

    return (

        <div className="header" >

            <div className='presale_header_logo' >
                <img src={Logo} alt='logo' className='presale_header_logo_img' />
                <h4 className='presale_header_logo_txt' >Relay</h4>
            </div>


            <div>
                <Link to={"/setuptrade"} className='presale_header_wallet2' style={{
                    marginRight:'.5rem'
                }} >
                    Website
                </Link>

                <Link to={"/setuptrade"} className='presale_header_wallet' >
                    Open Dapp
                </Link>
            </div>

            <Popover key={'bottom-end'} placement={'bottom-end'} color="primary">
                <PopoverTrigger>
                <button className='presale_header_menu' >
                    <MdDehaze className='presale_header_menu_ic' /> 
                </button>
                </PopoverTrigger>
                {content}
            </Popover>

        </div>

    );

}

export default PresaleHeader;