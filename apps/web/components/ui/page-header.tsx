import { Heading } from "@workspace/ui/components/heading";
import { Text } from "@workspace/ui/components/text";

export type PageHeaderProps = {
  description?: string;
  title: string;
};

function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <>
      <header className="relative w-full max-w-full overflow-x-hidden">
        <div className="dashed-border inset-x-0 -mx-48 md:translate-y-[16.5px] translate-y-[12.5px] duration-1000 animate-in fade-in" />
        <Heading className="text-shadow-md relative z-[1] text-balance text-4xl/snug font-bold sm:text-5xl/snug font-kaisei [&::first-letter]:capitalize">
          {title}
        </Heading>
        <div className="dashed-border inset-x-0 -mx-48 md:translate-y-[-13px] translate-y-[-9.5px] duration-1000 animate-in fade-in" />
        <Text className="text-shadow-md mt-6 w-5/6 max-w-2xl text-pretty">
          {description}
        </Text>
      </header>
    </>
  );
}

export default PageHeader;
