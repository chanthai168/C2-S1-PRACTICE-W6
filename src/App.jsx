import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS,ENGLISH_RESULTS,HTML_RESULTS,PYTHON_RESULTS } from "./data";

function App() {
  return (
    <>
    <Header id="header" batchName={"fake batch name"}/>
    <main className="scores-container">
      <Scores  course_name={"DevOP"} list_results={JAVA_RESULTS}/>
      <Scores  course_name={"Advance English"} list_results={ENGLISH_RESULTS}/>
      <Scores  course_name={"Advance HTLM"} list_results={HTML_RESULTS}/>
      <Scores  course_name={"AI Engineer"} list_results={PYTHON_RESULTS}/>
    </main>
    </>
  );
}

export default App;
