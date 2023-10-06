import RoadMapComponents from "../components/RoadMapComponents";
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

            </div>

        </div>

    );

}


export default LandingPage;