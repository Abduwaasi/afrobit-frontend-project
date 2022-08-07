import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import { AppCheckbox, AppInput, FormButton } from "../components/Form";
import * as yup from "yup";
import { Navbar, Footer } from "../components";

import styles from "../styles/pages/Register.module.scss";
const Register = () => {
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
            <Formik
              initialValues={{
                email: "",
                verification: "",
                password: "",
                confirmPassword: "",
                terms: "",
                privacy: "",
              }}
            >
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
                  <div
                    className={styles.main__ellipse__formCenter__verification}
                  >
                    <div>
                      <AppInput
                        label="Verification code"
                        type="password"
                        id="verification"
                        name="verification"
                        inputmode="numeric"
                      />
                    </div>
                    <button>Send</button>
                  </div>
                </div>
                <div className={styles.main__ellipse__formCenter__inputWrapper}>
                  <AppInput
                    label="Your Password"
                    type="password"
                    id="password"
                    name="password"
                    showPassword={true}
                  />
                </div>
                <div className={styles.main__ellipse__formCenter__inputWrapper}>
                  <AppInput
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    showPassword={true}
                  />
                </div>

                <FormButton text="Register" type="submit" />
                <AppCheckbox name="terms">
                  <span className={styles.main__ellipse__formCenter__span}>
                    I have read, understood, and agree to be bound by the
                    <br />
                    <Link href="#">
                      <a>Terms of Service</a>
                    </Link>
                    .
                  </span>
                </AppCheckbox>
                <AppCheckbox name="privacy">
                  <span className={styles.main__ellipse__formCenter__span}>
                    I acknowledge that I have read and understood the{" "}
                    <Link href="#">
                      <a>Privacy Policy </a>
                    </Link>
                    , and I agree to the processing of my personal data for the
                    purpose of "To Register you as a new customer" accordingly
                  </span>
                </AppCheckbox>
              </Form>
            </Formik>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
