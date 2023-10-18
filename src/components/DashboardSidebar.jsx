import { Link } from 'react-router-dom';
import { sidebarData } from '../utils/sidebarData';

const DashboardSidebar = () => {
    return (
        <div className=' bg-primary rounded-r-xl text-white'>
            <div>
                <h1 className='text-center text-4xl font-medium py-8 opacity-50 hover:opacity-100 transition duration-200'>Logo</h1>
                <div className='overflow-y-auto max-h-[562px] scroll'>
                    {
                        sidebarData.map(({ id, title, path, img }) => <Link
                            key={id}
                            to={path}
                            className='flex items-center ml-11 py-4 opacity-50 hover:opacity-100 px-2 hover:bg-[#534aff]  hover:rounded-s-3xl focus:bg-[#534aff]  focus:rounded-s-3xl'
                        >
                            <img src={img} alt="" className='mr-4 w-5' />
                            <p className=''>{title}</p>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;