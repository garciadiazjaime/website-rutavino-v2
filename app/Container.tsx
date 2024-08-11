"use client";

import { useState } from "react";

import Map from "@/app/components/Map";

import places from "@/app/places";

import { Place } from "@/app/types";
import Card from "@/app/components/Card";

export default function Container(props: { selectedIndex: number }) {
  const [selectedPlace, setSelectedPlace] = useState<Place>(
    places[props.selectedIndex]
  );

  return (
    <>
      <Map
        places={places}
        markerClickHandler={setSelectedPlace}
        selectedPlace={selectedPlace}
      />
      <main
        style={{
          fontSize: 24,
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        {selectedPlace && <Card {...selectedPlace} />}
      </main>
    </>
  );
}
