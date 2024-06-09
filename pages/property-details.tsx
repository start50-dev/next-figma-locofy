import type { NextPage } from "next";
import Header1 from "../components/header1";
import ContentWrapper from "../components/content-wrapper";
import ListingDescription from "../components/listing-description";
import LocationAmenities from "../components/location-amenities";
import ReviewSection from "../components/review-section";
import SimilarStaysSection from "../components/similar-stays-section";
import Footer from "../components/footer";
import styles from "./property-details.module.css";

const PropertyDetails: NextPage = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header1 />
      <main className={styles.pageContent}>
        <ContentWrapper />
        <section className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer />
      <footer className={styles.band}>
        <div className={styles.legalContent}>
          <div className={styles.legalInfo}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.policyTerms}>
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

export default PropertyDetails;
