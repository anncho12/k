export default function MiddleBanner1(){
    return (
        <aside class="mt-16 rounded-lg flex justify-center h-[103px]">
            <div className="w-[83%] rounded-md overflow-hidden relative bg-[#2b4bc8]">
                <img src="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.webp" alt="career-connect-icon-back"/>
                <img className="absolute right-[240px] z-50" style={{bottom: "-7px", width: "124px", height: "100px"}} src="https://static.wanted.co.kr/career_connect/gomin.png" alt="career-connect-icon"></img>
                <button className="absolute top-1 z-10 flex justify-between h-full w-full items-center p-10">
                    <div>
                        <p className="text-xl text-white font-black	">내 연차에 이 연봉 괜찮은가? 궁금할 땐</p>
                    </div>
                    <div className="text-sm bg-white text-[#2b4bc8] font-bold rounded-full px-[20px] py-[11px] z-10">
                        커리어 조회하기
                    </div>
                </button>
            </div>
        </aside>
    )
}