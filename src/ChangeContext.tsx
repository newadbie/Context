import useTestContext from "./TestContext";

const ChangeContext = ({
  message,
}: {
  message: { message: { message: string } };
}) => {
  const { isTrue, toogleIsTrue } = useTestContext();
  return (
    <div>
      {isTrue ? "Wartość jest prawdziwa" : "Wartość jest fałszywa"}
      <button onClick={toogleIsTrue}>
        Zmień wartość {message.message.message}
      </button>
    </div>
  );
};

export default ChangeContext;
