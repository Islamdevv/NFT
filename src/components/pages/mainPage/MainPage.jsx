import React from "react";
import scss from "./MainPage.module.scss";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import main_image from "../../../image/main-image.svg";

const MainPage = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Discover Digital Art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <button>
              <RocketLaunchIcon />
              Get Started
            </button>
            <div className={scss.rating}>
              <h1>
                240k+ <br />
                <span>Total Sale</span>
              </h1>
              <h1>
                100k+ <br />
                <span>Auctions</span>
              </h1>
              <h1>
                240k+ <br />
                <span>Artists</span>
              </h1>
            </div>
          </div>
          <div className={scss.image}>
            <img src={main_image} alt="main-image" />
            <div className={scss.image_content}>
              <h1>Space Walking</h1>
              <p>Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
