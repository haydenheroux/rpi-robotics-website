import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Projects from "./Projects";
import Home from "./Home";
import Layout from "./Layout";
import Leadership from "./Leadership";
import Calendar from "./Calendar";
import HomeLayout from "./HomeLayout";
import { ContentProvider } from "./contexts/ContentContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentProvider>
      <HashRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="projects" element={<Projects />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </HashRouter>
    </ContentProvider>
  </StrictMode>,
);
