import { prefix } from "@/constants";

export const openGraphImage = {
  images: [`${prefix}/images/og-image.png`],
};

export const metadataTitle = "KWDC";
export const metadataDescription = "Koreawide Developer Conference";

export const defaultMetadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    ...openGraphImage,
  },
};
