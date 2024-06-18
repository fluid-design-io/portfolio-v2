import { QAndASection } from "../QAndA";

export const QAndAParticipant1 = () => {
  return (
    <QAndASection
      questions={[
        {
          answer:
            "I see a Wiki button and it has a book icon, so let’s check out what it is. From there, I see different types of “products” and then select each of them.",
          question:
            "Can you walk me through how you would go about finding more information on different packaging materials using the app?",
        },
        {
          answer:
            "I like the layout of the Wiki screen, but want to read the summary line better. The Wiki Detail screen is easy to read and I like the specific heads. There is just the right amount of information.",
          question:
            "What do you think about the layout of the Wiki screen? Is there too much information? Too little information?",
        },
        {
          answer:
            "I’ve never seen compostable icons. Recyclable and biodegradable. Wouldn’t know what a compostable icon would look like even if this is not the 'right one.'",
          question:
            "Do you understand the icons used to describe biodegradable, compostable, and recyclable materials?",
        },
        {
          answer:
            "Yes. Everything pressable indicates what it can do. Things are clean and not bunched together.",
          question: "Do you find the application easy to navigate?",
        },
        {
          answer: "No.",
          question:
            "Is there anything else you would like to share regarding your thoughts about the design of the app?",
        },
      ]}
      title="Scenario: Finding Information on Packaging Materials"
    />
  );
};

export const QAndAParticipant2 = () => {
  return (
    <QAndASection
      questions={[
        {
          answer:
            "On the home page, I see there are 3 labels - Order, Rewards, and Wiki. And if I scroll I see Recent. I think Wiki makes the most sense, it sounds like Wikipedia. Click on Wiki. There’s a list of wastes? I want to see, say, Compostable, and there is information about what it is and how it works.",
          question:
            "Can you walk me through how you would go about finding more information on different packaging materials using the app?",
        },
        {
          answer:
            "Wiki List: I like the layout, list view is good for such a short list but wonder if a search bar would make sense if there were more. I think I would like to see info on what type of list this is. Wiki Detail: I like that it is read more or less like Wikipedia, it would be neat if it could look like it too. I think there’s a good amount of information, I would like to see images.",
          question:
            "What do you think about the layout of the screen? Is there too much information? Too little information?",
        },
        {
          answer:
            "Recyclable, yes though I’m not sure I’ve seen it green, I think it’s normally white. Compostable, I have a compost bin and have seen compostable materials, not sure what symbol they use and/or if it’s similar to the one on this app. Biodegradable: Not sure about this icon either.",
          question:
            "Do you understand the icons used to describe biodegradable, compostable, and recyclable materials?",
        },
        {
          answer:
            "Yes, it looks easy to read and I understand what most of the icons do.",
          question: "Do you find the application easy to navigate?",
        },
        {
          answer: "No, not really.",
          question:
            "Is there anything else you would like to share regarding your thoughts about the design of the app?",
        },
      ]}
      title="Scenario: Finding Information on Packaging Materials"
    />
  );
};
