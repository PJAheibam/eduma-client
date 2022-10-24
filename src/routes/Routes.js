import { Routes as RouteWrapper, Route } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home";
import Login from "../pages/login";

const Routes = () => {
  return (
    <>
      <RouteWrapper>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </RouteWrapper>
    </>
  );
};

export default Routes;
