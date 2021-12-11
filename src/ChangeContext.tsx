import useTestContext from "./TestContext";

const ChangeContext = () => {
  const { isTrue, toogleIsTrue } = useTestContext();
  return (
    <div>
      {isTrue ? "Wartość jest prawdziwa" : "Wartość jest fałszywa"}
      <button onClick={toogleIsTrue}>Zmień wartość</button>
    </div>
  );
};

export default ChangeContext;
