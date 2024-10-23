import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="a_header_top"></div>
        <div className="a_header_bottom"></div>
      </header>
      <div className="a_main">
        {/* main1 start */}
        <div className="main1 position-relative">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./slider/h.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./slider/2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./slider/3.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./slider/4.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./slider/5.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./slider/6.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* main1 end */}

        <div className="main2 w-100 border position-absolute top-50  start-0">

        </div>
      </div>

    </>
  );
}

export default App;
