import { Outlet } from "react-router-dom";
import Navigator from "../components/navigator";
import Footer from "../components/footer";

export default function Home(){
    return(
        <main>
            <Navigator/>
                <Outlet/>
            <Footer/>
        </main>
    )
}