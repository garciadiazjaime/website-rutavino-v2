import Image from "next/image";

import { Place } from "@/app/types";
import { Instagram, Website } from "../svgs";
import { tokens } from "../support";

const regex = /(?:https?:\/\/www\.)?instagram\.com\/(\w*)\/?/;

const getIGUser = (url: string) => {
  const match = url.match(regex);

  return match?.[1];
};

const getHostname = (url: string) => {
  return new URL(url).hostname.replace("www.", "");
};

export default function Card(props: Place) {
  return (
    <div key={props.slug}>
      <div style={{ margin: "auto", maxWidth: 600 }}>
        <h3
          style={{
            fontFamily: "sans-serif",
            borderBottom: "1px solid #CCC",
            paddingBottom: 12,
          }}
        >
          {props.name}
        </h3>
        <p style={{ padding: "12px 0" }}>{props.description.default}</p>
        <div style={{ marginTop: 20 }}>
          <a
            href={props.maps}
            target="_blank"
            rel="nofollow"
            style={{
              padding: 12,
              border: `1px solid ${tokens.colors.primary}`,
              color: tokens.colors.primary,
              display: "inline-block",
            }}
          >
            Abrir en Google Maps
          </a>
          <ul
            style={{
              listStyle: "none",
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {props.instagram && (
              <li>
                <a
                  href={props.instagram}
                  target="_blank"
                  rel="nofollow"
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    height: "100%",
                    padding: "12px 0",
                  }}
                >
                  <Instagram />
                  <span>{getIGUser(props.instagram)}</span>
                </a>
                <div
                  style={{ width: "80%", height: 1, backgroundColor: "#CCC" }}
                />
              </li>
            )}

            {props.website && (
              <li>
                <a
                  href={props.website}
                  target="_blank"
                  rel="nofollow"
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    height: "100%",
                    padding: "12px 0",
                  }}
                >
                  <Website />
                  <span>{getHostname(props.website)}</span>
                </a>
                <div
                  style={{ width: "80%", height: 1, backgroundColor: "#CCC" }}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <Image
          src={`/valle-guadalupe/${props.slug}/${props.images.cover}`}
          alt={props.name}
          width={400}
          height={200}
          style={{
            width: "calc(100% + 20px)",
            height: "auto",
            maxHeight: 450,
            objectFit: "cover",
            marginTop: 20,
            marginLeft: -20,
          }}
        />
      </div>
    </div>
  );
}
