import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark text-white sticky-top">
      <div class="container-fluid">
        <a
          class="navbar-brand text-white"
          href="https://jerome-chauncey.github.io/One-Percent/"
        >
          <img
            src="logo-7402592_640.png"
            alt="One percent Logo"
            class="Logo"
            height="50"
            width="50"
          />
        </a>
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link text-white" href="charts.html">
                Live Market Prices
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#footer">
                Trading Tools
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#footer">
                Contact Us
              </a>
            </li>
          </ul>
          <form class="d-flex ms-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
