import type { NextPage } from "next";
import styles from "./search-section-header.module.css";

export type SearchSectionHeaderType = {
  className?: string;
};

const SearchSectionHeader: NextPage<SearchSectionHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.searchSectionHeader, className].join(" ")}>
      <div className={styles.staysNearbyParent}>
        <h3 className={styles.staysNearby}>Stays nearby:</h3>
        <b className={styles.torontoOntario}>Toronto Ontario</b>
      </div>
      <div className={styles.layoutSelection}>
        <div className={styles.bentoMenu1Wrapper}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.mapWrapper}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
