import { Routes as RouteWrapper, Route, Navigate } from "react-router-dom";
import Root from "../layouts/Root";
import Courses from "../pages/courses";
import Content from "../pages/courses/Content";
import Home from "../pages/home";
import Login from "../pages/login";
import PageNotFound from "../pages/page-not-found";
import Register from "../pages/register";
import Course from "../pages/courses/Course";
import Checkout from "../pages/checkout";
import PrivateRoute from "./private-route";
import Blog from "../pages/blog";

const Routes = () => {
  return (
    <>
      <RouteWrapper>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="courses/" element={<Courses />}>
            <Route path="" element={<Content />} />
            <Route path="all" element={<Content />} />
            <Route path=":id" element={<Course />} />
          </Route>
          <Route
            path="courses"
            element={<Navigate to="/courses/all" replace />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="checkout/:courseID"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </RouteWrapper>
    </>
  );
};

export default Routes;
