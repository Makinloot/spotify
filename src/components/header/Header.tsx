import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import testUser from '../../assets/liked-playlist.png';

import "./Header.scss";

const Header: React.FC<{
  username: string;
}> = ({ username }) => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // set header background on scroll
  const handleHeader = () => {
    if (window.scrollY > 50) setShowHeader(true);
    else setShowHeader(false);
  };

  // open user menu
  const handleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === menuRef.current) setShowMenu(!showMenu);
  };

  // close user menu by clicking outside
  const handleMenuListener = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as HTMLDivElement))
      setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    window.addEventListener("mousedown", handleMenuListener);
    return () => {
      window.removeEventListener("scroll", handleHeader);
      window.removeEventListener("mousedown", handleMenuListener);
    };
  }, []);

  return (
    <header className={showHeader ? "header active" : "header"}>
      <div
        className="header-user flex-row"
        onClick={(e) => handleMenu(e)}
        ref={menuRef}
      >
        <div className="header-user-img flex-row">
          <img src={testUser} alt="user icon" />
        </div>
        <div className="header-user-name">{username || 'default'}</div>
        <div className={showMenu ? "header-user-arrow rotated flex-row" : "header-user-arrow flex-row"}>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        <nav
          className={showMenu ? "header-user-menu active" : "header-user-menu"}
        >
          <li>
            <Link to="#">account</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="#">settings</Link>
          </li>
          <li>
            <Link to="#">log out</Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
