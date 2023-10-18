import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import AddNewInvoices from "../pages/Dashboard/Invoices/AddNewInvoices/AddNewInvoices";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/invoices',
                element: <Invoices />
            },
            {
                path: '/dashboard/add-new-invoice',
                element: <AddNewInvoices />
            }
        ]
    }
])