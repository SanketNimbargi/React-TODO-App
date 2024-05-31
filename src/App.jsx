import Todo from "./components/Tudu";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";
import Header from "./components/Header";
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <InlineComponent />
      <OutlineComponent />  */}
      <Header />
      <Todo />
      

    </div>
  )
}

export default App
