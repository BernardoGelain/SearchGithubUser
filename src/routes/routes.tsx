import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";

import Home from "../pages/home/home";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
      <RRDRouter>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </RRDRouter>
    </BrowserRouter>
  );
}
