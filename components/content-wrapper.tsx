import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./content-wrapper.module.css";

export type ContentWrapperType = {
  className?: string;
};

const ContentWrapper: NextPage<ContentWrapperType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.mainContent}>
        <img
          className={styles.contentPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.imageGallery}>
          <img
            className={styles.imageGalleryChild}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.imageGalleryItem}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.imageGalleryInner}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.galleryImageParent}>
            <img
              className={styles.galleryImageIcon}
              alt=""
              src="/gallery-image@2x.png"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.listingInfo}>
        <div className={styles.infoWrapper}>
          <div className={styles.detailsWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.ratingWrapper}>
              <div className={styles.ratingValueParent}>
                <b className={styles.ratingValue}>5.0</b>
                <img
                  className={styles.ratingStarIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.reviewsWrapper}>
                <u className={styles.reviews}>200 Reviews</u>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.bookingWrapper}>
          <div className={styles.bookingInfo}>
            <div className={styles.priceWrapper}>
              <b className={styles.priceValue}>$658</b>
              <div className={styles.nightlyPrice}>
                <a className={styles.night}>/night</a>
              </div>
            </div>
            <div className={styles.trendWrapper}>
              <div className={styles.trendInfo}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.trendBackground} />
                  </div>
                </div>
                <div className={styles.trendLabel}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
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
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostWrapper}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.hostInfo}>
            <img
              className={styles.hostAvatarIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.hostName}>
              <b className={styles.michelleWard}>Michelle Ward</b>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.hostBadge}>
              <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
