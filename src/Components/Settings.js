import styles from "./Styles/Settings Style/Settings.module.css";
import React, { useState, useEffect } from "react";

import BgMain from "../Images/Assets/Banners/fundoEldenRing.jpg";

import GameRecent from "../Images/Assets/LogoJogos/AlanWake2.jfif";

import AlanWake1 from "../Images/Assets/conquistas/AlanWake2.jpg";
import AlanWake2 from "../Images/Assets/conquistas/AlanWake2 (2).jpg";
import AlanWake3 from "../Images/Assets/conquistas/AlanWake2 (3).jpg";
import AlanWake4 from "../Images/Assets/conquistas/AlanWake2 (4).jpg";

function Settings(props) {
  useState(BgMain);
  useState(BgMain);

  const nameData = [
    {
      name: props.namePerfil,
      idade: props.idade,
      gameBiblio: props.gameCounter,
    },
  ];
  const [time, setTime] = useState(new Date());
  const [opSelect, setOpcaoSelecionada] = useState("");
  const [conquistas, setConquistas] = useState([]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BgMain})`;
    document.body.style.position = "center";

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setOpcaoSelecionada("Steam");
    const conquistasDaPlataformaInicial = op.find(
      (opcao) => opcao.name === "Steam"
    ).achievements;
    setConquistas(conquistasDaPlataformaInicial);

    return () => {
      document.body.style.backgroundImage = "none";
      document.body.style.position = "center";
      clearInterval(intervalId);
    };
  }, []);

  const TimeFormater = time.toLocaleTimeString();

  const op = [
    { name: "Steam", achievements: "497" },
    { name: "EpicGames", achievements: "33" },
    { name: "PlayStation", achievements: "124" },
    { name: "Xbox", achievements: "45" },
    { name: "Nintendo", achievements: "12" },
  ];

  const AlanWake = [
    {
      name: "Apontando para a frente",
      Description: "Derrote cinco inimigos com tiros na cabeça",
      EXP: "20 EXP",
      Taxa: "61% dos jogadores desbloquearam",
      image: AlanWake1,
    },
    {
      name: "Brilhando na noite",
      Description:
        "Acenda um Sinalizador de Mão para manter inimigos afastados",
      EXP: "10 EXP",
      Taxa: "47% dos jogadores desbloquearam",
      image: AlanWake2,
    },
    {
      name: "Caixas secretas",
      Description: "Descubra uma Caixa da Seita e uma Lancheira",
      EXP: "10 EXP",
      Taxa: "73% dos jogadores desbloquearam",
      image: AlanWake3,
    },
    {
      name: "Corte curto",
      Description: "Encontre os Alicates",
      EXP: "10 EXP",
      Taxa: "31% dos jogadores desbloquearam",
      image: AlanWake4,
    },
  ];

  const handleSelecao = (event) => {
    const plataformaSelecionada = event.target.value;
    setOpcaoSelecionada(plataformaSelecionada);

    const conquistasDaPlataforma = op.find(
      (opcao) => opcao.name === plataformaSelecionada
    ).achievements;
    setConquistas(conquistasDaPlataforma);
  };

  return (
    <section className={styles.Settings} id={props.id}>
      <h1 className={styles.titleSettings}>Configurações</h1>
      <div className={styles.ContainerPerfil}>
        <div className={styles.perfil}>
          <div className={styles.info}>
            <i className="bx bxs-user-circle"></i>
            {nameData.map((name) => (
              <h1>
                {name.name}, {name.idade}, Jogos: {name.gameBiblio}
              </h1>
            ))}
          </div>
          <div className={styles.time}>{TimeFormater}</div>
        </div>

        <div className={styles.infoGames}>
          <div className={styles.console}>
            <div>
              <h1 className={styles.platName}>Plataforma</h1>
              <select
                className={styles.selectPLat}
                value={opSelect}
                onChange={handleSelecao}
              >
                {op.map((opcao, index) => (
                  <option key={index} value={opcao.name}>
                    {opcao.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.achievements}>
              <h2>Conquistas:</h2>
              <p>{conquistas} conquistas</p>
            </div>
          </div>

          <h1 className={styles.recentTitle}>Jogado Recentemente:</h1>

          <div className={styles.recentGame}>
            <div className={styles.game}>
              <div className={styles.logoGame}>
                <img src={GameRecent} alt={props.id} />
              </div>
              <div className={styles.progressGame}>
                <div className={styles.nameRecentGame}>Alan Wake 2</div>
                <div className={styles.progressBar}>
                  42% <i class="bx bxs-medal"></i>
                </div>
              </div>
            </div>

            <div className={styles.recent}>
              {AlanWake.map((achievements) => (
                <div key={achievements} className={styles.recentAchievements}>
                  <img src={achievements.image} alt={achievements.name} />
                  <div>
                    <div>
                      <h3>{achievements.name}</h3>
                      <p className={styles.descriptionRecent}>
                        {achievements.Description}
                      </p>
                    </div>
                    <div>
                      <p>
                        {achievements.EXP} <i class="bx bxs-medal"></i>
                      </p>
                      <p>
                        {achievements.Taxa} <i class="bx bxs-lock-open-alt"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
