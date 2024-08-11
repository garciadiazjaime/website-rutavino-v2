"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

import { Place } from "@/app/types";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 32.0283518,
  lng: -116.6355093,
};

export default function Container(props: {
  places: Place[];
  markerClickHandler: (place: Place) => void;
  selectedPlace: Place;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const markerClickHandler = (place: Place) => {
    props.markerClickHandler(place);
  };

  if (isLoaded) {
    return (
      <GoogleMap mapContainerStyle={containerStyle} zoom={12} center={center}>
        {props.places.map((place, index) => {
          return (
            <MarkerF
              key={place.slug}
              position={{
                lat: place.lat,
                lng: place.lng,
              }}
              onClick={() => markerClickHandler(place)}
              icon={{
                url:
                  place.slug === props.selectedPlace.slug
                    ? "/marker-selected.svg"
                    : "/marker.svg",
              }}
            />
          );
        })}
      </GoogleMap>
    );
  }

  return <div style={containerStyle} />;
}
