import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Repos from "../pages/repos/repos";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:user" element={<Repos />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </RRDRouter>
    </BrowserRouter>
  );
}
