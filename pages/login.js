import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import { AppInput, FormButton } from "../components/Form";
import * as yup from "yup";
import { Navbar, Footer } from "../components";
// Images

import google from "/public/static/google.svg";
import facebook from "/public/static/facebook.svg";
import apple from "/public/static/apple.svg";

import styles from "../styles/pages/Login.module.scss";
const Login = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.main__ellipse}>
          <div className={styles.main__ellipse__formCenter}>
            <div className={styles.main__ellipse__formCenter__btnWrapper}>
              <button
                className={styles.main__ellipse__formCenter__btnWrapper__email}
              >
                Email
              </button>
              <button
                className={styles.main__ellipse__formCenter__btnWrapper__phone}
              >
                Phone
              </button>
            </div>
            <Formik initialValues={{ email: "", password: "" }}>
              <Form>
                <div className={styles.main__ellipse__formCenter__inputWrapper}>
                  <AppInput
                    label="Your Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className={styles.main__ellipse__formCenter__inputWrapper}>
                  <AppInput
                    label="Your Password"
                    type="Password"
                    id="password"
                    name="password"
                    showPassword={true}
                  />
                </div>
                <Link href="#" passHref>
                  <a className={styles.main__ellipse__formCenter__forgot}>
                    Forgot Password?
                  </a>
                </Link>
                <FormButton text="Login" type="submit" />
              </Form>
            </Formik>
            <div className={styles.main__ellipse__formCenter__options}>
              <span></span>
              <p>or login with</p>
              <span></span>
            </div>
            <div className={styles.main__ellipse__formCenter__alternative}>
              <a href="#">
                <Image src={google} alt="google icon" />
              </a>
              <a href="#">
                <Image src={facebook} alt="facebook icon" />
              </a>
              <a href="#">
                <Image src={apple} alt="apple icon" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
