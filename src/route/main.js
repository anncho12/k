import TopBanner from "../components/topBanner";
import LineBanner1 from "../components/LineBanner";
import MiddleBanner1 from "../components/middleBanner1";
import MiddleBanner2 from "../components/middleBanner2";
import CurEmployNews from "../components/currentEmployment";
import PositionNews from "../components/positionNews";
import React from 'react';
import NewsSlide from "../components/newsSlide";
import candyImage from "../img/candy.png";

function GameButton(){
    const handleButtonClick = () => {
        window.location.href = 'http://localhost:3001';};
    return(
    <div class="rounded-full fixed z-50 right-12 bottom-12 bg-blue-500 p-2">
        <button type="button" onClick={handleButtonClick}>
            <img src={candyImage} alt='candyCrushIcon' className="w-16 h-16 object-contain"></img>
        </button>
    </div>
    )
}

export default function MainPage(){
    return (
        <div>
        <main>
          <section style={{paddingTop:'20px'}}>
            <TopBanner></TopBanner>
          </section>
          <LineBanner1></LineBanner1>
          <article 
            class="pb-16 w-full bg-cover flex flex-col items-center"
            style={{
                background: "#f4f8fb",
                backgroundImage:"url(https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-dev.static.wanted.co.kr%2Fbanner%2FJobsfeed_ai_banner.png&w=1440&q=75)",
                }}>
            <div id='icon'
                style={{
                    paddingTop:"60px", paddingBottom:"40px", }}>
                <img aria-label="wantedai-logo" src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" width="170" alt="logo-wantedai" ></img>
            </div>
            <div id="detail" class="flex leading-4 mb-1.5">
                <img 
                    src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" 
                    width="140" alt="logo-wantedai" style={{marginBottom: "3px"}}/>
                <div class="font-bold ml-0.5" style={{fontSize:"20px", paddingTop: "7px"}}>
                    가 제안하는 합격률 높은 포지션
                </div>
                
            </div>
            <div class="flex flex-col items-center gap-5">
                <h3 class="font-bold text-base text-zinc-600">
                    회원가입하면 포지션을 추천해드려요.
                </h3>
                <button class="w-fit text-base text-zinc-50 font-bold bg-blue-700 py-2.5 px-5 rounded-full">
                    지금 시작하기
                </button>
            </div>
          </article>
          <MiddleBanner1></MiddleBanner1>
          <MiddleBanner2></MiddleBanner2>
          {/* <News></News> */}
          <NewsSlide title="#급성장중" subtitle="회사를 소개합니다." imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"></NewsSlide>
          <hr class='h-[1px] w-[90%] m-auto border-gray-300'/>
          <CurEmployNews></CurEmployNews>
          <hr class='h-px w-[90%] m-auto border-gray-300'/>
          <PositionNews></PositionNews>
          <GameButton/>
        </main>
      </div>
    )
}