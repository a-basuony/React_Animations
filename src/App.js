import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const [show, setShow] = useState(true);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      {show && <Modal show={show} closed={closeModal} />}
      {show && <Backdrop show={show} />}
      <button className="Button" onClick={openModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
