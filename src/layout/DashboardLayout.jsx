import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNavbar from '../components/DashboardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex bg-[#F1F5F9]'>
            <aside className='min-w-[250px] h-screen fixed top-0'>
                <DashboardSidebar />
            </aside>
            <main className='flex-1 ml-64 mt-5 mr-5'>
                <DashboardNavbar />
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;