import { getCldImageUrl } from "astro-cloudinary/helpers";

export default function getImageVampire(id: string): {
  transformedUrl: string;
  originalUrl: string;
} {
  const transformedUrl = getCldImageUrl({
    src: id,
    replace: {
      from: "person",
      to: "spooky vampire",
      preserveGeometry: true,
    },
  });

  const originalUrl = getCldImageUrl({
    src: id,
  });


  return {
    transformedUrl,
    originalUrl,
  };
}
