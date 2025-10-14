import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Projects from "./Projects";
import Home from "./Home";
import Layout from "./Layout";
import Leadership from "./Leadership";
import Calendar from "./Calendar";
import Contact from "./Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
