import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// import site1 from "..public/site1.png";
// import site2 from "../public/site2.png";
// import site3 from "../public/site3.png";
// import lockeye1 from "../public/lockeye1.png";
// import lockeye2 from "../public/lockeye2.png";
// import lockeye3 from "../public/lockeye3.png";

import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowBackIosNew } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";

function Homepage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = () => (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose} disableRipple>
        Edit
      </MenuItem>
    </StyledMenu>
  );

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        // "&:active": {
        //   backgroundColor: alpha(
        //     theme.palette.primary.main,
        //     theme.palette.action.selectedOpacity
        //   ),
        // },
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Box
      sx={{ backgroundColor: "rgba(0,0,0,0)" }}
      minWidth="420px"
      minHeight="920px"
    >
      <AppBar
        display="flex"
        elevation={24}
        p={3}
        style={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: "#121212",
          right: 0,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          {renderMenu()}
          <Typography
            variant="h6"
            color="#BB86FC"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Awesome Project
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        width="100%"
        my={15}
        sx={{
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box my="auto" pr="10px">
          <ArrowBackIosNew />
        </Box>
        <Box
          width="90%"
          sx={{
            // backgroundColor: "cyan",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/site1.png"}
            alt="site1"
          />
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/site2.png"}
            alt="site2"
          />
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/site3.png"}
            alt="site3"
          />
        </Box>
        <Box my="auto" pl="10px">
          <ArrowForwardIos />
        </Box>
      </Box>
      <Box
        width="100%"
        sx={{
          // backgroundColor: "cyan",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          noWrap
          component="div"
          mx="auto"
          fontWeight="bold"
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        >
          Explore, Collect, Produce
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          mx="auto"
          fontWeight="lighter"
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        >
          soundAlpha
        </Typography>
      </Box>
      <Box
        width="100%"
        mt={5}
        px={5}
        sx={{
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          mx="auto"
          fontWeight="lighter"
          sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
        >
          Current Hits
        </Typography>
      </Box>
      <Box px={5}>
        <hr />
      </Box>
      <Box
        width="100%"
        my={5}
        sx={{
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          width="90%"
          sx={{
            // backgroundColor: "cyan",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/lockeye1.png"}
            alt="site1"
          />
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/lockeye2.png"}
            alt="site2"
          />
          <img
            width="140px"
            style={{ marginLeft: 25, marginRight: 25 }}
            src={"/lockeye3.png"}
            alt="site3"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
