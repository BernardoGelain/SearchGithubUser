import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Repos from "../pages/repos/repos";
import ErrorPage from "../pages/errorPage/errorPage";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:user/:reposCount" element={<Repos />} />

        <Route path="*" element={<ErrorPage />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
