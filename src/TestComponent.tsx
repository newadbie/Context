import { FC } from "react";

interface IProps {
  message: string;
}

const Test: FC<IProps> = ({ children, message }) => {
  console.log(message);
  return <div>{children}</div>;
};

export default Test;
