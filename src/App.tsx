import "./App.css";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export const Layout = () => {
  return (
    <div className="h-screen p-4">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
