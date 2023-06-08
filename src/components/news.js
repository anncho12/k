function Title({titleBold, title, imgsrc}){
    return (
        <header class="flex flex-col items-center mb-2">
            <h2 class="flex text-lg mb-2.5"> 
                <a class="font-bold" href="naver.com">
                    {titleBold}
                </a>
                <img class="w-6 h-6 ml-1 mr-2" src={imgsrc} alt="newImg"/>
                <span>{title}</span>
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
                class="bg-cover rounded-md bg-center bg-cover"
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
export default function News(){
    return (
        <div class="flex-col flex items-center justify-center">
            <article style={{maxWidth:"1060px", marginBottom:"90px"}}>
                <Title
                    titleBold="#급성장중"
                    title="회사를 소개합니다."
                    imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=75&q=75"
                />
                <div class="flex">
                    <Card
                        header="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F102%2Flhnzt8yqwqslevr1__1080_790.png&w=520&q=100"
                        logoImgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.8f75d757.jpg&w=42&q=100"
                        name="우아한 형제들(배달의 민족)"
                        category="IT, 컨텐츠"/>
                    <Card
                        header="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16328%2Fwifrfwxicpnzo7mv__1080_790.jpg&w=520&q=100"
                        logoImgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.e5efe6d3.jpg&w=42&q=100"
                        name="프렉스코리아"
                        category="IT, 컨텐츠"/>
                </div>
            </article>
            <article style={{maxWidth:"1060px", marginBottom:"90px"}}>
                <Title
                    titleBold="#50인이상"
                    title="회사를 소개합니다."
                    imgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=75&q=75"
                />
                <div class="overflow-hidden">
                    <div class="" style={{width:"6480px"}}>

                    </div>
                </div>
                <div class="flex">
                    <Card
                        header="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F102%2Flhnzt8yqwqslevr1__1080_790.png&w=520&q=100"
                        logoImgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.8f75d757.jpg&w=42&q=100"
                        name="우아한 형제들(배달의 민족)"
                        category="IT, 컨텐츠"/>
                    <Card
                        header="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F16328%2Fwifrfwxicpnzo7mv__1080_790.jpg&w=520&q=100"
                        logoImgsrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.e5efe6d3.jpg&w=42&q=100"
                        name="프렉스코리아"
                        category="IT, 컨텐츠"/>
                </div>
            </article>
        </div>
    )
}