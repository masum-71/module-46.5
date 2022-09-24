import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Mobile from "./components/Mobile/Mobile";
import Todoes from "./components/Todoes/Todoes";

function App() {
  return (
    <div className="App">
      <Blog heading={"this is heading 1"} author={"Masum"}></Blog>
      <Blog heading={"this is heading 2"} author={"MIM"}></Blog>
      <Blog heading={"this is heading 3"} author={"Aymon"}></Blog>
      <Mobile></Mobile>
      <Todoes></Todoes>
    </div>
  );
}

export default App;
