import { Outlet } from 'react-router';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';

const MainLayout = () => {
    return (
        <div>    
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;