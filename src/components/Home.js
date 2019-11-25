import React, { Fragment } from "react";
import MemberHome from "./home/member/Home";
import GuestHome from "./home/guest/Home";
import { withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      {JSON.parse(localStorage.getItem("isLogin")) !== true ? (
        <GuestHome />
      ) : (
        <MemberHome />
      )}
    </Fragment>
  );
};

export default withRouter(Navbar);
