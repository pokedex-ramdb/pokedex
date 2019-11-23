import React, { Fragment } from "react";
import MemberNavbar from "./member/Navbar";
import GuestNavbar from "./member/Navbar";
import { withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
        <GuestNavbar />
      ) : (
        <MemberNavbar />
      )}
    </Fragment>
  );
};

export default withRouter(Navbar);
