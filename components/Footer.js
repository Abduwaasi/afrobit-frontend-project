import Image from "next/image";
import Link from "next/link";
import logo from "/public/static/afrobitLogo.svg";
import appStore from "/public/static/appStore.svg";

import facebook from "/public/static/facebook2.svg";
import medium from "/public/static/medium.svg";
import twitter from "/public/static/twitter.svg";
import styles from "../styles/components/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__center}>
        <section className={styles.footer__center__left}>
          <Link href="/" passHref>
            <a className={styles.footer__center__left__logo}>
              <Image src={logo} alt="afrobit footer logo" />
            </a>
          </Link>
          <h4>Mobile App</h4>
          <Link href="#" passHref>
            <div className={styles.footer__center__left__store}>
              <Image src={appStore} alt="apple icon" />
            </div>
          </Link>
        </section>
        <section className={styles.footer__center__right}>
          <div className={styles.footer__center__right__section}>
            <h5>product</h5>
            <Link href="#" passHref>
              <a>Trade</a>
            </Link>
            <Link href="#" passHref>
              <a>Earv</a>
            </Link>
            <Link href="#" passHref>
              <a>Invest</a>
            </Link>
            <Link href="#" passHref>
              <a>APIs</a>
            </Link>
            <Link href="#" passHref>
              <a>Loan</a>
            </Link>
            <Link href="#" passHref>
              <a>Execution</a>
            </Link>
            <Link href="#" passHref>
              <a>API Documentation</a>
            </Link>
            <Link href="#" passHref>
              <a>Affiliate</a>
            </Link>
            <Link href="#" passHref>
              <a>Refferal</a>
            </Link>
            <Link href="#" passHref>
              <a>Ambassador</a>
            </Link>
          </div>
          <div className={styles.footer__center__right__section}>
            <h5>Support</h5>
            <Link href="#" passHref>
              <a>Help Center</a>
            </Link>
            <Link href="#" passHref>
              <a>Trading Fees</a>
            </Link>
            <Link href="#" passHref>
              <a>Contact Us</a>
            </Link>
          </div>
          <div className={styles.footer__center__right__section}>
            <h5>Legal</h5>
            <Link href="#" passHref>
              <a>Privacy Policy</a>
            </Link>
            <Link href="#" passHref>
              <a>Terms of Service</a>
            </Link>
            <Link href="#" passHref>
              <a>Wallet Agreement</a>
            </Link>
            <Link href="#" passHref>
              <a>Execution Agreement</a>
            </Link>
            <Link href="#" passHref>
              <a>Earn Agreement</a>
            </Link>
            <Link href="#" passHref>
              <a>Dual Currency Agreement</a>
            </Link>
            <Link href="#" passHref>
              <a>Cookie Settings</a>
            </Link>
            <Link href="#" passHref>
              <a>Privacy Preference</a>
            </Link>
            <Link href="#" passHref>
              <a>Learn More</a>
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.footer__copy}>
        <p>&copy; 2022 AFROBIT. All rights reserved.</p>
        <div>
          <a href="#">
            <Image src={twitter} alt="twitter icon" />
          </a>
          <a href="#">
            <Image src={medium} alt=" icon" />
          </a>
          <a href="#">
            <Image src={facebook} alt="twitter icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
