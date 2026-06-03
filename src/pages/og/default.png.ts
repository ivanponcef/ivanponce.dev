import { generateOGImage } from "@/lib/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const png = await generateOGImage({
    title: "Ivan Ponce",
    description:
      "Senior Python backend engineer building production AI infrastructure.",
  });
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
