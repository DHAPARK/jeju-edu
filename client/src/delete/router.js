import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { lazy, Suspense } from "react";

import Lending from "./Lending";

const Routers = () => {
  const Main = lazy(() => import("./Main/Main"));
  const Login = lazy(() => import("./login/Login"));
  const Profile = lazy(() => import("./profile/Profile"));
  const PartyJoin = lazy(() => import("./detail/PartyJoin"));
  const PartyDetail = lazy(() => lazy(() => import("./detail/PartyDetail")));
  const Footer = lazy(() => import("../components/Footer"));

  return (
    <>
      {/* <Suspense fallback={<Lending />}> */}
      {/* <Logout /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/partyjoin" element={<PartyJoin />} />
        <Route path="/partydetail/:id" element={<PartyDetail />} />
      </Routes>
      <Footer />
      {/* </Suspense> */}
    </>
  );
};

export default Routers;
