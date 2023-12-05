import eldenRing from "../Images/Assets/LogoJogos/logo elden ring.jpg";
import fifa from "../Images/Assets/LogoJogos/logo fifa.jpg";
import fortnite from "../Images/Assets/LogoJogos/logo fortnite.png";
import redDeadRedemption from "../Images/Assets/LogoJogos/logo red.jpg";
import forza from "../Images/Assets/LogoJogos/logo forza.jpg";
import gtaV from "../Images/Assets/LogoJogos/logo gtaV.png";
import amongUs from "../Images/Assets/LogoJogos/Among Us.jpg";
import Genshin from "../Images/Assets/LogoJogos/Genshin.jfif";
import Fears from "../Images/Assets/LogoJogos/AlanWake2.jfif";
import RainbowSix from "../Images/Assets/LogoJogos/Rainbow.jpg";
import WestHunt from "../Images/Assets/LogoJogos/West Hunt.jpg";
import SeaOfThieves from "../Images/Assets/LogoJogos/Sea of Thieves.jpg";
import Ball from "../Images/Assets/LogoJogos/8_ball_pool.png";
import fruit from "../Images/Assets/LogoJogos/fruit_ninja.png";
import Minecraft from "../Images/Assets/LogoJogos/Minecraft.png";
import Tiles from "../Images/Assets/LogoJogos/tiles_hop.png";
import Subway from "../Images/Assets/LogoJogos/subway_surfers_.png";
import Temple from "../Images/Assets/LogoJogos/tumple_room.png";

import BgMain from '../Images/Assets/Banners/fundo.jpeg';

import styles from "./Styles/Library Style/Library.module.css";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function LibraryMain(props) {
  useState(BgMain);
  useState(BgMain);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BgMain})`;
    document.body.style.position = 'center';
    
    return () => {
      document.body.style.backgroundImage = 'none';
      document.body.style.position = 'center';
    };
  }, []);

  return (
    <>
      <section className="LibraryMain">
        <div className={styles.dashboardTop} id={props.id}>
          <Link to="/Library/Elden-Ring">
            <a href="/#" className={styles.item} id="0">
              <div className={styles.logo}>
                <img src={eldenRing} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/Library/Fortnite">
            <a href="/#" className={styles.item} id="1">
              <div className={styles.logo}>
                <img src={fortnite} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/Library/Gta-V">
            <a href="/#" className={styles.item} id="2">
              <div className={styles.logo}>
                <img src={gtaV} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/Library/Forza-Horizon-5">
            <a href="/#" className={styles.item} id="3">
              <div className={styles.logo}>
                <img src={forza} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/Library/Red-Dead-Redemption-2">
            <a href="/#" className={styles.item} id="4">
              <div className={styles.logo}>
                <img src={redDeadRedemption} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/Library/Fifa-23">
            <a href="/#" className={styles.item} id="5">
              <div className={styles.logo}>
                <img src={fifa} alt="game" />
              </div>
            </a>
          </Link>
        </div>
      </section>

      {/*  */}

      <section className="LibraryMain">
        <div className={styles.dashboardTop} id={props.id}>
          <Link to="/#">
            <a href="/#" className={styles.item} id="0">
              <div className={styles.logo}>
                <img src={amongUs} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="1">
              <div className={styles.logo}>
                <img src={SeaOfThieves} className={styles.BgGame} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="2">
              <div className={styles.logo}>
                <img src={Genshin} className={styles.BgGame} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="3">
              <div className={styles.logo}>
                <img src={Fears} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="4">
              <div className={styles.logo}>
                <img src={RainbowSix} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="5">
              <div className={styles.logo}>
                <img src={WestHunt} className={styles.BgGame_2} alt="game" />
              </div>
            </a>
          </Link>
        </div>
      </section>

      {/*  */}

      <section className="LibraryMain">
        <div className={styles.dashboardTop} id={props.id}>
          <Link to="/#">
            <a href="/#" className={styles.item} id="0">
              <div className={styles.logo}>
                <img src={Ball} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="1">
              <div className={styles.logo}>
                <img src={Temple} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="2">
              <div className={styles.logo}>
                <img src={Subway} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="3">
              <div className={styles.logo}>
                <img src={fruit} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="4">
              <div className={styles.logo}>
                <img src={Minecraft} alt="game" />
              </div>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#" className={styles.item} id="5">
              <div className={styles.logo}>
                <img src={Tiles} alt="game" />
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default LibraryMain;
