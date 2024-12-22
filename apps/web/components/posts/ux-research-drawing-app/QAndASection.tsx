import { QAndASection } from "../QAndA";

export const QAndAParticipant1 = () => {
  return (
    <>
      <QAndASection
        questions={[
          {
            answer: "During kindergarten.",
            question: "Do you have any experience with coloring books? When?",
          },
          {
            answer: "Color pencils.",
            question:
              "What coloring tools do you like to use when you are coloring?",
          },
        ]}
        title="Introduction"
      />

      <QAndASection
        questions={[
          {
            answer: "Hard to color precisely.",
            question: "How do you feel as you are coloring?",
          },
          {
            answer: "Size of the brush and using Photoshop for the first time.",
            question: "What’s making you uncomfortable in coloring?",
          },
          {
            answer: "3.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 1 (Circle)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "Easier to color the curved lines such as the belly part of the drawing.",
            question:
              "How do you feel as you are coloring compared to the previous one?",
          },
          {
            answer: "5.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 2 (Square)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "Feels like the size is much smaller, and I feel like I have a better control over details.",
            question:
              "How do you feel as you are coloring compared to the previous ones?",
          },
          {
            answer: "7.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 3 (Elipse)"
      />

      <QAndASection
        questions={[
          {
            answer: "I feel like my artwork is a little messy.",
            question: "How do you feel about the artwork you created?",
          },
          {
            answer:
              "I love the ellipse. I was surprised it worked out so well and it allowed me to draw details more precisely.",
            question: "How was your experience with the three brush tips?",
          },
          {
            answer:
              "I still feel like there would be other types of brushes allowing more control.",
            question:
              "I see that the highest rating you gave to a brush is a 7, what other concerns or improvements do you think that can bring the score to a 10 out of 10?",
          },
        ]}
        title="Overall"
      />
    </>
  );
};

export const QAndAParticipant2 = () => {
  return (
    <>
      <QAndASection
        questions={[
          {
            answer: "I have not had experiences coloring a coloring book.",
            question: "Do you have any experience with coloring books? When?",
          },
          {
            answer: "Watercolor.",
            question:
              "What coloring tools do you like to use when you are coloring?",
          },
        ]}
        title="Introduction"
      />

      <QAndASection
        questions={[
          {
            answer: "I like the circle brush.",
            question: "How do you feel as you are coloring?",
          },
          {
            answer: "Size of the brush.",
            question:
              "Do you have anything that makes you uncomfortable when coloring?",
          },
          {
            answer: "6.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 1 (Circle)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "I find the square brush coloring faster and not necessarily harder to use.",
            question:
              "How do you feel as you are coloring compared to the previous one?",
          },
          {
            answer: "8.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 2 (Square)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "Yes, I find the ellipse brush to be easier on coloring specific gaps and shapes, but the length of the brush sometimes makes it harder to color certain areas. Also I noticed the brush size is smaller.",
            question: "Do you have any opinions on the ellipse brush?",
          },
          {
            answer: "9.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 3 (Elipse)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "I like the ellipse a lot, and I was surprised it worked out so well. I also liked the size of the square brush, as it painted the drawing much faster without sacrificing too much of the detail.",
            question: "How was your experience with the three brush tips?",
          },
          {
            answer:
              "I am pretty happy with how all of them turned out, but the best one is the ellipse brush drawing. As I have finer control over the small area. I also wanted to cover the tail and hair, but I don’t think it will look good with the size of the brush.",
            question:
              "How do you like the drawings you did? Which is the best?",
          },
          {
            answer:
              "I think by having a reference image of what the brush tip looks like (a preview) can help me judge which brush I can use for the specific testing.",
            question:
              "I see that the highest rating you gave to a brush is a 9, what other concerns or improvements do you think that can bring the score to a 10 out of 10?",
          },
          {
            answer: "No.",
            question: "Anything else you would like to add or express?",
          },
        ]}
        title="Overall"
      />
    </>
  );
};

export const QAndAParticipant3 = () => {
  return (
    <>
      <QAndASection
        questions={[
          {
            answer: "I do it sometimes in my free time, but rarely.",
            question:
              "Do you have any experience of coloring a coloring book? When?",
          },
          {
            answer: "Crayons, brushes (paints), color pencils, etc.",
            question:
              "What coloring tools do you like to use when you are coloring?",
          },
        ]}
        title="Introduction"
      />

      <QAndASection
        questions={[
          {
            answer:
              "The circle brush is easy to color shapes with curvy lines, like the holes in the cheese for example.",
            question: "How do you feel as you are coloring?",
          },
          {
            answer:
              "7. It’s not bad, but it’s hard to color narrower shapes. It’s also hard to color the edges of the shape that aren’t curvy. It will be easy to color with this on drawings with a lot of curvy lines.",
            question: "Scale 1 to 10 of this brush.",
          },
        ]}
        title="Task 1 (Circle)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "Square one is harder to color than the circle one. I don’t like the square brush because I can see that it is not smooth and rather has a zig zag finish on curvy lines. It’s only smooth when I’m coloring on straight lines.",
            question:
              "How does it feel now with the square brush? How’s your experience?",
          },
          {
            answer:
              "4. I prefer the circle brush more than the square one. I would use it if I had to color squared shapes.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 2 (Square)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "So far I like it, better than the first two. It is a complement to both the circle and the square one, while it keeps its smooth texture of the circle, it is better to color narrower shapes. The coloring is more precise and I can handle the brush better.",
            question:
              "How does it feel now with an ellipse brush? How’s your experience?",
          },
          {
            answer:
              "8. I liked how the vertex of the ellipse allowed narrower coloring better. The best out of three.",
            question:
              "On the scale of 1 to 10, would you use this brush again for coloring?",
          },
        ]}
        title="Task 3 (Elipse)"
      />

      <QAndASection
        questions={[
          {
            answer:
              "I think it’s cute but I think I should have used different colors for some parts.",
            question: "How do you feel about the artwork you created?",
          },
          {
            answer:
              "It was great, all of them were easy to color wide areas, but then it got harder when I had to color narrower areas or certain outlines. I liked the ellipse brush the most and I find it surprising. When I was given an ellipse brush I expected the circle one to be better.",
            question:
              "How was your overall experience with different types of brush tips?",
          },
          {
            answer:
              "Ellipse brush! As I said before it’s a complement of both the circle one and square one. Still, it’s hard to color precisely in parts like Jerry’s fingers but way better than the first two.",
            question:
              "Was there a particular type of brush that was better to handle?",
          },
        ]}
        title="Overall"
      />
    </>
  );
};

