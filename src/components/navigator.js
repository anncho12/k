import { Link } from "react-router-dom"
import { BiSearch } from "react-icons/bi";


function NavItem({name}){
    return(
        <div class="flow-root align-middle font-semibold hover:border-b-2 p-3.5 text-gray-700">
            {name}
        </div>
    )
}

export default function Navigator(){
    return (
        <div class="flex h-[50px] justify-between w-full bg-white fixed border-b z-[200]">
            <nav class="flex items-center h-[50px] w-[1060px] mx-auto bg-white align-middle font-semibold border-b justify-between" style={{fontSize:"13px"}}>
                <Link to={'/main'}>
                <div class='flex items-center'>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75" alt="hamberger menu" height="14" style={{width:'17px', height:'14px', objectFit:'contain', marginTop:'5px', marginRight: '15px'}}/>
                    <svg width="74" height="21" viewBox="0 0 140 32"><path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"></path></svg>
                </div>
                </Link>
                <div class='flex'>
                    <NavItem name='채용'></NavItem>
                    <Link to={'/career'}><NavItem name='커리어'></NavItem></Link>
                    <NavItem name='이벤트'></NavItem>
                    <Link to={'/resume'}><NavItem name='이력서'></NavItem></Link>
                    <NavItem name='커뮤니티'></NavItem>
                    <NavItem name='프리랜서'></NavItem>
                    <Link to={'/aipass'}><NavItem name='AI 합격예측'></NavItem></Link>
                </div>
                <aside class='py-2.5'>
                    <ul class='block float-left'>
                        <li class='float-left'>
                            <button className="text-xl mx-4 mt-1">
                                <BiSearch/>
                            </button>
                        </li>
                        <li class='float-left' style={{fontSize:'14px'}}>                            
                            <button class="text-gray-700 mr-2 text-sm mt-0.5"><Link to={'/login'}>회원가입/로그인</Link></button>
                        </li>
                        <li class='float-left'>
                            <button class="h-7 px-2.5 ml-4 rounded-full border font-normal text-gray-500">기업서비스</button>
                        </li>
                    </ul>
                </aside>
            </nav>
        </div>
    )
}