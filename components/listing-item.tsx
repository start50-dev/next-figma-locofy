import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./listing-item.module.css";

export type ListingItemType = {
  className?: string;
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propDisplay2?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: NextPage<ListingItemType> = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propFlex,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propFlex1,
  propDisplay2,
  propMinWidth2,
  onListingItemContainerClick,
}) => {
  const listingItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const priceChartStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemContainerClick}
      style={listingItemStyle}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
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
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <b className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </b>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <b className={styles.rating}>{rating}</b>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <b className={styles.price}>{price}</b>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart} style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
