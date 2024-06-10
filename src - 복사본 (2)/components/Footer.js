import sns1 from './../images/sns1.gif'
import sns2 from './../images/sns2.gif'
import sns3 from './../images/sns3.gif'
import sns4 from './../images/sns4.gif'
import sns5 from './../images/sns5.gif'



function Footer(){


    return(
        <footer>
		    <div className="sitemap">
                <h2 className="blind">사이트맵</h2>

                <div className="sm1">
                    <h3>SHOP</h3>
                    <ul>
                        <li>Woman</li>
                        <li>Man</li>
                        <li>Girl</li>
                        <li>Boy</li>
                    </ul>
                </div>
            </div>

            <div className="info">
                <h2 className="blind">회사 기타 정보</h2>
                
                <ul className="sns">
                    <li><img src={sns1} /></li>
                    <li><img src={sns2} /></li>
                    <li><img src={sns3} /></li>
                    <li><img src={sns4} /></li>
                    <li><img src={sns5} /></li>
                </ul>

                <p>The content of this site is copyright-protected and is the property of Full and Bear<br />
                concept is to offer fashion and quality at the best price in a sustainable way.<br />
                Full and Bear hassince it was founded in grown into one of <br />
                the world's leading fashion companies.</p>

                
            </div>

        </footer>
    )
}


export default Footer;

