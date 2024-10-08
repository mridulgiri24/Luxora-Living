import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home-page/Home";
import Property from "./pages/property-page/Property";
import Agents from "./pages/agent-page/Agents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="agents" element={<Agents />} />
      <Route path="property" element={<Property />} />
    </Route>
  )
);

export default router;
