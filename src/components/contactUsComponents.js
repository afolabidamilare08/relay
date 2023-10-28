import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/Appcontext";


const ContactSectionComponents = () => {

    const { comingsoon } = useContext(AppContext)

    return (

        <div className='contact_us' >

            <div className="contact_us_center" >

               <h5>Relay</h5> 

               <Link to={"#"} onClick={ comingsoon } className="contact_us_center_button" >
                Try Now
               </Link>

            </div>

        </div>

    );

}

export default ContactSectionComponents;