import { Routes, Route, Link } from "react-router-dom";

import logo from "./../images/airbnb.svg";
import gnb01 from "./../images/gnb_icon01.jpg";
import gnb02 from "./../images/gnb_icon02.jpg";
import gnb03 from "./../images/gnb_icon03.jpg";
import gnb04 from "./../images/gnb_icon04.jpg";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src={logo} alt="에어비앤비" />
        </Link>
      </h1>
      <nav className="gnb">
        <ul>
          <li>
            <Link to="/contents1">
              <img src={gnb01} alt="열대 지역" />
              <p>열대 지역</p>
            </Link>
          </li>
          <li>
            <Link to="/contents2">
              <img src={gnb02} alt="멋진 수영장" />
              <p>멋진 수영장</p>
            </Link>
          </li>
          <li>
            <Link to="/contents3">
              <img src={gnb03} alt="한적한 시골" />
              <p>한적한 시골</p>
            </Link>
          </li>
          <li>
            <Link to="/contents4">
              <img src={gnb04} alt="상징적 도시" />
              <p>상징적 도시</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
