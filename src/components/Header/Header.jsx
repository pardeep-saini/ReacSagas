import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  const headersData = [
    {
      label: "Back to CK",
      href: "",
    },
    {
        label: "|",
        href: "",
      },
    {
      label: "Log Out",
      href: "",
    },
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#2b2f30",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
      fontSize:18
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      size: "18px",
      marginLeft: "-26px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Header(props) {
    console.log("propsHeader", props)
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {Logo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{Logo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const Logo = (
      <Typography variant="h6" component="h1" className={logo}>
        <img style={{width: '43%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAwcHgiIHg9IjBweCIgeT0iMHB4IgogICAgIHZpZXdCb3g9IjAgMCAxMDM2LjQ4IDM2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAzNi40OCAzNjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgIC5zdDB7ZmlsbDojRTY0MjEwO30KICAgIC5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTM4LjU2LDYxLjA4djE3NS40N2MwLDI0LjYyLTE5Ljk2LDQ0LjU5LTQ0LjU5LDQ0LjU5SDQ0Ni45bC00My4wMSw3NC40OWwtMC4wMi0wLjAzCiAgICAgICAgYy0yLjA3LDMuMjQtNS42Nyw1LjQtOS44LDUuNGMtNC4xMiwwLTcuNzItMi4xNi05Ljc5LTUuMzlsLTAuMDEsMC4wMWwtNDMuMDEtNzQuNDloLTQ3LjFjLTI0LjYyLDAtNDQuNTktMTkuOTYtNDQuNTktNDQuNTlWNjEuMDgKICAgICAgICBjMC0yNC42MiwxOS45Ni00NC41OSw0NC41OS00NC41OWgxOTkuOEM1MTguNiwxNi40OSw1MzguNTYsMzYuNDUsNTM4LjU2LDYxLjA4eiIvPgogICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTAsOC4yMWMtMC4xNy0zLjk0LDQuMzUtNi45MSw5LjI0LTcuMzZDMTguNjUsMCwzMi41MiwwLDM4LjY2LDBjNi4xNiwwLDEyLjY2LDMuNzYsMTIuNjYsOS4yNEw1MS4xNCwyNDQKICAgICAgICBjMCw2LjUzLTYuODksOS42OS0xMy40Miw5Ljc5QzI2LjEyLDI1My45OCwwLDI1NC44OCwwLDI0NEwwLDguMjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTc4LjkxLDEyOC42MWMwLTEzLjM0LTMuMDgtMTguNDctMTcuNDQtMTguNDdjLTEyLjY2LDAtMzUuNTcsMC4xNy0zNS45MSw3LjE4djEyNy4yNAogICAgICAgIGMwLDYuMTYtNi41LDkuMTQtMTIuNjYsOS4yNGMtMTAuOTQsMC4xNy0zNS41NywxLjAzLTM1LjU3LTkuMjRsMC42OS0xNTcuMzVjLTAuMTctMTYuNDIsMzQuMjEtMjIuNjIsOTEuNjctMjEuNTUKICAgICAgICBjNTQuNTYsMS4wMiw1Ny45OCwxOS44NCw1Ny44MSw2NC42NXYxMTQuMjVjMCw2LjE2LTYuNSw5LjE0LTEyLjY2LDkuMjRjLTEwLjk0LDAuMTctMzUuNTcsMS4wMy0zNS41Ny05LjI0TDE3OC45MSwxMjguNjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODI1Ljg4LDIwMS44MWMwLDQuMjUsMC44Miw1LjM5LTQuMjUsNS45NWMtNy42NSwwLjg1LTI2LjM4LDAuNzUtMzcuNDIsMC43NWMtMTAuOTYsMC0xMS4wNi0wLjc1LTExLjA2LTExLjgxCiAgICAgICAgVjczLjkyYzAtNi4wOC02LjQyLTkuMTQtMTIuNS05LjEyYy0yNi42MiwwLjA4LTM1LjEzLTEuMDEtMzUuMTMsOS4xMnYxMjQuODNjLTAuODUsNTMuMjQtMS42NSw1Mi44Niw0NC4yMiw1NC45NAogICAgICAgIGMxOC43MSwwLjg1LDM5LjEyLDEuNyw1Mi43MywwYzIuNjctMC4zMywzLjQtMC44NSwzLjQsNi4yMmMwLDI0LjMyLTEuMzMsMzMuNDctMjEuMjYsMzMuNDdjLTIxLjI4LDAtNTcuNzMtMC45Mi02MS43OS0wLjgzCiAgICAgICAgYy0xMS4zNiwwLjI3LTExLjE1LDUuNC0xMS4xNSwyOC4wNGMwLDkuMTIsMS42OSwxMC44MSw3LjQzLDEzLjE3YzkuMTIsMS42OSw0Ny4xNSwxLjk4LDczLjE1LDEuODQKICAgICAgICBjNDkuMzMtMC4yNiw2MS4yNC0xMS4zMSw2MS4yNC03Ni43VjczLjkyYzAtNi4wOC02LjQyLTkuMTQtMTIuNS05LjEyYy0yNi42MiwwLjA4LTM1LjEzLTEuMDEtMzUuMTMsOS4xMlYyMDEuODF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjk4LjgsMTcyLjg5YzAuMzYtMTMuNjEtMi4yMy0xNi44OS0yNi44NS0yNi4zN2MtMTkuNzUtNy42LTM5LjU3LTE0LjM5LTQ4LjgtMTguNjYKICAgICAgICBjLTUuNjMtMi42LTUuNjMtNi4yMS01LjYzLTEwLjI2YzAtNi44LDQuOTgtNi40LDkuMzYtNi41N2M1Ljg3LTAuMjMsNDkuMzMtMC40LDU3Ljg0LTAuMjNjOC41LDAuMTcsMTEuMDYtNC4zMywxMS4wNi0xMS4wNgogICAgICAgIGMwLTAuODUsMC0xMy4wNCwwLTIxLjI2YzAtNi4xMiwwLjY4LTEwLjA0LTUuMS0xMS4wNmMtNy40LTEuMzItNjkuMjItMi4wNC02OS4yMi0yLjA0Yy01NC4yNywxLjAyLTU3LjMxLDE3LjE4LTU3LjEzLDYxLjc1djIuMjEKICAgICAgICBjLTAuNDYsMjQuODcsMi45OCwzMC42MiwxOS4xOSwzNy4yNWMxMy4wMSw1LjMyLDM1LjcyLDE0LjQ2LDQ5LjMzLDE5LjljMTIuMjEsNC44OCwxMi43NiwzLjkyLDEyLjc2LDkuODcKICAgICAgICBjMCw2LjgxLTAuODUsOS43LTQuMjUsOS43Yy0xLjcsMC0yOC41LTAuNzYtMzUuNzItMC44M2MtNy4xOC0wLjA3LTM0LjY3LTAuMDItMzQuNjctMC4wMmMtMTAuMTMsMC05LjA0LDkuMzYtOS4xMiwzNS45OAogICAgICAgIGMtMC4wMiw2LjA4LDMuMDQsMTIuNSw5LjEyLDEyLjVoNzEuMWM1NC4yNy0xLjAyLDU2Ljk1LTIyLjI4LDU2Ljc3LTY2Ljg1VjE3Mi44OXoiLz4KICAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDM2LjQ1LDE3Mi44OWMwLjM2LTEzLjYxLTIuMjMtMTYuODktMjYuODUtMjYuMzdjLTE5Ljc1LTcuNi0zOS41Ny0xNC4zOS00OC44LTE4LjY2CiAgICAgICAgYy01LjYzLTIuNi01LjYzLTYuMjEtNS42My0xMC4yNmMwLTYuOCw0Ljk4LTYuNCw5LjM2LTYuNTdjNS44Ny0wLjIzLDQ5LjMzLTAuNCw1Ny44NC0wLjIzYzguNSwwLjE3LDExLjA2LTQuMzMsMTEuMDYtMTEuMDYKICAgICAgICBjMC0wLjg1LDAtMTMuMDQsMC0yMS4yNmMwLTYuMTIsMC42OC0xMC4wNC01LjEtMTEuMDZjLTcuNC0xLjMyLTY5LjIyLTIuMDQtNjkuMjItMi4wNGMtNTQuMjcsMS4wMi01Ny4zMSwxNy4xOC01Ny4xMyw2MS43NXYyLjIxCiAgICAgICAgYy0wLjQ2LDI0Ljg3LDIuOTgsMzAuNjIsMTkuMTksMzcuMjVjMTMuMDEsNS4zMiwzNS43MiwxNC40Niw0OS4zMywxOS45YzEyLjIxLDQuODgsMTIuNzYsMy45MiwxMi43Niw5Ljg3CiAgICAgICAgYzAsNi44MS0wLjg1LDkuNy00LjI1LDkuN2MtMS43LDAtMjguNS0wLjc2LTM1LjcyLTAuODNjLTcuMTgtMC4wNy0zNC42Ny0wLjAyLTM0LjY3LTAuMDJjLTEwLjEzLDAtOS4wNCw5LjM2LTkuMTIsMzUuOTgKICAgICAgICBjLTAuMDIsNi4wOCwzLjA0LDEyLjUsOS4xMiwxMi41aDcxLjFjNTQuMjctMS4wMiw1Ni45NS0yMi4yOCw1Ni43Ny02Ni44NVYxNzIuODl6Ii8+CiAgICA8Zz4KICAgICAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgxLjY1LDg3LjEzYy0yMi4zNiwwLTIxLjc4LTEuMDUtMjQuMSw3LjE4bC0xOC4wOCw2Ni43NWMtMS4zOSw0Ljg3LTMuMDEsMTIuNzUtMy43MSwxOS45MwogICAgICAgICAgICBjLTAuNy03LjQyLTIuNTUtMTQuODMtMy45NC0xOS45M2wtMTguMDgtNjYuNzVjLTEuOTYtNy4xOC0xLjM4LTcuMTgtMjMuODYtNy4xOGwwLDBoMGMwLDAtMC4wMSwwLTAuMDEsMGMtMC4wMywwLTAuMDUsMC0wLjA3LDAKICAgICAgICAgICAgYy0xMS42MiwwLTEzLjM2LDAtMTEuMTYsNy4wNmMwLjIxLDAuNjYsMS4yOSw0LjEyLDEuNSw0Ljc1bDM4LjU5LDEwOS44NWMyLjksNy41MywxOC4yMSw2LjM4LDI1LjUsNi4zOAogICAgICAgICAgICBjNi4wMywwLDYuMzctMS42Miw4LjM0LTYuODRsMzguNTktMTA5LjM5YzAuNDYtMS4zOSwxLjM5LTMuNjUsMS43NS00Ljc1QzM5NS4yMSw4Ny4xMywzOTMuNDcsODcuMTMsMzgxLjY1LDg3LjEzeiIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00ODQuNDIsODYuNjJoLTYwLjI2Yy0xMi4xNywwLjExLTIxLjQyLDMuNTktMjIuNiwxNi45MnY5Mi41OWMxLjE3LDE1LjY0LDEyLjE5LDE4LjY2LDIxLjQ0LDE4LjY2aDYyCiAgICAgICAgICAgIGM5LjI1LDAsMjAuMjgtMy4wMSwyMS40NC0xOC42NmwwLjU4LTkxLjQzQzUwNS44NCw5MS4zNyw0OTYuNTksODYuNzQsNDg0LjQyLDg2LjYyeiBNNDU5LjA1LDE4Ni44NmgtOS41MgogICAgICAgICAgICBjLTEzLjE5LTAuNDYtMTUuNSwwLjEyLTE1LjMtMTAuNjZ2LTQ2LjIzYzAtMTMuMjEtMC43LTEyLjYzLDE0LjE0LTEyLjYzaDExLjg0YzE0LjgzLDAsMTQuMTQtMC41OCwxNC4xNCwxMi42M3Y0Ni4yMwogICAgICAgICAgICBDNDc0LjU2LDE4Ni45Nyw0NzIuMjQsMTg2LjM5LDQ1OS4wNSwxODYuODZ6Ii8+CiAgICA8L2c+CjwvZz4KPC9zdmc+" alt="logo"  />
      </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }