import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="h-96 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">Welcome to Dashboard!</h1>
            <Link className="hover:underline p-3" to='/dashboard/invoices'>Please click to Invoices</Link>
        </div>
    );
};

export default Dashboard;