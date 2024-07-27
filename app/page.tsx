import Place from "@/app/Place";
import places from "@/app/places";

export default function Home() {
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
          margin: 12,
          fontSize: 18,
        }}
      >
        <a href="" style={{ padding: 12 }}>
          Vino
        </a>
        <a href="" style={{ padding: 12 }}>
          Comida
        </a>
        <a href="" style={{ padding: 12 }}>
          Hospedaje
        </a>
      </nav>

      <section
        style={{
          padding: "220px 12px",
          backgroundColor: "#660253",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48 }}>
          Restaurantes, Hoteles y Viñedos del Valle de Guadalupe
        </h1>
      </section>

      <p style={{ margin: "80px 12px" }}>
        La Ruta del Vino, es el nombre que se le da al conjunto de viñedos,
        restaurantes y hoteles en el Valle de Guadalupe.
      </p>

      <section>
        {places.map((item) => (
          <Place {...item} />
        ))}
      </section>

      <footer style={{ margin: "100px 12px 20px" }}>
        La Ruta del Vino Ensenada
      </footer>
    </main>
  );
}
