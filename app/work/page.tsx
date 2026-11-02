import { WorkIndex, indexMetadata } from "./views";

export const metadata = indexMetadata("en");

export default function Page() {
  return <WorkIndex locale="en" />;
}
