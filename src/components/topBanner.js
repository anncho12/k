import React from "react";
import Slider from 'react-slick';
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import topBannerData from '../resource/topBannerData.json'

const InfoDiv=styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    padding: 20px;
    margin-left: 33px;
`

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 170px;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
  }
  .slick-prev {
    left: calc((100% - 1210px)/2); /* 왼쪽에 위치시키려면 left 속성을 사용하여 조정 */
    z-index: 1;
    font-size: 0px;

  }
  .slick-next {
    right: calc((100% - 1200px)/2); /* 오른쪽에 위치시키려면 right 속성을 사용하여 조정 */
    font-size: 0px;
  }
`;

const CustomPrevArrow = ({ onClick }) => (
  <div className="slick-prev" onClick={onClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span class="SvgIcon_SvgIcon__root__8vwon"><svg style={{ width: '16px', height: '16px' }} class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg></span>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="slick-next" onClick={onClick} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span class="SvgIcon_SvgIcon__root__8vwon"><svg style={{ width: '16px', height: '16px' }} class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></span>
  </div>
);

export default function TopBanner() {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '60px',
    variableWidth: true,
    autoplay: true, // 자동으로 슬라이드를 넘기기 위해 autoplay를 true로 설정
    autoplaySpeed: 100000, // 슬라이드 간의 시간 간격을 2초(2000밀리초)로 설정
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div class="pt-8">
      <StyledSlider {...settings} style={{ zIndex: 1 }}>
        {topBannerData.map((banner) => (
          <div className='pt-6'>
            <img className="relative w-auto mx-3 rounded overflow-hidden z-10" src={banner.imgsrc} alt={banner.id} />
            <InfoDiv>
              <h2 className="text-lg font-bold">{banner.title}</h2>
              <h3 className="text-xs">{banner.subtitle}</h3>
              <hr />
              <div class="text-blue-700 font-bold text-sm">바로가기 &gt;</div>
            </InfoDiv>
          </div>
        ))}
      </StyledSlider>
    </div>
  );
}