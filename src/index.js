import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import List from "./List";
import NotFound from "./404";
import Detail from "./Detail";
import Contact from "./Contact";
import "./globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/facts" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="facts/:length" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
