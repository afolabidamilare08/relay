import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { MdDehaze } from 'react-icons/md';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


const HeaderComponents = () => {

    const content = (
        <PopoverContent>
          <div className="px-1 py-2" >

                <Link to="#" style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >About</Link>

                    <Link to="#" style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >Docs</Link>

                    <Link to="#" style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >Links</Link>

                <button className='header_wallet' style={{
                    display:"block",
                    marginTop:".5rem",
                    fontSize:'1rem'
                }} >
                Connect Wallet
            </button>
          </div>
        </PopoverContent>
      );

    return (

        <div className="header" >

            <div className='header_logo' >
                <img src={Logo} alt='logo' className='header_logo_img' />
                <h4 className='header_logo_txt' >Relay</h4>
            </div>

            <nav className='header_nav' >
                <Link to="#" >About</Link>
                <Link to="#" >Docs</Link>
                <Link to="#" >Links</Link>
            </nav>

            <button className='header_wallet' >
                Connect Wallet
            </button>

            <Popover key={'bottom-end'} placement={'bottom-end'} color="primary">
                <PopoverTrigger>
                <button className='header_menu' >
                    <MdDehaze className='header_menu_ic' /> 
                </button>
                </PopoverTrigger>
                {content}
            </Popover>

        </div>

    );

}

export default HeaderComponents;