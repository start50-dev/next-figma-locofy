import type { NextPage } from "next";
import Header from "../components/header";
import Form from "../components/form";
import styles from "./sign-in-page.module.css";

const SignInPage: NextPage = () => {
  return (
    <div className={styles.signInPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.loginFormContainer}>
          <Form />
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.footerContentContainer}>
          <div className={styles.footerInfoContainer}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
