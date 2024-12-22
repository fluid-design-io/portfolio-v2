import { StaticImageData } from "next/image";

export const RssImageCard = ({
  alt,
  description,
  src,
}: {
  alt: string;
  description?: string;
  src: StaticImageData | string;
}) => {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  const srcString =
    typeof src === "string" ? `${baseURL}${src}` : `${baseURL}${src.src}`;
  return (
    <figure>
      <img
        alt={alt}
        src={srcString}
        style={{ height: "auto", width: "100%" }}
      />
      {description && <figcaption>{description}</figcaption>}
    </figure>
  );
};

export const RssImageCardList = ({
  images,
}: {
  images: {
    alt: string;
    description?: string;
    src: StaticImageData | string;
  }[];
}) => {
  return (
    <ul>
      <li>
        {images.map((image, index) => (
          <RssImageCard
            alt={image.alt}
            description={image.description}
            key={`${image.alt}-${index}`}
            src={image.src}
          />
        ))}
      </li>
    </ul>
  );
};
