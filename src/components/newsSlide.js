import React, { useState } from 'react';
import newsData from "../resource/newsData.json"
import styled from 'styled-components'
import Slider from 'react-slick';
import './newsSlide.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container=styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledSlider=styled(Slider)`
  max-width:1060px;
  margin-bottom:90px;
`

export default function NewsSlide(title, subtitle, imgsrc){
  const setting={
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2
  }
  return(
    <Container>
      <Title title="#급성장중" subtitle="회사를 소개합니다." imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"/>
      <StyledSlider {...setting}>
        {newsData.news1.map((news)=>(
          <Card header={news.header} logoImgsrc={news.logoImgsrc} name={news.name} category={news.category}/>
        ))}
      </StyledSlider>
    </Container>
  )
}

function Title({title, subtitle, imgsrc}){
  return (
      <header class="flex flex-col items-center mb-2">
          <h2 class="flex text-lg mb-2.5"> 
              <a class="font-bold" href="naver.com">
                  {title}
              </a>
              <img class="w-6 h-6 ml-1 mr-2" src={imgsrc} alt="newImg"/>
              <span>{subtitle}</span>
          </h2>
          <div class="text-xs font-semibold text-gray-500">
              포지션으로 더보기&gt;
          </div>
      </header>
  )
}

function Card({header, logoImgsrc, name, category}){
  return (
      <div class="p-2.5" style={{width:"540px"}}>
          <div>
              <header 
              role="img" 
              class="bg-cover rounded-md bg-center"
              style={{
                  backgroundImage:`url(${header})`,
                  paddingBottom: "52%"}}/>
          </div>
          <div class="flex mt-3.5 justify-between">
              <div class="flex">
                  <img class="w-10 h-10 mr-3 mt-0.5 border border-slate-200" src={logoImgsrc} alt="logoImgsrc"/>
                  <div class="flex flex-col justify-between h-full">
                      <div class="text-base font-bold">{name}</div>
                      <div class="text-sm font-medium text-slate-400 ">{category}</div>
                  </div>
              </div>
              <button class="border border-slate-200 text-blue-600 rounded-full py-1 px-6 text-xs font-bold">팔로우</button>
          </div>
      </div>
  )
}