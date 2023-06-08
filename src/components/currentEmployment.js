function CurEmployCard({Imgsrc, title, info}){
    return(
        <div class="m-2">
            <img src={Imgsrc} class="bg-cover rounded-md bg-center"/>
            <h2 class="text-base font-bold text-gray-900 mt-4">{title}</h2>
            <div class="text-xs font-bold text-gray-500 mt-2">{info}</div>
        </div>
    )
}

export default function CurEmployNews(){
    return(
            <article class="py-16 m-auto" style={{maxWidth:"1060px"}}>
                <h2 class="text-xl font-bold mb-9 text-center">테마로 모아보는 요즘 채용</h2>
                <div class="flex">
                    <CurEmployCard
                        Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F264_aa39c308.png&w=520&q=100"
                        title="연봉 Flex! 연봉 상위 10% 기업"
                        info="업계별 상위 연봉을 제시하는 기업을 소개합니다. "
                        logos="[1,2,3,4]"/>
                    <CurEmployCard
                        Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F369_bf1cff11.jpg&w=520&q=100"
                        title="최근 100억 투자 유치 기업 - 개발 포지션"
                        info="2023년 로켓 성장 준비 완료! 성장 가능성 큰 기업들이 채용 중인 포지션을 모아봤어요. "
                        logos="[1,2,3,4]"/>
                </div>
            </article>
    )
}