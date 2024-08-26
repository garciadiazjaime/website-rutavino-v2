import Image from "next/image";
import { getMetadata } from "@/app/support";

export default function Cover(props: { slug: string }) {
  const metadata = getMetadata(props.slug);

  return (
    <section>
      <div style={{ position: "relative" }}>
        <Image
          src="/valle-guadalupe/cover.jpg"
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: 600,
            objectFit: "cover",
          }}
          alt="Valle de Guadalupe"
        />
        <div
          style={{
            width: "100%",
            height: 600,
            background: "black",
            position: "absolute",
            left: 0,
            top: 0,
            opacity: 0.7,
          }}
        ></div>
        <div
          style={{
            padding: 12,
            color: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "auto",
              maxWidth: 600,
            }}
          >
            <h1
              style={{
                fontSize: 36,
                fontFamily: "sans-serif",
                fontWeight: 500,
              }}
            >
              {metadata.title as string}
            </h1>
            <h2
              style={{
                marginTop: 20,
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: 30,
              }}
            >
              La Ruta del Vino Ensenada
            </h2>
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 20,
          fontFamily: "serif",
          opacity: 0.7,
          margin: "20px auto",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <p>
          El Valle de Guadalupe es la principal región vinícola de México,
          ubicada en el estado de Baja California, a solo unos kilómetros de
          Ensenada. Con paisajes impresionantes de colinas, viñedos y olivos, el
          Valle se ha convertido en un destino imprescindible para los amantes
          del vino y la gastronomía.
        </p>
        <p>
          La Ruta del Vino en el Valle de Guadalupe ofrece una experiencia
          única, donde se puede disfrutar de catas de vinos artesanales en más
          de 100 vinícolas, muchas de ellas reconocidas a nivel internacional.
          Además, la región es famosa por sus restaurantes de clase mundial que
          fusionan ingredientes locales y técnicas culinarias innovadoras,
          creando una propuesta gastronómica que complementa perfectamente los
          vinos de la zona.
        </p>
        <p>
          Además del vino, los visitantes pueden explorar los encantadores
          paisajes, participar en recorridos por los viñedos y bodegas,
          disfrutar de alojamientos boutique y participar en festivales anuales
          como las Fiestas de la Vendimia, que celebran la cosecha con música,
          eventos culturales y degustaciones.
        </p>
      </div>
    </section>
  );
}
