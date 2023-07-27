import { BrowserRouter } from "react-router-dom";
import MainNav from "./components/MainNav";
import SideNav from "./components/SideNav";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideNav />
      <MainNav />
    </div>
    </BrowserRouter>
  );
}

export default App;
