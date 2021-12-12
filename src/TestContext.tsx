import { createContext, useContext, useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface ITest {
  isTrue: boolean;
  toogleIsTrue: () => void;
}

const TestContext = createContext<ITest>({
  isTrue: false,
  toogleIsTrue: () => undefined,
});

export const TestContextProvider = (props: any) => {
  const [isTrue, setIsTrue] = useState(false);

  const toogleIsTrue = () => setIsTrue((lastValue) => !lastValue);

  return <TestContext.Provider value={{ isTrue, toogleIsTrue }} {...props} />;
};

const useTestContext = () => useContext(TestContext);

export default useTestContext;
