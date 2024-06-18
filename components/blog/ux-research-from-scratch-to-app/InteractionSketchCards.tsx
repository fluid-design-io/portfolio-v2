import { ImageCardSlide, ImageCardType } from "@/components/blog/ImageCard";
import imageInteraction1 from "@/public/assets/blog/ux-research-from-scratch-to-app/interaction-1.webp";
import imageInteraction2 from "@/public/assets/blog/ux-research-from-scratch-to-app/interaction-2.webp";
import imageInteraction3 from "@/public/assets/blog/ux-research-from-scratch-to-app/interaction-3.webp";
import imageInteraction4 from "@/public/assets/blog/ux-research-from-scratch-to-app/interaction-4.webp";

export const InteractionSketchCards = () => {
  const images: ImageCardType[] = [
    {
      alt: "Interaction Sketch 1",
      description:
        "An interaction of home screen and search functionality. \nUsers are presented with a split design, the top section is the map showing eco-friendly stores. Users are able to pan and drag around the map to see different stores.\nThe bottom sections are collapsed by default, showing the search bar, user avatar, links to order, rewards and wiki page, recent stores browsed, featured stores, and featured wiki pages.",
      src: imageInteraction1,
    },
    {
      alt: "Interaction Sketch 2",
      description:
        "An interaction of rewards screen\nUsers can see their available points and redeem drinks using the points. They can also see the rewards they claimed in the “My Reward” tab\nUsers can add points in two ways, using coupon codes and sending invitations to new users\nWhen the new users order their first order, points will be added to both users.",
      src: imageInteraction2,
    },
    {
      alt: "Interaction Sketch 3",
      description:
        "An interactive sketch of rewards, donate, and wiki page. \nUsers are able to browse the information on eco-friendly packaging inside the app and donate changes to organizations or local shops\nThe wiki page also consists information about of the components used for the item",
      src: imageInteraction3,
    },
    {
      alt: "Interaction Sketch 4",
      description:
        "An interactive sketch of the store, cart, and past orders page.\nThe store page shows how this particular store is eco-friendly by displaying badges (compostable, solar power, etc).\nIt also supports functionalities such as sharing the store page, creating and sending gift cards, and donating, as part of users' call to action.",
      src: imageInteraction4,
    },
  ];
  return <ImageCardSlide images={images} />;
};
