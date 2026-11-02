import { CaseStudyView, caseMetadata, staticParams } from "@/app/work/views";

export const dynamicParams = false;
export const generateStaticParams = staticParams;

export async function generateMetadata({ params }: PageProps<"/es/work/[slug]">) {
  return caseMetadata((await params).slug, "es");
}

export default async function Page({ params }: PageProps<"/es/work/[slug]">) {
  return <CaseStudyView slug={(await params).slug} locale="es" />;
}
