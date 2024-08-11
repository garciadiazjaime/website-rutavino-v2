import { getMetadata } from "@/app/support";

export default function Cover(props: { slug: string }) {
  const metadata = getMetadata(props.slug);

  return (
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
  );
}
