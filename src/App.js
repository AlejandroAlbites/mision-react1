import "./App.css";

const Title = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
const SubTitle = ({ subTitle }) => {
  return (
    <>
      <h2>{subTitle}</h2>
    </>
  );
};
const Button = ({ button }) => {
  return (
    <>
      <button> {button}</button>
    </>
  );
};

function App() {
  return (
    <div className="header">
      <Title title="Esto es un título" />
      <SubTitle subTitle="Esto es un Subtítulo" />
      <Button button="Esto es un botón" />
    </div>
  );
}

export default App;
