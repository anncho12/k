import TopBanner from "../components/topBanner"
import styled from "styled-components";
import careerData from "../resource/careerData.json"
import { AiOutlineSearch, AiOutlineUser, AiOutlineShop, AiOutlineBarChart, AiOutlineClose , AiOutlineLeft, AiOutlineRight, AiOutlineBell, AiOutlineSliders} from "react-icons/ai";

function LineBanner1(){
    return(
        <aside class="w-full my-16" >
                <div class="flex justify-center rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-bold"
                    style={{padding:"21px 13px"}}>
                    직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요
                
            </div>
        </aside>
    )
}

function LineBanner2(){
    return (
        <aside class="mt-16 rounded-lg flex justify-center h-[103px]">
            <div className="w-full rounded-lg overflow-hidden relative bg-[#0d99ff]">
                <img className="absolute z-50 top-[-11px]" src="https://static.wanted.co.kr/images/type-test/typetest-banner-image.png" alt="career-connect-icon"></img>
                <div className="font-bold text-white pl-24 pt-[28px]">
                    <h1 className="text-xl">내 유형과 가장 어울리는 회사는?</h1>
                    <p>유형 테스트 하러 가기</p>
                </div>
            </div>
        </aside>
    )
}
var categorys = ['회사생활', '라이프스타일', 'IT/기술', '커리어고민', '취업/이직', '리더십', '브랜딩', 'HR', '콘텐츠 제작', '인간관계', '게임', '교육', '디자인', 'UX/UI', '마케팅', '경영/전략', 'MD', '데이터', '서비스기회', '개발', '회사생활', '라이프스타일', 'IT/기술', '커리어고민', '취업/이직', '리더십',]; 
function CareerCategoryBtn({text}){
    return (
        <button className="rounded-full border py-[9px] px-[22px] h-[40px] hover:bg-gray-300">
            <span className="font-bold text-gray-400 text-sm">{text}</span>
        </button>
    )
}

const CardHover=styled.li`
    &:hover{  
    transform: translateY(-5px);
  }`

function Card({imgsrc, category, title, date, tag }){
    return (
        <CardHover className="relative list-none text-left " style={{maxWidth:"calc(25% - 15px)"}}>
            <div className="relative border rounded overflow-hidden w-full pb-[70%]">
                <img className="absolute object-cover w-full h-full" alt="CardImg" src={imgsrc}/>
            </div>
            <div className="flex flex-col font-bold my-4">
                <div className="flex">
                    {(category==="아티클")?
                        <div className="flex items-center border-2 rounded-md h-[24px] text-xs border-[#ff9200] text-[#ff9200] px-[6px]"><div>{category}</div></div>:
                        <div className="flex items-center border-2 rounded-md h-[24px] text-xs border-[#FF00F6] text-[#FF00F6] px-[6px]"><div>{category}</div></div>
                    }
                </div>
                <h1 className="text-md mt-2 break-keep">{title}</h1>
            </div>
            <div className="text-xs text-gray-500">
                <div className="mb-2">{date}</div>
                <p className="font-bold">#{tag}</p>
            </div>
        </CardHover>
    )
}

const CategoryScrollBar=styled.div`
    &::-webkit-scrollbar { display: none; };
    height: 3rem;
    overflow-x: scroll;
    white-space: nowrap;
    overflow-y: hidden;
    gap: 8px;
    grid-gap: 8px;
    margin-bottom: 10px;
    display: flex;
    scroll-behavior: smooth;
`

export default function CareerPage(){
    function goleft() {
        document.getElementById('container').scrollLeft += 300;
    };
    function goright() {
        document.getElementById('container').scrollLeft -= 300;
    };

    return(
        <main className="pt-[20px]">
            <TopBanner/>
            <body className="max-w-[1080px] m-auto ">
                <section id="career-insite text-center" className="text-center">
                    <h1 className="text-xl font-bold mt-10 mb-7">나에게 필요한 커리어 인사이트</h1>
                    <div className="relative">
                        <CategoryScrollBar className="h-12 overflow-x-scroll whitespace-nowrap overflow-y-hidden gap-10 mx-[45px]" id='container'>
                            {categorys.map((text) => (
                                <CareerCategoryBtn text={text} />
                            ))}
                        </CategoryScrollBar>
                        <button className="absolute top-0 right-0 bg-white rounded-full border h-[40px] w-[40px] flex items-center justify-center hover:bg-gray-300" type="button" onClick={goleft}><AiOutlineRight color="darkgray"/></button>
                        <button className="absolute top-0 left-0 bg-white rounded-full border h-[40px] w-[40px] flex items-center justify-center hover:bg-gray-300" type="button" onClick={goright}><AiOutlineLeft color="darkgray"/></button>
                    </div>
                    <hr/>
                    <div className="flex justify-between text-sm pt-5">
                        <div className="flex rounded-md border px-5 py-2"><AiOutlineSliders size={20}/><span className="pl-1">필터 및 정렬</span></div>
                        <div className="flex rounded-full bg-blue-600 text-white px-5 py-2"><AiOutlineBell size={20}/><span className="pl-1">키워드 알림 신청</span></div>
                    </div>
                    <ul className="flex flex-wrap gap-5 m-auto mt-8">
                        {careerData.map((datas)=>(
                            <Card imgsrc={datas.imgsrc} category={datas.category} title={datas.title} date={datas.date} tag={datas.tag}/>
                        ))}                            
                    </ul>
                </section>
                <LineBanner2/>
                <section className="my-10">
                    <div className="flex border w-full border-solid rounded-lg items-center justify-center mb-16 p-5 shadow-md relative">
                        <div>
                            <h1 className="font-bold text-xl">즐겨보는 크리에이터의 글도 추천하고 싶다면?</h1>
                            <button className="font-bold text-blue-500 mt-3">크리에이터 추천하기</button>
                        </div>
                        <img className="w-[112px] ml-10" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90" alt="크리에이터 추천하기"></img>
                        <div className="absolute top-3 right-3"><AiOutlineClose size={20} color={"lightgray"}/></div>
                    </div>
                </section>
                <hr/>
                <LineBanner1/>
                <section  className="w-full text-center" id="커리어 성장을 위한 맞춤 이벤트">
                    <div className="my-10">
                        <h1 className="font-bold text-xl mb-2">커리어 성장을 위한 맞춤 이벤트</h1>
                        <p className="text-sm">이벤트 전체보기</p>
                    </div>
                </section>
                <hr/>
                <section className="w-full my-20 text-center">
                    <h1 className="text-xl font-bold mb-7">채용 정보를 찾고 계셨나요?</h1>
                    <div className="grid grid-cols-4 border border-slate-200">
                        <div className="flex flex-col items-center py-5 border-r">
                            <AiOutlineSearch size={40}/>
                            <div className="font-bold">채용공고 &gt;</div>
                        </div>
                        <div className="flex flex-col items-center py-5 border-r">
                            <AiOutlineUser size={40}/>
                            <div className="font-bold">내 프로필 &gt;</div>
                        </div>
                        <div className="flex flex-col items-center py-5 border-r">
                            <AiOutlineShop size={40}/>
                            <div className="font-bold">매치업 &gt;</div>
                        </div>
                        <div className="flex flex-col items-center my-5">
                            <AiOutlineBarChart size={40}/>
                            <div className="font-bold">직군별 연봉 &gt;</div>
                        </div>
                    </div>
                </section>
            </body>
        </main>
    )
}