type Props = {
  children: React.ReactNode;
};

export const TypographyH1 = ({ children }: Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};
