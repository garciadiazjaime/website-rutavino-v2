import type { Metadata } from "next";

import Content from "@/app/Content";
import { getMetadata } from "@/app/support";

export function generateMetadata(): Metadata {
  const metadata = getMetadata("home");

  return metadata;
}

export default function Home() {
  return <Content slug="home" />;
}
