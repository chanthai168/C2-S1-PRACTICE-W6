import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";

function App() {
  return (
    <>
    <Header id="header" batchName={"fake batch name"}/>


    <Scores  course_name={"DevOP"} list_results={JAVA_RESULTS}/>

    </>
  );
}

export default App;
