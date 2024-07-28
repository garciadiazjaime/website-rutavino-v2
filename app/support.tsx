import { Section } from "@/app/types";

export function getMetadata(section: string) {
  const sections: Section = {
    home: {
      title: "Restaurantes, Hoteles y Viñedos del Valle de Guadalupe",
      description:
        "Encuentra lo mejores de la Ruta del Vino Ensenada del Valle de Guadalupe",
      icons: "/favicon.webp",
      openGraph: {
        title: "Restaurantes, Hoteles y Viñedos del Valle de Guadalupe",
        description:
          "Encuentra lo mejores de la Ruta del Vino Ensenada del Valle de Guadalupe",
        images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
        url: "https://www.larutadelvinoensenada.com/",
      },
    },
    vinedos: {
      title: "Viñedos del Valle de Guadalupe",
      description:
        "Encuentra los mejores Viñedos de la Ruta del Vino Ensenada del Valle de Guadalupe",
      icons: "/favicon.webp",
      openGraph: {
        title: "Restaurantes, Hoteles y Viñedos del Valle de Guadalupe",
        description:
          "Encuentra los mejores Viñedos de la Ruta del Vino Ensenada del Valle de Guadalupe",
        images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
        url: "https://www.larutadelvinoensenada.com/",
      },
    },
    restaurantes: {
      title: "Restaurantes en el Valle de Guadalupe",
      description:
        "Encuentra los mejores Restaurantes de la Ruta del Vino Ensenada del Valle de Guadalupe",
      icons: "/favicon.webp",
      openGraph: {
        title: "Restaurantes en el Valle de Guadalupe",
        description:
          "Encuentra los mejores Restaurantes de la Ruta del Vino Ensenada del Valle de Guadalupe",
        images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
        url: "https://www.larutadelvinoensenada.com/",
      },
    },
    hoteles: {
      title: "Hoteles en el Valle de Guadalupe",
      description:
        "Encuentra los mejores Hoteles de la Ruta del Vino Ensenada del Valle de Guadalupe",
      icons: "/favicon.webp",
      openGraph: {
        title: "Hoteles en el Valle de Guadalupe",
        description:
          "Encuentra los mejores Hoteles de la Ruta del Vino Ensenada del Valle de Guadalupe",
        images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
        url: "https://www.larutadelvinoensenada.com/",
      },
    },
  };

  return sections[section];
}
