import React from "react";
import "../css/Main.css";
import Default from "./Default";
import GetStarted from "./GetStarted";
import Navigation2 from "./Navigation2";
import Pagination2 from "./Pagination2";
import PaginationCustom from "./PaginationCustom";
import PaginationFraction from "./PaginationFraction";
import PaginationProgress from "./PaginationProgress";
import SpaceBetween from "./SpaceBetween";

const Main = () => {
  return (
    <>
      <div className="main">
        <h1>Swiper</h1>

        {/* <h2>Get Started</h2>
        <GetStarted /> */}
        <hr />
        <h2>Default</h2>
        <Default />
        <hr />
        <h2>Navigation</h2>
        <Navigation2 />
        <hr />
        <h2>Pagination</h2>
        <Pagination2 />
        <hr />
        <h2>Pagination Progress</h2>
        <PaginationProgress />
        <hr />
        <h2>Pagination Fraction</h2>
        <PaginationFraction />
        <hr />
        <h2>Pagination Custom</h2>
        <PaginationCustom />
        <hr/>
        <h2>Space Between</h2>
        <SpaceBetween />
      </div>
    </>
  );
};

export default Main;
