import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/Appcontext";


const ContactSectionComponents2 = () => {

    const { comingsoon } = useContext(AppContext)

    return (

        <div className='contact_us' >

            <div className="contact_us_center" >

               <h5>Relay</h5> 

               <Link to={"/setuptrade"} className="contact_us_center_button" >
                Read the docs
               </Link>

            </div>

        </div>

    );

}

export default ContactSectionComponents2;