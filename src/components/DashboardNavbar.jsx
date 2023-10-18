import message from '../assets/icon/Messages.png';
import profile from '../assets/icon/profile.png';
import notification from '../assets/icon/notification.png';
import search from '../assets/icon/search.png';

const DashboardNavbar = () => {
    return (
        <div className='rounded-2xl mb-7 shadow-lg drop-shadow-md bg-white'>
            <div className='p-5'>
                <div className='flex justify-between items-center px-5'>
                    <div className='border rounded-3xl  flex items-center py-2 px-4'>
                        <img src={search} alt="" className='w-5 h-5' />
                        <input type="text" placeholder='Search' className='ml-4 outline-none p-1 w-96 text-lg' />
                    </div>
                    <div className='flex items-center gap-7'>
                        <button><img src={message} alt="" className='w-6' /></button>
                        <button><img src={notification} alt="" className='w-6' /></button>
                        <button><img src={profile} alt="" className='w-6' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;