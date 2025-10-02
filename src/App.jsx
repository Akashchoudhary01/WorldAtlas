import React from "react";
import { router } from "./Components/Router/Router";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Outlet/Layout";

export default function App() {
  return (
    <RouterProvider router={router}>
      <div className="flex w-full justify-center items-center bg-zinc-950 text-white overflow-x-hidden  h-lvh">
        <div className="max-w-xl">
          <Layout />
        </div>
      </div>
    </RouterProvider>
  );
}