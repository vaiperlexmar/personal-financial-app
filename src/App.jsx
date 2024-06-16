import logoImg from "./assets/img/logo.svg";
import notificationsIcon from "./assets/img/notifications.svg";
import settingsIcon from "./assets/img/settings.svg";
import avatarImg from "./assets/img/avatar.png";
import "./styles/main.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="logo__img" src={logoImg} alt="" />
          <span className="logo__text">financy</span>
        </div>

        <nav className="header__nav">
          <ul className="header__links">
            <li>
              <a className="link link_active" href="#">
                Overview
              </a>
            </li>
            <li>
              {" "}
              <a className="link link_inactive" href="#">
                Transactions
              </a>
            </li>
            <li>
              {" "}
              <a className="link link_inactive" href="#">
                Analytics
              </a>
            </li>
            <li>
              {" "}
              <a className="link link_inactive" href="#">
                Accounts
              </a>
            </li>
            <li>
              {" "}
              <a className="link link_inactive" href="#">
                Wallet
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__settings settings">
          <button className="btn settings" href="#">
            <img src={settingsIcon} alt="" />
          </button>
          <button className="btn notification" href="#">
            <img src={notificationsIcon} alt="" />
          </button>
          <a className="profile" href="#">
            <img className="profile__img" src={avatarImg} alt="" />
          </a>
        </div>
      </header>
    </>
  );
}

export default App;
