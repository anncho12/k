import {AiOutlineUpload} from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

export default function AipassPage(){
    return(
        <main className="pt-32">
            <section>
                <header className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                    이력서만 등록해도 나에게 딱 맞는 포지션 추천!
                    </h1>
                    <h2 className="text-sm">내 이력서를 분석하여 합격률이 높은 포지션을 알려드려요.<br/>서류합격률은 이력서에 작성된 내용과 포지션과의 업무일치도를 기준으로 계산됩니다.</h2>
                </header>
                <div className="flex items-center w-full justify-center mt-10">
                    <button className="w-[300px] h-[180px] rounded-2xl border shadow-lg flex flex-col justify-center items-center hover:!text-blue-600 hover:border-blue-600">
                        <AiOutlineUpload size="45"/>
                        <div className="font-bold text-lg mt-8 mb-2">이력서를 업로드해보세요.</div>
                        <div className=" text-xs">파일 형식: pdf, doc, doxc</div>
                    </button>
                    <button className="w-[300px] h-[180px] rounded-2xl border shadow-lg flex flex-col justify-center items-center hover:!text-blue-600 hover:border-blue-600 ml-5">
                        <BiPencil size="45"/>
                        <div className="font-bold text-lg mt-8 mb-2">이력서를 새로 작성할래요.</div>
                        <div className="text-xs">작성 후 PDF로 저장 가능합니다.</div>
                    </button>
                </div>
            </section>
            <section className="w-full bg-[#f4f8fb] mt-20 pt-16 pb-32 flex flex-col content-center items-center relative z-[-2]">
                <div className="w-[95px] h-[95px] bg-[rgba(122,168,255,.9)] absolute bottom-[65px] left-[25%] backdrop-blur-sm z-[-1]" style={{filter:" blur(58px)"}}/>
                <div className="w-[119px] h-[119px] bg-[#bcfce0] absolute top-[0px] right-[32%] backdrop-blur-sm z-[-1]" style={{filter:" blur(58px)"}}/>
                <div className="flex">
                    <img src="https://static.wanted.co.kr/images/ai/img-mo.png" alt="ai-logo" className="w-[135px]"/>
                    <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="logo-wantedai" className="mb-[3px] w-[172px] h-[28px] mt-16"></img>
                </div>
                <h2 className="text-lg font-bold">서류 합격률이 높은 포지션을 알려드려요.</h2>
                <h3 className="text-sm mb-[45px]">원티드 AI 가 추천하는 포지션에 지원하는 경우<br/>일반 지원 대비 서류 합격률이 2배나 높아집니다.</h3>
                <h2 className="text-lg font-bold">실제 합격 데이터 기반으로 맞춤 추천해드려요</h2>
                <h3 className="text-sm">200만 건의 실제 합격 데이터를 머신러닝하여<br/>업로드된 이력서를 분석하고 맞춤 포지션을 추천해드립니다.</h3>
            </section>
        </main>
    )
}