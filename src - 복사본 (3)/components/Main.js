import { Routes, Route, Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import v1 from "./../images/visual01.webp";
import v2 from "./../images/visual02.webp";
import v3 from "./../images/visual03.png";
import visual from "./../images/Spainr.webp";


function Main(){
  return (
     <div className="main">

        <div className='visual'>
          <img src={visual} />

          <div className='form_wrap'>
            <form>
              <fieldset>
                <legend className='blind'>로그인</legend>
                <h2>마르베야의 저택 휴가지 숙소</h2>
                <p>에어비앤비에서 독특한 저택을 찾아 예약하세요.</p>
                <p>
                  <label for="place" class="blind">위치</label>
                  <select id="place" className='place' placeholder="Marbella, Spain">
                    <option>Marbella, Spain</option>
                    <option>Marbella, Costa del Sol, Málaga</option>
                    <option>Marbella, San Pedro de Alcántara</option>
                    <option>Puerto Banús, Marbella</option>
                    <option>Old Town, Marbella</option>
                  </select>
                </p>
                <div className='date_wrap'>
                  <div>
                    <p><label for="date1">체크인 날짜</label></p> 
                    <input type="date" id="date1" max="2077-06-20"  min="2077-06-05"
                    value="2024-06-15" data-placeholder="날짜 선택" />
                  </div>
                  <div>
                    <p><label for="date2">체크아웃 날짜 </label></p> 
                    <input type="date" id="date2" max="2077-06-20"  min="2077-06-05"
                    value="2024-06-15" 
                    data-placeholder="날짜 선택" />
                  </div>
                </div>
                <p className='submit'>
                  <input type='submit' value='검색'/>
                </p>
              </fieldset>
            </form>
          </div>


        </div>



          <div className="visual">              
                <Swiper
                  spaceBetween={0}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img src={v1} /></SwiperSlide>
                  <SwiperSlide><img src={v2} /></SwiperSlide>
                  <SwiperSlide><img src={v3} /></SwiperSlide>
                </Swiper>
            </div>


            {/* { <div className="group">
              <Box g={v1} d="엑스 맨션에서 훈련하기" t="뉴캐슬, 뉴욕, 미국" pr="&#8361;52,546" />   
              <Box g={v2} d="오르세 미술관에서 올림픽대회 개막식 관람하기"  t="파리, 프랑스" pr="6월 13일부터 예약 가능" /> 
              <Box g={v3} d="오르세 미술관에서 올림픽대회 개막식 관람하기"  t="파리, 프랑스" pr="6월 13일부터 예약 가능" /> 
            </div> } */}

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