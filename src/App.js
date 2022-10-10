import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer autoClose="2500" theme="colored" position="top-center" />
    </div>
  );
}

export default App;
