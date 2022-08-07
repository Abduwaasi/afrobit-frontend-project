import Image from "next/image";
import { Formik, Form } from "formik";
import { Navbar, Footer, Lines } from "../components";

import {
  AppInput,
  AppSelect,
  FormButton,
  CryptoInput,
} from "../components/Form";

import coins from "/public/static/coins.svg";
import styles from "../styles/pages/Swap.module.scss";
import MySelect from "../components/Form/MySelect";

const Swap = () => {
  const options = [
    { value: "Abe", label: "Abe", customAbbreviation: "A" },
    { value: "John", label: "John", customAbbreviation: "J" },
    { value: "Dustin", label: "Dustin", customAbbreviation: "D" },
  ];
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.swap__banner}>
          <div className={styles.swap__banner__left}>
            <h3>Swap From As Low As $5</h3>
            <p>Low slippage One-click Swap between any two coins</p>
          </div>
          <div>
            <Image src={coins} alt="coins images" />
          </div>
        </section>
        <section>
          <MySelect options={options} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Swap;
