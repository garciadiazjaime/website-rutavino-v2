import Image from "next/image";

import { Place } from "@/app/types";
import { Instagram, Maps, Website } from "./svgs";

export default function Page(props: Place) {
  return (
    <div style={{ marginTop: 100 }} key={props.slug}>
      <Image
        src={`/valle-guadalupe/${props.slug}/${props.images.cover}`}
        alt={props.name}
        width={800}
        height={200}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div style={{ margin: 12 }}>
        <h3 style={{ margin: "12px 0" }}>{props.name}</h3>
        <p>{props.description}</p>
        <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
          {props.instagram && (
            <a
              href={props.instagram}
              target="_blank"
              rel="nofollow"
              style={{ padding: 6 }}
            >
              <Instagram />
            </a>
          )}
          {props.maps && (
            <a
              href={props.maps}
              target="_blank"
              rel="nofollow"
              style={{ padding: 6 }}
            >
              <Maps />
            </a>
          )}
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="nofollow"
              style={{ padding: 6 }}
            >
              <Website />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
