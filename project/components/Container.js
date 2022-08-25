import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { css, cx } from "@emotion/css";

export default function Container({ children }) {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem",
          }}
        >
          <div
            className={cx(
              css`
                display: flex;
                align-items: center;
              `
            )}
          >
            <IconButton>
              {/* <Image
                src="/SoundAlpha.jpeg"
                alt="SoundAlpha"
                width={35}
                height={35}
              /> */}
              <GraphicEqIcon
                sx={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
                fontSize="large"
              />
            </IconButton>
            <TextField
              sx={{
                width: "30rem",
                color: "#fff",
                backgroundColor: "rgba(256,256,256,0.075)",
                borderRadius: "0.5rem",
              }}
              id="filled-basic"
              variant="filled"
              size="small"
              // label="Search"
              hiddenLabel
            />
            <Button
              sx={{ marginLeft: "0.4rem", backgroundColor: "#2F2F2F" }}
              variant="contained"
              size="small"
            >
              Search
            </Button>
            <div />
            <Button
              variant="text"
              sx={{ color: "#fff", marginLeft: "3.5rem" }}
              size="small"
            >
              Studio
            </Button>
            <Button
              variant="text"
              sx={{ color: "#fff", marginLeft: "1rem" }}
              size="small"
            >
              Help
            </Button>
          </div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6B0E86" }}
            size="small"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
      <div
        className={cx(
          css`
            min-height: 100vh;
            width: 100vw;
            background-color: #fff;
            background-image: linear-gradient(
              to bottom right,
              #402047,
              #000,
              #134e48
            );
          `
        )}
      >
        {children}
      </div>
    </>
  );
}
