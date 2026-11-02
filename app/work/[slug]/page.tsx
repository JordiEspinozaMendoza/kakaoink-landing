import { CaseStudyView, caseMetadata, staticParams } from "../views";

export const dynamicParams = false;
export const generateStaticParams = staticParams;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  return caseMetadata((await params).slug, "en");
}

export default async function Page({ params }: PageProps<"/work/[slug]">) {
  return <CaseStudyView slug={(await params).slug} locale="en" />;
}
