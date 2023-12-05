import styles from "../Styles/Pages Style/Style.module.css";

import logoElden from "../../Images/Assets/LogoJogos/logo elden ring.jpg";
import logoFifa from "../../Images/Assets/LogoJogos/logo fifa.jpg";
import logoGtaV from "../../Images/Assets/LogoJogos/logo gtaV.png";
import logoFortnite from "../../Images/Assets/LogoJogos/logo fortnite.png";
import logoForza from "../../Images/Assets/LogoJogos/logo forza.jpg";
import logoRedDeadRedemption from "../../Images/Assets/LogoJogos/logo red.jpg";

import imgConq1 from "../../Images/Assets/conquistas/fifa.png";
import imgConq2 from "../../Images/Assets/conquistas/ffia1.png";
import imgConq3 from "../../Images/Assets/conquistas/fifa2.png";

import controlPS5 from "../../Images/Assets/ControlePS5.png";
import controlXBOX from "../../Images/Assets/ControleXboxOne.png";
import controlNINT from "../../Images/Assets/ControleNintendo.png";

import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import BgMain from "../../Images/Assets/Banners/FundoFIFA.jpg";

function Fifa23(props) {
  useState(BgMain);
  useState(BgMain);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BgMain})`;
    document.body.style.position = "center";

    return () => {
      document.body.style.backgroundImage = "none";
      document.body.style.position = "center";
    };
  }, []);
  return (
    <div>
      <section id={props.id} className={styles.game1}>
        <div className={styles.libraryTop}>
          <div className={styles.gameInfo}>
            <div className={styles.logo}>
              <img src={logoFifa} alt="img" />
            </div>
            <div className={styles.nameDateConq}>
              <div className={styles.nameDate}>
                <div className={styles.name}>Fifa 23</div>
                <div className={styles.date}>2022</div>
              </div>
              <div className={styles.conq}>
                <h4 className={styles.conqrec}>Conquistas recentes</h4>
                <img className={styles.conqrec} alt="img" src={imgConq1} />
                <img className={styles.conqrec} alt="img" src={imgConq2} />
                <img className={styles.conqrec} alt="img" src={imgConq3} />
                <h4 className={styles.conqrec}>...</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.libraryBottom}>
          <div className={styles.dashboardLibrary}>
            <Link to="/Library/Elden-Ring">
              <a href="/#" className={styles.item}>
                ''
                <div className={styles.logo}>
                  <img src={logoElden} className={styles.BGgame} alt="img" />
                </div>
              </a>
            </Link>

            <Link to="/Library/Fortnite">
              <a href="/#" className={styles.item}>
                <div className={styles.logo}>
                  <img src={logoFortnite} className={styles.BGgame} alt="img" />
                </div>
              </a>
            </Link>

            <Link to="/Library/Gta-V">
              <a href="/#" className={styles.item}>
                <div className={styles.logo}>
                  <img src={logoGtaV} className={styles.BGgame} alt="img" />
                </div>
              </a>
            </Link>

            <Link to="/Library/Forza-Horizon-5">
              <a href="/#" className={styles.item}>
                <div className={styles.logo}>
                  <img src={logoForza} className={styles.BGgame} alt="img" />
                </div>
              </a>
            </Link>

            <Link to="/Library/Red-Dead-Redemption-2">
              <a href="/#" className={styles.item}>
                <div className={styles.logo}>
                  <img
                    src={logoRedDeadRedemption}
                    className={styles.BGgame}
                    alt="img"
                  />
                </div>
              </a>
            </Link>

            <a href="/#" className={styles.item}>
              <div className={styles.logo}>
                <h1 className={styles.seeMore}>Ver mais</h1>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.scroll}></div>
      </section>

      <section id="game1-dashborad" className={styles.game1Dashboard}>
        <div className={styles.titleEstatistic}>
          <h1>Análise</h1>
        </div>
        {/* <!-- Objetos para movimento --> */}
        <div className={styles.cardsMove}>
          <img src={controlPS5} alt="img" id="img-move1" />
          <img src={controlXBOX} alt="img" id="img-move2" />
          <img src={controlNINT} alt="img" id="img-move3" />
        </div>

        {/* <!-- Graficos --> */}
        <div className={styles.graphic}>
          <div className={styles.estatistic}>
            <canvas id="myChart1"></canvas>
          </div>
          <div className={styles.estatistic}>
            <canvas id="myChart2"></canvas>
          </div>
          <div className={styles.estatistic}>
            <canvas id="myChart3"></canvas>
          </div>
          <div className={styles.estatistic}>
            <canvas id="myChart4"></canvas>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fifa23;
