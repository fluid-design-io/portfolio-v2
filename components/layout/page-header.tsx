import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

export type PageHeaderProps = {
  description?: string;
  title: string;
};

function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <>
      <header className="relative w-full max-w-full overflow-x-hidden">
        <div className="dashed-border inset-x-0 -mx-48 translate-y-[16.5px] duration-1000 animate-in fade-in" />
        <Heading className="text-shadow-md relative z-[1] text-balance text-4xl/snug font-bold sm:text-5xl/snug [&::first-letter]:capitalize">
          {title}
        </Heading>
        <div className="dashed-border inset-x-0 -mx-48 translate-y-[-13px] duration-1000 animate-in fade-in" />
        <Text className="text-shadow-md mt-6 w-5/6 max-w-2xl text-pretty">
          {description}
        </Text>
      </header>
    </>
  );
}

export default PageHeader;
