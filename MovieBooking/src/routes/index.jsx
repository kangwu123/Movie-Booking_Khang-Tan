import { Route } from "react-router-dom";
// Home Template
import HomeTemplate from "../pages/HomeTemplate";
import Home from "../pages/HomeTemplate/Home";
import MovieDetail from "../pages/HomeTemplate/MovieDetail";
import TicketBooking from "../pages/HomeTemplate/TicketBooking";
// Admin Template
import AdminTemplate from "../pages/AdminTemplate";
import Dashboard from "../pages/AdminTemplate/Dashboard";
import Users from "../pages/AdminTemplate/Users";
import Movies from "../pages/AdminTemplate/Movies";

import PageNotFound from "../pages/PageNotFound";

import HomeHeader from "../pages/HomeTemplate/_components/Header/index.jsx";
import AdminHeader from "../pages/AdminTemplate/_components/Header/index.jsx";

const routes = [
    {
        path: "",
        element: <HomeTemplate />,
        child: [
            {
                path: "",
                element: <Home />
            },

            {
                path: "movie-detail",
                element: <MovieDetail />
            },

            {
                path: "buy-ticket",
                element: <TicketBooking />
            },
        ],
    },

    {
        path: "admin",
        element: <AdminTemplate />,
        child: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "movies",
                element: <Movies />
            },
        ],
    },

    {
        path: "*",
        element: <PageNotFound />
    }
]

const renderRoute =(route)=>{
    return(
        route.child?.map((child)=>{
            return(
                <Route 
                key={child.path} 
                path={child.path} 
                element={child.element} />
            )
        })
    );
};

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.child) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        >
          {renderRoute(route)}
        </Route>
      )
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      />
    )
  });
};

const renderHeader = () => {
  const path = window.location.pathname;
  if (path.startsWith("/admin")) {
    return <AdminHeader />;
  } else {
    return <HomeHeader />;
  }
}

export {renderRoutes, renderHeader}

export default routes;