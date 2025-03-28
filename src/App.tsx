import React from "react";
import { Header } from "./components/Header/Header";

import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  return (
    <>
      {/* fragment: tag vazia */}
      <Header />
      <Tasks />
    </>
  );
}

export default App;
