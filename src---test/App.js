import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Contents1 from "./components/Contents1.js";
import Contents2 from "./components/Contents2.js";
import Contents3 from "./components/Contents3.js";
import Contents4 from "./components/Contents4.js";

import data from "./data.js";
import data2 from "./data2.js";
import data3 from "./data3.js";
import data4 from "./data4.js";

function App() {
  //처음에 총데이터를 따로 담아둠
  const totalData = data; //열대 지역 데이터
  const totalData2 = data2; //멋진 수영장 데이터
  const totalData3 = data3; //한적한 시골
  const totalData4 = data4; //상징적 도시

  let [sea, setSea] = useState(data);
  let [pool, setPool] = useState(data2);
  let [country, setCountry] = useState(data3);
  let [city, setCity] = useState(data4);

  function seaAdd(add) {
    setSea(add); //해변 스테이트의 값을 add로 변경
  }

  function poolAdd(add) {
    setPool(add);
  }

  function countryAdd(add) {
    setCountry(add);
  }

  function cityAdd(add) {
    setCity(add);
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/ " element={<Main />} />

        <Route
          path="/contents1"
          element={<Contents1 sea={sea} totalData={totalData} />}
        />
        <Route
          path="/contents2"
          element={<Contents2 pool={pool} totalData={totalData2} />}
        />
        <Route
          path="/contents3"
          element={<Contents3 country={country} totalData={totalData3} />}
        />
        <Route
          path="/contents4"
          element={<Contents4 city={city} totalData={totalData4} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
