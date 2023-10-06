import UnderlineImg from '../assets/images/underline.png';
import MoneyImg from '../assets/images/grommet-icons_money.png';
import TradeImg from '../assets/images/game-icons_trade.png';
import UsecaseImg from '../assets/images/use_case.png';
import pricImg from '../assets/images/ic_twotone-price-check.png';
import ShildImg from '../assets/images/shild.png';

const UsecasesComponents = () => {

    return (

        <div className='use_case_home' >

            <div className="use_case_home_header" >

                <h5>Use <span>Cases</span>
                
                    <img src={UnderlineImg} alt="underline" />

                </h5>

            </div>


            <div className='use_case_home_Fpart' >

                <div className='use_case_home_Fpart_div' >

                    <div className='use_case_home_Fpart_div_top' >
                        <img src={MoneyImg} alt='money' className='' />
                        <div className='use_case_home_Fpart_div_top_cover' >

                        </div>
                    </div>

                    <h5 className='use_case_home_Fpart_div_title' >Liquidity for veTokens:</h5>

                    <h6>
                        Market makers and liquidity providers employ 
                        OTC trades to enhance the trading experience 
                        for less liquid assets. With Relay, 
                        this capability is now at your fingertips. 
                        This enables individuals and protocols 
                        to attain voting power at rates below market 
                        averages, concurrently providing immediate 
                        liquidity to sellers for their otherwise 
                        less-liquid assets.
                    </h6>

                </div>

                <div className='use_case_home_Fpart_div' >

                    <div className='use_case_home_Fpart_div_top' >
                        <img src={TradeImg} alt='trade' className='' />
                        <div className='use_case_home_Fpart_div_top_cover' >

                        </div>
                    </div>

                    <h5 className='use_case_home_Fpart_div_title' >Large Volume Trades:</h5>

                    <h6>
                        OTC trades are commonly used for 
                        large-volume transactions. Institutional investors, 
                        high-net-worth individuals, and businesses 
                        often prefer OTC trading to avoid market 
                        slippage and minimize the impact of their 
                        trades on market prices.
                    </h6>

                </div>

            </div>


            <img src={UsecaseImg} alt='dhyd' className='use_case_home_img' />

            <div className='use_case_home_Fpart' >

                <div className='use_case_home_Fpart_div' >

                    <div className='use_case_home_Fpart_div_top' >
                        <img src={pricImg} alt='money' className='' />
                        <div className='use_case_home_Fpart_div_top_cover' >

                        </div>
                    </div>

                    <h5 className='use_case_home_Fpart_div_title' >Price Negotiation:</h5>

                    <h6>
                        OTC trades offer the flexibility to negotiate 
                        prices directly between buyers and sellers. 
                        This can be especially useful when dealing with 
                        illiquid assets or unique trading terms.
                    </h6>

                </div>

                <div className='use_case_home_Fpart_div' >

                    <div className='use_case_home_Fpart_div_top' >
                        <img src={ShildImg} alt='trade' className='' />
                        <div className='use_case_home_Fpart_div_top_cover' >

                        </div>
                    </div>

                    <h5 className='use_case_home_Fpart_div_title' >Privacy:</h5>

                    <h6>
                        P2P OTC trades allow parties to trade 
                        cryptocurrencies or assets without 
                        the need for a centralized exchange.
                    </h6>

                </div>

            </div>

        </div>

    );

}

export default UsecasesComponents;