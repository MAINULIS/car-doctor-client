
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;