import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import { ErrorPage } from '../pages/error_page';

export const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <DashboardLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/dashboard',
                    element: <h1>Dashboard</h1>
                }
            ]
        }
    ]);

  return <RouterProvider router={router} />
}
