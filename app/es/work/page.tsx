import { WorkIndex, indexMetadata } from "@/app/work/views";

export const metadata = indexMetadata("es");

export default function Page() {
  return <WorkIndex locale="es" />;
}
