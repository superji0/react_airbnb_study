import { Routes, Route, Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';


import v1 from "./../images/visual01.webp";
import v2 from "./../images/visual02.webp";
import v3 from "./../images/visual03.png";


function Main(){
  return (
     <div className="main">

            <div className="group">
              <Box g={v1} d="엑스 맨션에서 훈련하기" t="뉴캐슬, 뉴욕, 미국" pr="&#8361;52,546" />   
              <Box g={v2} d="오르세 미술관에서 올림픽대회 개막식 관람하기"  t="파리, 프랑스" pr="6월 13일부터 예약 가능" /> 
              <Box g={v3} d="인사이드 아웃 2 속으로 들어가 '핵심 기억' 만들기"  t="호스트: Joy 님" pr="6월부터 예약 가능" /> 
            </div>

    </div>
  )
}

function Box(props){
  return (
     <div className="box">
            <img src={props.g} />
            <p>{props.d}</p>
            <p>{props.t}</p>
            <p className="price">{props.pr}</p>
     </div>
  )
}

export default Main;