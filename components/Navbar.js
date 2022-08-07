import Image from "next/image";
import Link from "next/link";
import logo from "/public/static/afrobitLogo.svg";
import { BlackButton, YellowButton } from "./buttons";

import styles from "../styles/components/Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHeref>
        <a className={styles.nav__logo}>
          <Image src={logo} alt="afrobit logo" />
        </a>
      </Link>

      <ul className={styles.nav__list}>
        <Link href="#" passHref>
          <a>Trade</a>
        </Link>
        <Link href="#" passHref>
          <a>Earn</a>
        </Link>
        <Link href="#" passHref>
          <a>Invest</a>
        </Link>
        <Link href="#" passHref>
          <a>Loan</a>
        </Link>
        <Link href="#" passHref>
          <a>Club</a>
        </Link>
        <Link href="#" passHref>
          <a>Execution</a>
        </Link>
      </ul>
      <div className={styles.nav__btnWrapper}>
        <div className={styles.nav__btnWrapper__btn}>
          <BlackButton text="Login" />
        </div>
        <div className={styles.nav__btnWrapper__btn}>
          <YellowButton text="Register" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
