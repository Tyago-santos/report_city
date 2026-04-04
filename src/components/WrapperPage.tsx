import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export default function WrapperPage({ children }: PropsType) {
  return (
    <div className="md:max-w-5xl px-10 w-full  md:mx-auto">{children}</div>
  );
}
