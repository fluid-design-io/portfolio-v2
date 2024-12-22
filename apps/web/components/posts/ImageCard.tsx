"use client";

import { cn } from "@workspace/ui/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { StaticImageData } from "next/image";
import { Fragment, useId, useRef } from "react";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export type ImageCardType = {
  alt: string;
  className?: string;
  description?: string;
  src: StaticImageData | string;
};

export const ImageCard = ({
  alt,
  className,
  description,
  src,
}: ImageCardType) => {
  return (
    <div className='card-border snap-center rounded bg-card/50 p-2'>
      <div className='relative [&_img]:!my-0'>
        <ImageZoom
          alt={alt}
          className={cn("shrink-0 rounded object-cover", className)}
          src={src}
        />
      </div>
      {description && (
        <p className='mb-2 mt-0 text-sm leading-5'>{description}</p>
      )}
    </div>
  );
};

const SideGradients = ({
  endGradientOpacity,
  startGradientOpacity,
}: {
  endGradientOpacity: any;
  startGradientOpacity: any;
}) => {
  return (
    <Fragment>
      <motion.div
        className={cn(
          "pointer-events-none absolute -right-0.5 bottom-0 top-0 z-[3] h-full w-12 [mask-image:linear-gradient(270deg,rgba(255,255,255,1)_0.125rem,rgba(255,255,255,0))]",
          "bg-background"
        )}
        style={{
          opacity: endGradientOpacity,
        }}
      />
      <motion.div
        className={cn(
          "pointer-events-none absolute -left-0.5 bottom-0 top-0 z-[3] h-full w-12 [mask-image:linear-gradient(90deg,rgba(255,255,255,1)_0.125rem,rgba(255,255,255,0))]",
          "bg-background",
          "transition-opacity duration-500"
        )}
        style={{
          opacity: startGradientOpacity,
        }}
      />
    </Fragment>
  );
};

export const ImageCardSlide = ({ images }: { images: ImageCardType[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: containerRef });
  const endGradientOpacity = useTransform(scrollXProgress, [0.98, 1], [1, 0]);
  const startGradientOpacity = useTransform(scrollXProgress, [0, 0.02], [0, 1]);

  return (
    <div className='relative'>
      <SideGradients
        endGradientOpacity={endGradientOpacity}
        startGradientOpacity={startGradientOpacity}
      />
      <motion.div
        className='scrollbar relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-none'
        layoutScroll
        ref={containerRef}
      >
        {images.map((image, index) => (
          <ImageCard
            alt={image.alt}
            className='min-w-[16rem]'
            description={image.description}
            key={`${image.alt}-${index}`}
            src={image.src}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ThreeRowImageCardSlide = ({
  imageClassName,
  images,
}: {
  imageClassName?: string;
  images: ImageCardType[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollX, scrollXProgress } = useScroll({ container: containerRef });
  const startGradientOpacity = useTransform(scrollX, [20, 30], [0, 1]);
  const endGradientOpacity = useTransform(scrollXProgress, [0.98, 1], [1, 0]);

  const key = useId();

  return (
    <div className='relative'>
      <SideGradients
        endGradientOpacity={endGradientOpacity}
        startGradientOpacity={startGradientOpacity}
      />
      <motion.div
        className='scrollbar relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-none'
        layoutScroll
        ref={containerRef}
      >
        {images.map((image, index) => {
          // only show 0, 3, 6, 9 images
          if (index % 3 === 0) {
            const hasNext = index < images.length - 1;
            const hasNextNext = index < images.length - 2;
            return (
              <div
                className='grid grid-rows-3 place-content-evenly gap-6'
                key={`${key}-${index}`}
              >
                <ImageCard
                  alt={image.alt}
                  className={cn("min-w-[12.75rem]", imageClassName)}
                  description={image.description}
                  src={image.src}
                />
                {hasNext && (
                  <ImageCard
                    alt={images[index + 1].alt}
                    className={cn("min-w-[12.75rem]", imageClassName)}
                    description={images[index + 1].description}
                    src={images[index + 1].src}
                  />
                )}
                {hasNextNext && (
                  <ImageCard
                    alt={images[index + 2].alt}
                    className={cn("min-w-[12.75rem]", imageClassName)}
                    description={images[index + 2].description}
                    src={images[index + 2].src}
                  />
                )}
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};
