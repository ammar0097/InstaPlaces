import React , {useState} from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { Fragment } from "react/cjs/react.production.min";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen,setDrawerIsOpen] = useState(false);
  const OpenDrawer = () => {
    setDrawerIsOpen(true);
  }
  const CloseDrawer = () => {
    setDrawerIsOpen(false);
  }
  return (
    <Fragment>
    {drawerIsOpen && <Backdrop onClick={CloseDrawer}/>}
    {drawerIsOpen && <SideDrawer>
      <nav className="main-navigation__drawer-nav">
        <NavLinks/>
      </nav>
    </SideDrawer>}
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Yourplaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
          <NavLinks/>
      </nav>
    </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
