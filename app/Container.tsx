"use client";

import { useState } from "react";

import Map from "@/app/components/Map";

import places from "@/app/places";

import { Place } from "@/app/types";
import Card from "@/app/components/Card";
import Cover from "@/app/components/Cover";

import styles from "./container.module.css";

export default function Container(props: { selectedIndex: number }) {
  const [selectedPlace, setSelectedPlace] = useState<Place>(
    places[props.selectedIndex]
  );

  return (
    <>
      <main
        style={{
          fontSize: 24,
          margin: "0 auto",
          position: "relative",
        }}
        className={styles.main}
      >
        <div style={{ flex: 1, borderRight: "1px solid #CCC" }}>
          <Cover slug="home" />
          <Card {...selectedPlace} />
        </div>
        <div style={{ flex: 1, position: "relative" }}>
          <div
            style={{
              position: "fixed",
              top: 72,
              right: 0,
              width: "50%",
              maxHeight: 1057,
              padding: 20,
            }}
          >
            <Map
              places={places}
              markerClickHandler={setSelectedPlace}
              selectedPlace={selectedPlace}
            />
          </div>
        </div>
      </main>
    </>
  );
}
