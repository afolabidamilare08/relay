import UnderlineImg from '../assets/images/underline.png';
import LockImg from '../assets/images/lock.png';
import VoteImg from '../assets/images/vote.png';
import BoostImg from '../assets/images/boost.png';

const MainpurposeComponents = () => {

    return (

        <div className='our_purpose_home' >

            <div className='our_purpose_home_1'  >

                <div className="our_purpose_home_header" >

                    <h5>Our <span>Main Purpose</span>
                    
                        <img src={UnderlineImg} alt="underline" />

                    </h5>

                </div>


                <div className='our_purpose_home_main' >

                    <div className='our_purpose_home_main_div' >

                        <img alt='' src={LockImg} />

                        <h5>Unlocking Liquidity for veTokens</h5>

                        <h6>
                            VeTokens, also known as vote-escrowed tokens, 
                            have been synonymous with decentralized governance 
                            but faced liquidity challenges. Relay, an Over-The-Counter 
                            (OTC) P2P trading solution, transforms this narrative by 
                            providing immediate liquidity. Sellers can now unlock 
                            the intrinsic value of their assets without waiting 
                            for lockup periods to expire, offering new financial possibilities.
                        </h6>

                    </div>

                    <div className='our_purpose_home_main_div' >

                        <img alt='' src={VoteImg} />

                        <h5>Enhancing Voting Power</h5>

                        <h6>
                            Buyers using Relay can acquire veTokens at below-market prices, 
                            enhancing their voting power within decentralized governance 
                            structures cost-effectively. This approach fosters a more 
                            decentralized and inclusive distribution of voting power, 
                            benefiting the entire ecosystem.
                        </h6>

                    </div>

                    <div className='our_purpose_home_main_div' >

                        <img alt='' src={BoostImg} />

                        <h5>Boosting Confidence and Liquidity</h5>

                        <h6>
                            Relay's impact extends beyond individual users. 
                            By enabling OTC trading of veTokens, 
                            it boosts confidence in this asset class, 
                            attracting more participants to veToken governance. 
                            This increase in participation and liquidity creates 
                            a virtuous cycle, reinforcing the value of veTokens 
                            and attracting additional resources to decentralized ecosystems.
                        </h6>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MainpurposeComponents;