import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./review-card.module.css";

export type ReviewCardType = {
  className?: string;
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: NextPage<ReviewCardType> = ({
  className = "",
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.reviewcard, className].join(" ")}>
      <div className={styles.reviewCard}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.reviewerInfoChild}
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className={styles.reviewerNameDate}>
            <b className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </b>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.reviewContent}>
          <b className={styles.b}>{prop}</b>
          <img className={styles.ratingIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
