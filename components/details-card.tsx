import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./details-card.module.css";

export type DetailsCardType = {
  className?: string;
  detailsCardTop?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DetailsCard: NextPage<DetailsCardType> = ({
  className = "",
  detailsCardTop,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const aPrivateRoomStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img
        className={styles.detailsCardTop}
        loading="lazy"
        alt=""
        src={detailsCardTop}
      />
      <div className={styles.detailsCardContent}>
        <b
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </b>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
