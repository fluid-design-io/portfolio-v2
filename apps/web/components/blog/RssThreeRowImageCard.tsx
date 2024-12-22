import { StaticImageData } from "next/image";

import { ImageCardType } from "./ImageCard";

const getSrc = (src: StaticImageData | string): string => {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  if (typeof src === "string") {
    return `${baseURL}${src}`;
  } else {
    return `${baseURL}${src.src}`;
  }
};

export const RssThreeRowImageCardList = ({
  images,
}: {
  images: ImageCardType[];
}) => {
  return (
    <div>
      {images.map((image, index) => {
        if (index % 3 === 0) {
          const hasNext = index < images.length - 1;
          const hasNextNext = index < images.length - 2;
          return (
            <div key={`${image.alt}-${index}`} style={{ display: "flex" }}>
              <figure>
                <img
                  alt={image.alt}
                  src={getSrc(image.src)}
                  style={{ height: "auto", width: "100%" }}
                />
                {image.description && (
                  <figcaption>{image.description}</figcaption>
                )}
              </figure>
              {hasNext && (
                <figure>
                  <img
                    alt={images[index + 1].alt}
                    src={getSrc(images[index + 1].src)}
                    style={{ height: "auto", width: "100%" }}
                  />
                  {images[index + 1].description && (
                    <figcaption>{images[index + 1].description}</figcaption>
                  )}
                </figure>
              )}
              {hasNextNext && (
                <figure>
                  <img
                    alt={images[index + 2].alt}
                    src={getSrc(images[index + 2].src)}
                    style={{ height: "auto", width: "100%" }}
                  />
                  {images[index + 2].description && (
                    <figcaption>{images[index + 2].description}</figcaption>
                  )}
                </figure>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
