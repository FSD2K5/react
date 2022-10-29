import { BlogPage, HomePage, ServicesPage, AboutPage } from "../pages";

export const publicRouter = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/about",
        element: <AboutPage />,
    },
    {
        id: 3,
        path: "/Service",
        element: <ServicesPage />,
    },
    {
        id: 4,
        path: "/blog",
        element: <BlogPage />,
    },
];
