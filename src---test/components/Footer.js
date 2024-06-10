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
                    <h3>에어비앤비 지원</h3>
                    <ul>
                        <li>도움말 센터</li>
                        <li>에어커버</li>
                        <li>차별 반대</li>
                        <li>장애인 지원</li>
                        <li>예약 취소 옵션</li>
                        <li>이웃 민원 신고</li>
                    </ul>
                </div>
                <div className="sm2">
                    <h3>호스팅</h3>
                    <ul>
                        <li>당신의 공간을 에어비앤비하세요</li>
                        <li>호스트를 위한 에어커버</li>
                        <li>호스팅 자료</li>
                        <li>커뮤니티 포럼</li>
                        <li>책임감 있는 호스팅</li>
                        <li>무료 호스팅 클래스 참여하기</li>
                    </ul>
                </div>
                <div className="sm3">
                    <h3>에어비앤비</h3>
                    <ul>
                        <li>뉴스룸</li>
                        <li>새로운 기능</li>
                        <li>호스팅 자료</li>
                        <li>채용정보</li>
                        <li>투자자 정보</li>
                        <li>Airbnb 긴급 숙소</li>
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


                <p>© 2024 Airbnb, Inc.</p>
                
                <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>

                
            </div>

        </footer>
    )
}


export default Footer;

