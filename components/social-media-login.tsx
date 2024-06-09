import type { NextPage } from "next";
import styles from "./social-media-login.module.css";

export type SocialMediaLoginType = {
  className?: string;
  orSignUpWith?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const SocialMediaLogin: NextPage<SocialMediaLoginType> = ({
  className = "",
  orSignUpWith,
  image,
  image1,
  image2,
}) => {
  return (
    <div className={[styles.socialMediaLogin, className].join(" ")}>
      <div className={styles.orSignUp}>{orSignUpWith}</div>
      <div className={styles.socialLoginContainer}>
        <div className={styles.socialLogin}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
          <div className={styles.text}>Google</div>
        </div>
        <div className={styles.socialLogin1}>
          <img className={styles.imageIcon1} alt="" src={image1} />
          <div className={styles.text1}>Facebook</div>
        </div>
        <div className={styles.socialLogin2}>
          <img className={styles.imageIcon2} alt="" src={image2} />
          <div className={styles.text2}>Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
