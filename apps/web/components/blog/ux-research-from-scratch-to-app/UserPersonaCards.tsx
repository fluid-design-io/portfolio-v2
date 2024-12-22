import imageSarah from "@/public/assets/blog/ux-research-from-scratch-to-app/Sarah.webp";
import imageSydney from "@/public/assets/blog/ux-research-from-scratch-to-app/Sydney.webp";
import { StaticImageData } from "next/image";

import { RssImage } from "../RSSImage";

const personals = [
  {
    description:
      "Sydney is a woman in her 30s living in the bay area who walks around the city frequently for work. Sydney drinks coffee daily, sometimes getting a cup of coffee twice a day. Sydney also drinks boba weekly, generally at least once a week. In both cases, she does not bring her own cup. Sydney has always been conscious of the environment, stemming from a childhood spent outdoors. Having recently listened to a podcast about the impact of plastic on the environment, Sydney has resolved to cut back on the amount of plastic she uses in her daily life.",
    name: "Sydney",
    scenario:
      "Sydney is walking to the next location for her job on a Tuesday. During the walk, Sydney gets the craving for boba. Sydney feels depressed as she remembers her vow to cut back on her use of plastic, meaning no boba. Suddenly, however, Sydney recalls an app her friend Courtney mentioned when Sydney had brought up her desire to cut back on plastic use.  As she recalls, the app helps people find coffee and boba shops that are environmentally friendly. Sydney goes to the AppStore on her phone and downloads the app. Sydney then opens the app, types boba in the search bar, and clicks the search function. The app asks Sydney if it is ok to use her location, to which Sydney says yes. The app then displays a map of boba shops near Sydney. Sydney then clicks on the different shop icons and reads through the environmentally friendly practices the different shops use. Having settled on one shop that uses paper cups and straws instead of plastic, Sydney begins making her way there, with a smile as she gets to have boba afterward.",
    src: imageSydney,
  },
  {
    description:
      "Sarah is a college-educated person in their 20s-30s. Sarah drives a Toyota Camry and loves to drink boba. Sarah knows what climate change is and also is aware that waste is bad for the environment. Sarah wants to help the environment but wants to do so without affecting her experiences. Due to this, Sarah likes to visit boba places that are close by and that also serve good boba tea. Sarah also likes to save money and enjoys using coupons. Sarah is not tech savvy, so she prefers her technology to use familiar symbols to help her navigate. Sarah is also busy so she tends to use apps that help her find her locations quickly.",
    name: "Sarah",
    scenario:
      "Assume that Sarah has just completed her work and is now heading home and wants some Boba tea. She opens the Boba app to find the closest locations. After she opens the app she looks for high-rated Boba shops and notices that she has a coupon for a nearby shop that also has good ratings for Boba tea quality, so she decides to go to it. The coupon states that she has to bring her own cup, and since Sarah has her coffee cup from this morning's coffee, she decides to use it. After she finds the location, she selects the button to open it in the GPS (Apple maps or Google) and drives to the location.",
    src: imageSarah,
  },
];

const PersonaCard = ({
  description,
  name,
  scenario,
  src,
}: {
  description: string;
  name: string;
  scenario: string;
  src: StaticImageData | string;
}) => {
  return (
    <div className="card-border flex flex-col items-center justify-center">
      <figure className="flex flex-col items-center justify-center">
        <RssImage
          alt="User Persona"
          className="h-24 w-24 rounded-full object-cover"
          src={src}
        />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="flex flex-col items-center justify-center">
        <h3 className="sr-only">Description</h3>
        <p className="mt-4">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mt-6">Scenario</h3>
        <p>{scenario}</p>
      </div>
    </div>
  );
};

export const UserPersonaCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {personals.map((persona, index) => (
        <PersonaCard key={`persona-${index}`} {...persona} />
      ))}
    </div>
  );
};
