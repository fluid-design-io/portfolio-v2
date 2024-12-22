const heuristics = [
  {
    bad: "None.",
    good: "Flow of the wireframes does offer the user an idea of where they are in the process of completing tasks using distinct screens. Buttons on pages such as search, cart, and checkout are the cues to users as to what the next stage is.",
    name: "Visibility of system status",
  },
  {
    bad: "Does not draw from many real-world instances save for the menu and the icons that will be used to direct the user around. Could maybe be more interactive by adding visual map cues as to how the store is green.",
    good: "The few icons present do seem intuitive, for instance, the gift icon, which takes the user to the reward page Process of finding a Boba shop is similar to finding one by looking around by first searching, then viewing a summary (like posters on a window), and then visiting.",
    name: "Match between system and the real world",
  },
  {
    bad: "None.",
    good: "Has a lot of cancel buttons and navigation buttons that let the user back out of actions and easily navigate around. To this end, the wireframe does afford the user control and freedom in their actions.",
    name: "User control and freedom",
  },
  {
    bad: "The only aspect of the design that stands out as not being widely recognizable is the ability to expand certain pages by swiping up.",
    good: "The designs used in the wireframe are standard designs found in many applications. Checklists for selecting options, standard search bars, arrows indicating navigation directions, etc.",
    name: "Consistency and standards",
  },
  {
    bad: "However, the wireframe does not offer a secondary check before the user submits an order, which could be an issue, as the user could accidentally bump the order button or forget to add something to their order. As a suggestion, we could use a secondary check that walks the user through their order and asks for a confirmation.",
    good: "Does seem to allow users to avoid mistakes by canceling certain actions or backing out of others.",
    name: "Error prevention",
  },
  {
    bad: "Beyond this, however, there does not seem to be many instances in which this heuristic is applicable.",
    good: "Does seem to implement recognition rather than recall, as the home page for instance has a section called recent, which shows shops the user has recently viewed",
    name: "Recognition rather than recall",
  },
  {
    bad: "No quantity button to order multiple items.",
    good: "Seems to be very flexible in how it is used. A user can find a shop by typing in the search bar or by pressing the mic icon and saying a shop's name and filtering using different options in both cases, by selecting a location on the map, or by selecting one of the options from the featured section on the home page. Users can also report companies, order items, research environmentally friendly practices, view rewards, and coupons, etc.",
    name: "Flexibility and efficiency of use",
  },
  {
    bad: "None.",
    good: "The wireframes do seem minimalist in the sense that they only have buttons and navigational elements that are relevant to the said page and the task it is related to. The exception to this is the home page, but given that it is the central hub of the app and the starting point for the other tasks, this is acceptable.",
    name: "Aesthetics and minimalist design",
  },
  {
    bad: "The wireframe does not show the ability to recover from errors, let alone catch them. For instance in the ‘Send Gifts’ frame, if the user enters an invalid recipient, there does not appear to be a way to catch this.",
    good: "None.",
    name: "Help users recognize, diagnose, and recover from errors",
  },
  {
    bad: "Does not appear to be any way for the user to view the documentation on the interface or seek help in navigating it.",
    good: "None.",
    name: "Help and documentation",
  },
];

const HeuristicCard = ({ bad, good, name }: any) => {
  return (
    <div className="card-border flex w-full flex-col rounded-lg bg-muted p-4">
      <h3 className="mt-0 text-xl font-bold">{name}</h3>
      <div className="mt-4 flex flex-col">
        <h4 className="flex items-center justify-start gap-1 text-lg font-bold">
          <svg
            aria-hidden="true"
            className="h-5 w-5 fill-lime-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              fillRule="evenodd"
            />
          </svg>
          Good
        </h4>
        <p className="mt-2 leading-6">{good}</p>
      </div>
      <div className="mt-4 flex flex-col">
        <h4 className="flex items-center justify-start gap-1 text-lg font-bold">
          <svg
            aria-hidden="true"
            className="h-5 w-5 fill-rose-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              fillRule="evenodd"
            />
          </svg>
          Bad
        </h4>
        <p className="mt-2 leading-6">{bad}</p>
      </div>
    </div>
  );
};

export const HeuristicEvaluation = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {heuristics.map((heuristic, index) => (
        <HeuristicCard key={`${heuristic.name}-${index}`} {...heuristic} />
      ))}
    </div>
  );
};
