import Content from "./Components/Content";
import Library from "./Components/Library-Main";
import Settings from "./Components/Settings";
import EldenRing from "./Components/Library/Elden-Ring";
import Fifa23 from "./Components/Library/Fifa-23";
import Fortnite from "./Components/Library/Fortnite";
import GtaV from "./Components/Library/Gta-V";
import RedDeadRedemption from "./Components/Library/Red-Dead-Redemption-2";
import ForzaHorizon from "./Components/Library/Forza-Horizon-5";

import styles from "./Components/Styles/Header Style/Header.module.css";

import imagem from "./Images/logo.png";

import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className={styles.header} id="header">
          <div className={styles.headerLeft}>
            <div className={styles.logo}>
              <img src={imagem} alt="logo" />
            </div>
          </div>
          <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/Library">Library</a>
            <a href="/Settings">Settings</a>
          </nav>
          <div className={styles.headerRight}>
            <a href="/#" className={styles.perfil}>
              <i class="bx bxs-user-circle"></i>Perfil
            </a>
            <br />
            <a href="/#" className={styles.type}>
              Dashboard: Games
            </a>
          </div>
        </header>
      </div>
      <ReactRoutes>
        <Route exact path="/" element={<Content />}></Route>
        <Route exact path="/Library" element={<Library />}></Route>
        <Route exact path="/Settings" element={<Settings namePerfil='Allan' idade='16' gameCounter='6'/>}></Route>

        <Route path="/Library/Elden-Ring" element={<EldenRing />}></Route>
        <Route path="/Library/Fortnite" element={<Fortnite />}></Route>
        <Route path="/Library/Fifa-23" element={<Fifa23 />}></Route>
        <Route path="/Library/Gta-V" element={<GtaV />}></Route>
        <Route
          path="/Library/Red-Dead-Redemption-2"
          element={<RedDeadRedemption />}
        ></Route>
        <Route
          path="/Library/Forza-Horizon-5"
          element={<ForzaHorizon />}
        ></Route>
      </ReactRoutes>
    </Router>
  );
}

export default App;