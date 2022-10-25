import { Routes as RouteWrapper, Route } from "react-router-dom";
import Root from "../layouts/Root";
import Courses from "../pages/courses";
import Home from "../pages/home";
import Login from "../pages/login";
import PageNotFound from "../pages/page-not-found";
import Register from "../pages/register";

const Routes = () => {
  return (
    <>
      <RouteWrapper>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="courses/:id" element={<Courses />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </RouteWrapper>
    </>
  );
};

export default Routes;
