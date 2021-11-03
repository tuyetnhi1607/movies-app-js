import React, {useEffect} from "react";
import logo from "../../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header() {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => (e.path === pathname ? e : 0));
  console.log("active", active);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scroll", document.documentElement.scrollTop);
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.querySelector(".header").classList.add("shrink");
      } else document.querySelector(".header").classList.remove("shrink");
    });
  }, []);
  return (
    <div className="header" id="header">
      <div className="header__wrap">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">tMovie</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
