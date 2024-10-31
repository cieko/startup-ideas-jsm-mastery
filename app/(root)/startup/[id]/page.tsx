import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true; // for ppr to work, which is in experiment now (DATE: Oct 31, 2024)

const StartupDetailsPage = async (
  { params }: { params: Promise<{ id: string }> } // how we know, the params has id, because we name our dynamic folder id
) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();

  return <div>StartupDetailsPage</div>;
};

export default StartupDetailsPage;
