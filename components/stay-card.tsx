import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./stay-card.module.css";

export type StayCardType = {
  className?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const StayCard: NextPage<StayCardType> = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const favoriteIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.favoriteIcon} style={favoriteIconStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img
            className={styles.heartIcon}
            loading="lazy"
            alt=""
            src="/hearticon-1.svg"
          />
        </div>
      </div>
      <div className={styles.stayInfo}>
        <div className={styles.stayDetails}>
          <div className={styles.stayNameLocation}>
            <b className={styles.brightwoodsEstate}>{brightwoodsEstate}</b>
            <div
              className={styles.bridlepathOntarioCanada}
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRating}>
            <b className={styles.stayRatingValue}>4.8</b>
            <img
              className={styles.stayRatingStars}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.stayPrice}>
          <div className={styles.stayPriceInfo}>
            <b className={styles.stayPriceValue}>$502</b>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
