import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Header from "../pages/header";
import Footer from "../pages/footer";

const AuthLayout = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <ScrollRestoration/>
            <Footer/>
        </>
     );
}
 
export default AuthLayout;