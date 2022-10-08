import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="2500" theme="colored" position="top-center" />
    </>
  );
}

export default App;
