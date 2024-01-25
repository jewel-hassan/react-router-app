import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  const naviGation = useNavigation();
  return (
    <div>
      <Header />
      <div>{naviGation.state === "loading" && "Loading..."}</div>
      <h2>This is home page</h2>
      <Outlet />
    </div>
  );
};

export default Home;
