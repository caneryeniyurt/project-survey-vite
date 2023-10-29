import "./App.scss";
import { MultiStepForm } from "../components/Multistep/MultiStepForm";
// import { Data } from "./dataTypes/Data";

function App() {
  /*   const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1); */

  return (
    <>
      <h1 className="Title">Exit Interview Survey</h1>

      {/* OUT OF THE BOX - USE HOOK */}
      {/*  <div className="card">
        <button onClick={increment}>count is {count}</button>
      </div> */}

      {/* <Data/> */}

      <MultiStepForm />
    </>
  );
}

export default App;