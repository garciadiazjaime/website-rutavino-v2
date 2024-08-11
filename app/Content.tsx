import Link from "next/link";
import type { Metadata } from "next";

import { getMetadata } from "@/app/support";
import Place from "@/app/Place";
import data from "@/app/places";
import { Categories } from "@/app/types";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const metadata = getMetadata(params.slug);

  return metadata;
}

const slugCategoryMapper: { [key: string]: string } = {
  restaurantes: "food",
  vinedos: "wine",
  hoteles: "hotel",
};

export default function Content(props: { slug: string }) {
  const metadata = getMetadata(props.slug);

  const places =
    props.slug === "home"
      ? data
      : data.filter(
          (item) =>
            item.categories[slugCategoryMapper[props.slug] as keyof Categories]
        );

  const getMenuActiveItem = (value: string) => {
    if (value === props.slug) {
      return { fontWeight: "bold", borderBottom: "4px solid #000" };
    }

    return {};
  };
  return (
    <main
      style={{
        fontSize: 24,
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 16,
        }}
      >
        <Link
          href="/"
          style={{ padding: "24px 12px", ...getMenuActiveItem("home") }}
        >
          Ruta del Vino
        </Link>
        <Link
          href="/valle-guadalupe/vinedos"
          style={{ padding: "24px 12px", ...getMenuActiveItem("vinedos") }}
        >
          Viñedos
        </Link>
        <Link
          href="/valle-guadalupe/restaurantes"
          style={{ padding: "24px 12px", ...getMenuActiveItem("restaurantes") }}
        >
          Restaurantes
        </Link>
        <Link
          href="/valle-guadalupe/hoteles"
          style={{ padding: "24px 12px", ...getMenuActiveItem("hoteles") }}
        >
          Hoteles
        </Link>
      </nav>

      <section
        style={{
          padding: "220px 12px",
          backgroundColor: "#660253",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48 }}>{metadata.title as string}</h1>
        <h2 style={{ marginTop: 40 }}>La Ruta del Vino Ensenada</h2>
      </section>

      <section>
        {places.map((item) => (
          <Place {...item} key={item.slug} />
        ))}
      </section>

      <footer style={{ margin: "100px 12px 40px" }}>
        <h2>La Ruta del Vino Ensenada</h2>

        <div style={{ marginTop: 40, fontSize: 16 }}>
          <p style={{ opacity: 0.6, fontWeight: "bold" }}>
            Proyecto en Colaboración con:
          </p>
          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 12,
              }}
            >
              <li>
                <a href="https://www.garitacenter.com/">Reporte de Garitas</a>
              </li>
              <li>
                <a href="https://www.feedmetj.com/">Restaurantes en Tijuana</a>
              </li>
              <li>
                <a href="http://www.playami.com">
                  Restaurantes en Playas de Tijuana
                </a>
              </li>
              <li>
                <a href="https://coupons.garitacenter.com/">
                  Papa Johns Coupons and Promo Codes
                </a>
              </li>
              <li>
                <a href="https://www.chicagomusiccompass.com/">
                  Concerts and Events in Chicago
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
