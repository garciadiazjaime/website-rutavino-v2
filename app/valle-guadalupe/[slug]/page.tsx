import Content from "@/app/Content";

export default function Page({ params }: { params: { slug: string } }) {
  return <Content slug={params.slug} />;
}
