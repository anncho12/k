function MiniCard({link, Imgsrc, job, company, location, money}){
    return(
        <li class="p-2.5 float-left w-[25%] h-[75%]">
            <a href="link">
                <img class="bg-cover rounded-md bg-center h-auto" src={Imgsrc}/>
                <div class="py-3">
                    <div class="text-sm font-bold ">{job}</div>
                    <div class="text-xs font-bold mt-2">{company}</div>
                    <div class="text-xs text-slate-400 mt-2">{location}</div>
                    <div class="text-xs font-bold mt-2">채용보상금 {money}원</div>
                </div>
            </a>
        </li>
    )
}

export default function PositionNews(){
    return (
        <article id="PositionNews" class="pt-16 pb-12 m-auto" style={{maxWidth:"1060px"}}>
            <h2 class="text-xl font-bold mb-9 text-center">
                요즘 뜨는 포지션
            </h2>
            <ul class="list-none">
                <MiniCard
                    link="https://www.wanted.co.kr/wd/150302"
                    Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F2237%2Fzya13wpnohi0uffa__400_400.jpg&w=400&q=75"
                    job="경영전략실 공시/IR"
                    company="더이엔엠"
                    location="서울, 한국"
                    money="1,000,000"/>
                <MiniCard
                    link="https://www.wanted.co.kr/wd/150302"
                    Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F41451%2Fwwoe0loomsm63csv__400_400.jpg&w=400&q=75"
                    job="경영전략실 공시/IR"
                    company="더이엔엠"
                    location="서울, 한국"
                    money="1,000,000"/>
                <MiniCard
                    link="https://www.wanted.co.kr/wd/150302"
                    Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8177%2Ffr3dtvmomfzj6gbr__400_400.jpeg&w=400&q=75"
                    job="경영전략실 공시/IR"
                    company="더이엔엠"
                    location="서울, 한국"
                    money="1,000,000"/>
                <MiniCard
                    link="https://www.wanted.co.kr/wd/150302"
                    Imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F6690%2Frqtawyfsgfor5r6o__400_400.png&w=400&q=75"
                    job="경영전략실 공시/IR"
                    company="더이엔엠"
                    location="서울, 한국"
                    money="1,000,000"/>
            </ul>
            <div>.</div>
        </article>
    )
}