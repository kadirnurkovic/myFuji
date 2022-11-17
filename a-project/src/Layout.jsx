import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import Logo from "./img/fuji-logo.png";

import Sidebar from "./components/Navbar/Navbar";
import FooterReal from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Anime from "./pages/AnimePage/Anime";
import Manga from "./pages/MangaPage/Manga";
import About from "./pages/AboutPage/About";
import MangaInfo from "./pages/MangaPage/MangaInfo";
import AnimeInfo from "./pages/AnimePage/AnimeInfo";
import FavPage from "./pages/FavoritePage/FavPage";
import { Link } from "react-router-dom"

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          paddingRight: "calc(var(--mantine-aside-width, 0px) + 0.1px)",
          paddingTop: "calc(var(--mantine-header-height, 0px) + 0.1px)",
          paddingLeft: "calc(var(--mantine-navbar-width, 0px) + 0.1px)",
          paddingBottom:
            "calc(var(--mantine-footer-height, 0px) + 1px) !important",
          '@media (max-width: 766px)' : {
            paddingRight: '0px'
          }
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 150 }}
        >
          <Sidebar />
        </Navbar>
      }
      footer={<FooterReal />}
      header={
        <Header height={70}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
            className="bg-dark"
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link to="/"><img src={Logo} alt="" className="w-9 h-9 lg:ml-3 sm:ml-5 cursor-pointer" /></Link>
            <Link to="/"><h1 className="text-white text-3xl font-bold pl-3 cursor-pointer">Fuji</h1></Link>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="anime" element={<Anime/>} />
        <Route path="manga" element={<Manga/>} />
        <Route path="about" element={<About/>} />
        <Route path="favorites" element={<FavPage/>} />
        <Route path="manga/:id/:title" element={<MangaInfo/>} />
        <Route path="anime/:id/:title" element={<AnimeInfo/>} />
      </Routes>
    </AppShell>
  );
}