export const UsabilityTest = () => {
  return (
    <QAndASection
      questions={[
        {
          answer:
            "A. Took classes in middle school, and I draw for fun sometimes. B. Took classes in elementary school, and I drew for fun on an ipad.",
          question:
            "Do you have any experience of coloring a coloring book? When?",
        },
        {
          answer:
            "A. I think the app is straightforward to use. I liked the idea of networking. One confusing part is the purpose of three cards at the top of the home page. Seems good for first time users, but repetitive and annoying for frequent users. B. The little toolbar at the bottom seems not intuitive. + - buttons are too close to the actual tool. Also it would be better to keep the toolbar simple.",
          question: "Initial thoughts on our app?",
        },
        {
          answer:
            "A. Being more intuitive. For example, the trash icon seems a little confusing. Does it throw away everything? B. Make it simple. Feels like the color picker and brush positions should be swapped and icons should be spaced out a little more.",
          question: "What would you prioritize more in the toolbar?",
        },
        {
          answer:
            "A & B. I like to choose the color myself, maybe better to give a color palette.",
          question: "What do you think about having colors as default?",
        },
        {
          answer:
            "A & B. Great, I suggest having 6 basic colors and 2 gradient colors!",
          question:
            "What do you think about having a gradient color option and how many colors would you like to have?",
        },
        {
          answer:
            "A & B. Intuitive and clear. It will encourage the users to share their work on the platform.",
          question: "What do you think about portfolio and community pages?",
        },
      ]}
      title="Usability Test Notes"
    />
  );
};
