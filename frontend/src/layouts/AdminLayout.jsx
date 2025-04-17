import { Outlet } from 'react-router';
import '../App.css'
import { Sidebar } from '../components/Admin/Sidebar';
import { Header } from '../components/Admin/Header';

const AdminLayout = () => {
    return (
        <div>
            <Sidebar />
            <main>
                <Outlet />
            </main>
            <Header /> 
        </div>
    );
};

export default AdminLayout;