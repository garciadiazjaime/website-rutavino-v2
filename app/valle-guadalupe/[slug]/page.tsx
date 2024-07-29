import Content from "@/app/Content";
import { sections } from "@/app/support";

export async function generateStaticParams() {
  const slugs = Object.keys(sections)
    .filter((key) => key !== "home")
    .map((slug) => ({ slug }));

  return slugs;
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Content slug={params.slug} />;
}
