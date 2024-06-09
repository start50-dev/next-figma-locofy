import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/header";
import HeroContainer from "../components/hero-container";
import SearchSectionHeader from "../components/search-section-header";
import ListingItem from "../components/listing-item";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
  const router = useRouter();

  const onListingItemContainerClick = useCallback(() => {
    router.push("/property-details");
  }, [router]);

  const onShowMoreButtonClick = useCallback(() => {
    //TODO: Please show more List Items on click of this button.
  }, []);

  return (
    <div className={styles.homepage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            listingImage="/listing-image@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            showBestTime={false}
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="81px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            showBestTime={false}
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            showBestTime
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="129px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            showBestTime
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            showBestTime={false}
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="118px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            showBestTime
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="102px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            showBestTime={false}
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="112px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            showBestTime={false}
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            showBestTime
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="79px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            showBestTime={false}
            propFlex="1"
            propDisplay="inline-block"
            propMinWidth="121px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            showBestTime
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
            propFlex1="unset"
            propDisplay2="inline-block"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            showBestTime={false}
            propFlex="1"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
            propFlex1="1"
            propDisplay2="unset"
            propMinWidth2="unset"
          />
        </section>
        <Button
          className={styles.showMoreButton}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
          onClick={onShowMoreButtonClick}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
