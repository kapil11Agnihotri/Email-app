import React from "react";
import classes from "./Header.module.css";
import Logo from "../assets/Image/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const location = useNavigate();

  const LogoutHandler = () => {
    dispatch(authActions.logout());
    location("/");
  };

  return (
    <>

    <div className={classes.header}>
      <div className={classes.left}>
        <IconButton>
          <MenuIcon style={{ margin: "8px" }} />
        </IconButton>
        <img src={Logo} alt="logo" />
        <h4>Mymail</h4>
      </div>
      <div className={classes.middle}>
        <SearchIcon />
        <input placeholder="search mail" type="text" />
        <ArrowDropDownIcon />
      </div>
      <div className={classes.right}>
        <Button variant="contained" color="error" onClick={LogoutHandler}>
          Logout
        </Button>
      </div>
      
    </div>
<hr/>
    </>
  );
};

export default Header;
