import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import List from "./List";
import Detail from "./Detail";
import NotFound from "./404";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="list/:length" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
