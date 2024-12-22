import Image, { StaticImageData } from "next/image";

export const RssImage = ({
  alt,
  src,
  ...props
}: {
  alt: string;
  className?: string;
  src: StaticImageData | string;
}) => {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  if (typeof window === "undefined") {
    const srcString =
      typeof src === "string" ? `${baseURL}${src}` : `${baseURL}${src.src}`;
    return <img alt={alt} src={srcString} {...props} />;
  } else {
    return <Image alt={alt} src={src} {...props} />;
  }
};
