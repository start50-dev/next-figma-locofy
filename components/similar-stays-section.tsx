import type { NextPage } from "next";
import StayCard from "./stay-card";
import styles from "./similar-stays-section.module.css";

export type SimilarStaysSectionType = {
  className?: string;
};

const SimilarStaysSection: NextPage<SimilarStaysSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.similarStaysSection, className].join(" ")}>
      <div className={styles.similarHeader}>
        <h3 className={styles.similarStays}>Similar stays</h3>
        <a className={styles.button}>View all</a>
      </div>
      <div className={styles.stays}>
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/superhost-icon.svg"
              />
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
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <div className={styles.urbanLoft}>Urban Loft</div>
                <div className={styles.urbanLoft1}>Urban Loft</div>
              </div>
              <div className={styles.parent}>
                <b className={styles.b}>4.8</b>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <b className={styles.b1}>$502</b>
                <div className={styles.night}>/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
          propLineHeight="unset"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
