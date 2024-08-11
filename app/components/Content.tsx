import type { Metadata } from "next";

import Card from "@/app/components/Card";
import data from "@/app/places";
import { Categories } from "@/app/types";
import Menu from "@/app/components/Menu";
import Cover from "@/app/components/Cover";

import { getMetadata } from "@/app/support";

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
  const places =
    props.slug === "home"
      ? data
      : data.filter(
          (item) =>
            item.categories[slugCategoryMapper[props.slug] as keyof Categories]
        );

  return (
    <main
      style={{
        fontSize: 24,
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <Menu slug={props.slug} />

      <Cover slug={props.slug} />

      <section>
        {places.map((item) => (
          <Card {...item} key={item.slug} />
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
