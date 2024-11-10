import { FC } from "react";
// import { useTaskContext } from "./context/taskContext";
import "./App.css";
import Navbar from "./components/Navbar";
const App: FC = () => {
  // const tasks = useTaskContext();
  // console.log(tasks);
  // console.log(setTasks);
  return (
    <div className="main-body">
      <Navbar />
      <div className="container">
        
      </div>
    </div>
  );
};
export default App;
