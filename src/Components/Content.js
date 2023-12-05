import React, { useState, useEffect } from "react";
import styles from "./Styles/Content Style/Content.module.css";
import { Link } from "react-router-dom";

import eldenRing from "../Images/Assets/LogoJogos/logo elden ring.jpg";
import fifa from "../Images/Assets/LogoJogos/logo fifa.jpg";
import fortnite from "../Images/Assets/LogoJogos/logo fortnite.png";
import redDeadRedemption from "../Images/Assets/LogoJogos/logo red.jpg";
import forza from "../Images/Assets/LogoJogos/logo forza.jpg";
import gtaV from "../Images/Assets/LogoJogos/logo gtaV.png";

import BgElden from "../Images/Assets/Banners/fundoEldenRing.jpg";
import BgFort from "../Images/Assets/Banners/fundoFortnite.png";
import BgGtaV from "../Images/Assets/Banners/fundoGTA.jpg";
import BgForza from "../Images/Assets/Banners/fundoForza.jpg";
import BgRed from "../Images/Assets/Banners/fundoRED.jpg";
import BgFifa from "../Images/Assets/Banners/FundoFIFA.jpg";

function Content(props) {
  const [, setBackgroundImage] = useState(BgElden);
  const [lastImage] = useState(BgElden);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BgElden})`;
    document.body.style.position = "center";

    return () => {
      document.body.style.backgroundImage = "none";
      document.body.style.position = "center";
    };
  }, []);

  const handleMouseOver = (image) => {
    setBackgroundImage(`url(${image})`);
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.transition = "ease-in-out .3s";
    document.body.style.position = "center";
  };

  const handleMouseOut = () => {
    setBackgroundImage(lastImage);
    document.body.style.backgroundImage = lastImage;
  };

  const gameData = [
    { id: 0, name: "Elden Ring", logo: eldenRing, banner: BgElden },
    { id: 1, name: "Fortnite", logo: fortnite, banner: BgFort },
    { id: 2, name: "GTA V", logo: gtaV, banner: BgGtaV },
    { id: 3, name: "Forza Horizon 5", logo: forza, banner: BgForza },
    {
      id: 4,
      name: "Red Dead Redemption 2",
      logo: redDeadRedemption,
      banner: BgRed,
    },
    { id: 5, name: "FIFA 23", logo: fifa, banner: BgFifa },
  ];

  return (
    <section className={styles.home} id={props.id}>
      <h1 className={styles.titleHome}>Dashboard's Recentes</h1>

      <div className={styles.dashboardTop} id="dashboard">
        {gameData.map((game) => (
          <Link key={game.id} to={`/Library/${game.name.replace(/\s+/g, "-")}`}>
            <a
              href={`/Library/${game.name.replace(/\s+/g, "-")}`}
              className={styles.item}
              id={game.id}
              onMouseOver={() => handleMouseOver(game.banner)}
              onMouseOut={handleMouseOut}
            >
              <div className={styles.logo}>
                <img src={game.logo} className={styles.BgGame} alt="game" />
              </div>
            </a>
          </Link>
        ))}
      </div>

      <h1 className={styles.titleExploreMore}>Explorar mais Dashboard's</h1>

      <div className={styles.dashboardBottom}>
        {[1, 2, 3, 4].map((index) => (
          <a key={index} href=" ">
            <div className={styles.more}>
              <div className={styles.textMore}></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Content;
