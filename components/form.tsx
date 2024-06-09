import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./social-media-login";
import { useRouter } from "next/router";
import styles from "./form.module.css";

export type FormType = {
  className?: string;
};

const Form: NextPage<FormType> = ({ className = "" }) => {
  const router = useRouter();

  const onDontHaveAnClick = useCallback(() => {
    router.push("/sign-up-page");
  }, [router]);

  return (
    <div className={[styles.form, className].join(" ")}>
      <div className={styles.signInFormContainer}>
        <h2 className={styles.signIn}>Sign in</h2>
        <div className={styles.form1}>
          <form className={styles.form2}>
            <div className={styles.formFields}>
              <TextField
                className={styles.email}
                placeholder="Email address"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconaccount.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.8px",
                  },
                  "& .MuiInputBase-input": { color: "#787878" },
                }}
              />
              <TextField
                className={styles.password}
                placeholder="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconpassword.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.8px",
                  },
                  "& .MuiInputBase-input": { color: "#787878" },
                }}
              />
            </div>
            <Button
              className={styles.searchFlightsButton}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
                width: 160,
                height: 52,
              }}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.separator} />
      <SocialMediaLogin
        orSignUpWith="Or sign in with"
        image="/image1@2x.png"
        image1="/image-16@2x.png"
        image2="/image-22@2x.png"
      />
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
    </div>
  );
};

export default Form;
