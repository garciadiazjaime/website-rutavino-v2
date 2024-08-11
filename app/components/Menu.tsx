import Link from "next/link";

export default function Menu(props: { slug: string }) {
  const getMenuActiveItem = (value: string) => {
    if (value === props.slug) {
      return { fontWeight: "bold", borderBottom: "4px solid #000" };
    }

    return {};
  };

  return (
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
  );
}
