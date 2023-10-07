import RoadMapComponents from "../components/RoadMapComponents";
import ContactSectionComponents from "../components/contactUsComponents";
import HeroSectionComponents from "../components/heroSectionComponents";
import OurTokennomicsComponents from "../components/ourtokenNomicsComponents";
import UsecasesComponents from "../components/usecasesComponents";

const LandingPage = () => {

    return (

        <div>

            <HeroSectionComponents/>

            <div className="landing_page_oth" >

                <UsecasesComponents/>

                <RoadMapComponents/>

                <OurTokennomicsComponents/>

                <ContactSectionComponents/>

            </div>

        </div>

    );

}


export default LandingPage;