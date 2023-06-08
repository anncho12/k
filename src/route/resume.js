function Card({title, info, info2, imgsrc, bgcolor}){
    return (
        <li className="w-[520px] h-[480px] flex flex-wrap content-between pt-[50px] text-left rounded-xl mt-[20px]" style={{backgroundColor:bgcolor}}>
            <h1 className="font-bold text-2xl pl-[50px]">{title}</h1>
            <h3 className="font-medium text-md pl-[50px]">{info}<br/>{info2}</h3>
            <img src={imgsrc} alt="CardImg"/>
        </li>
    )
}



export default function ResumePage(){
    return (
        <div className="relative top-[47px]">
            <div className="h-[442px] bg-cover" style={{backgroundImage:"url(https://static.wanted.co.kr/images/userweb/resume_intro/intro_img_web.png)"}}>
                <div className="w-full text-center pt-[100px]" >
                    <h1 className="text-white font-extrabold text-5xl">합격을 부르는 이력서</h1>
                    <h2 className="text-white font-medium text-xl mt-5">원티드 자소서로 지원시 <br/> 일반 서류보다 서류 합격률이 2배 이상 높아집니다.</h2>
                    <div className="mt-14">
                        <button className="mr-3 rounded-full bg-white text-blue-700 px-5 py-3 font-bold border border-blue-700">이력서 관리</button>
                        <button className=" rounded-full bg-blue-700 text-white px-5 py-3 font-bold ">새 이력서 작성</button>
                    </div>
                </div>
            </div>
            <section className="text-center py-[100px] w-full">
                <div className="text-center max-w-[1060px] m-auto">
                <h1 className="text-4xl font-bold">원티드 이력서는 이런점이 좋아요!</h1>
                <ul className="mt-12 flex flex-wrap justify-between">
                    <Card 
                        title="이력서 하나로 모든 준비 끝" 
                        info="이력서 작성부터 지원까지 한 곳에서!" 
                        info2="회사별 양식에 맞출 필요 없이 하나의 이력서만 작성하세요." 
                        imgsrc="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_01.png" 
                        bgcolor="#f1f7fe"
                    />
                    <Card 
                        title="완성도를 높여주는 이력서 코칭" 
                        info="이력서 코칭*으로 서류 합격률 30% UP" 
                        info2="300만 합격 데이터를 분석해 합·불합격 단어를 알려드려요." 
                        imgsrc="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_02.png" 
                        bgcolor="#f1f1fe"
                    />
                    <Card 
                        title="이력서만 등록해도 찾아오는 면접 제안" 
                        info="매치업은 서류 전형 없이 바로 면접 진행!" 
                        info2="채용담당자가 직접 면접을 제안합니다." 
                        imgsrc="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_03.png" 
                        bgcolor="#f3f8ee"
                    />
                    <Card 
                        title="언제 어디서나 자유롭게 작성" 
                        info="주말엔 노트북, 출퇴근길엔 스마트폰으로." 
                        info2="자유롭게 작성하고 필요할 땐 PDF로 저장하세요." 
                        imgsrc="https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_04.png" 
                        bgcolor="#ecf8fb"
                    />
                </ul>
                </div>
            </section>
            <section className="bg-gray-100 pt-[100px] relative after:h-[150px] after:bg-gradient-to-t from-gray-100 to-[hsla(0,0%,97%,0)] after:content-[''] after:w-full after:block after:bottom-0 after:z-50 after:absolute ">
                <div className="font-medium text-4xl text-center">쓰는 사람도 보는 사람도 편하게!</div>
                <div className="bg-white mt-[50px] max-w-[1060px] pt-[90px] px-[90px] pb-[20px]  m-auto">
                    <div className="font-bold" id="상단">
                        <h1 className="text-gray-400 text-2xl">김티드</h1>
                        <div className="flex justify-between pt-7">
                            <div className="text-sm">이메일: wanted@wantedlab.com<br/>연락처: 000-0000-0000</div>
                            <div className="flex items-center justify-center text-emerald-500 text-sm shadow-md px-5 h-[36.55px] rounded-md">성별, 사진 등 불필요한 개인정보 최소화</div>
                        </div>
                        <p className="text-gray-400 pt-7">Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다.<br/>새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.</p>
                        <div className="flex justify-between pt-7">
                            <ul className="list-disc pl-[25px]">
                                <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                                <li className="pt-3">다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                                <li className="pt-3">제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                                <li className="pt-3">프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                            </ul>
                            <div className="flex items-center justify-center text-emerald-500 text-sm shadow-md px-5 h-[36.55px] rounded-md">깔끔한 UI와 가독성 높은 디자인</div>
                        </div>
                        
                    </div>
                    <hr className="my-14 color h-px bg-gray-500"/>
                    <div className="flex">
                        <div className="w-[78px] text-gray-400">경력</div>
                        <div className="w-full">
                            <div className="flex justify-between text-gray-400">
                                <div><div className="font-bold text-lg">원티드랩</div><div>프론트엔드팀/팀원</div></div>
                                <div className="text-lg">2020.07~현재 재직 중</div>
                            </div>
                            <ul className="list-disc">
                                <li className="ml-5 text-sm">
                                    <h6 className="my-5">글로벌 채용 서비스 신규 개발   2021.08 - 2022.04</h6>
                                    <p>메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 70%)<br/>- 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시<br/>- 사용 기술: React.js, Next.js, redux, styled-component<br/>- 링크: https://www.wantedglobal.com</p>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 pt-[50px] pb-[100px]">
                <div className="mt-14 justify-center flex">
                    <button className="mr-3 rounded-full bg-white text-blue-700 px-5 py-3 font-bold border border-blue-700">샘플 다운로드</button>
                    <button className=" rounded-full bg-blue-700 text-white px-5 py-3 font-bold ">새 이력서 작성</button>
                </div>
            </section>
            <section className="h-[452px] mb-10">
                <div className="items-center text-left h-full flex max-w-[1060px] m-auto relative">
                    <div>
                        <div className="font-bold text-4xl">
                            <div className="mb-3">이력서 완성하면 </div>
                            <div className="flex">
                            <img src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png" className="w-[198px] h-[33px]"  alt="ai_logo"></img>가 포지션 추천까지
                            </div>
                        </div>
                        <p className="font-medium my-10">
                        이력서를 분석하여 딱 맞는 포지션을 찾아드려요.<br/>원티드AI가 추천한 포지션은 서류합격률이 일반 지원 대비 2배 높습니다.
                        </p>
                        <button className=" rounded-full bg-blue-700 text-white px-5 py-3 font-bold ">지금 시작하기</button>
                    </div>
                    <img className="absolute left-[575px] bottom-0 w-[516px]" src="https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png"/>
                </div>
            </section>
        </div>
    )
}