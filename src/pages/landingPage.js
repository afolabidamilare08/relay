import RoadMapComponents from "../components/RoadMapComponents";
import HeroSectionComponents from "../components/heroSectionComponents";
import UsecasesComponents from "../components/usecasesComponents";

const LandingPage = () => {

    return (

        <div>

            <HeroSectionComponents/>

            <div className="landing_page_oth" >

                <UsecasesComponents/>

                <RoadMapComponents/>



            </div>

        </div>

    );

}


export default LandingPage;