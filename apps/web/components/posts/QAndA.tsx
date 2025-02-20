import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@workspace/ui/components/description-list";

export const QAndARow = ({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) => {
  return (
    <>
      <DescriptionList className="not-porse">
        <DescriptionTerm>{question}</DescriptionTerm>
        <DescriptionDetails>{answer}</DescriptionDetails>
      </DescriptionList>
    </>
  );
};

export const QAndASection = ({
  questions,
  title,
}: {
  questions: { answer: string; question: string }[];
  title: string;
}) => {
  return (
    <fieldset
      className="rounded-md border border-border/50 bg-card/50 px-4"
      id={`q-a-${title}`}
    >
      <legend
        className="mt-0 px-4 text-sm font-bold uppercase text-muted-foreground"
        /* @ts-ignore */
        htmlFor={`q-a-${title}`}
      >
        {title}
      </legend>
      <div className="divide-y divide-border/50">
        {questions.map(({ answer, question }) => (
          <QAndARow
            answer={answer}
            key={`${title}-${question}`}
            question={question}
          />
        ))}
      </div>
    </fieldset>
  );
};
