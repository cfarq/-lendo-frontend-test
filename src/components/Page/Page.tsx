import { twMerge } from "tailwind-merge";

interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export const Page = ({
  children,
  className,
  ...props
}: PageProps): JSX.Element => {
  return (
    <div
      className={twMerge("h-full flex flex-col overflow-y-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
