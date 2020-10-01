import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";
import Loader from "./Loader";

import "./styles.css";

const getRandomCard = () => {
  // fill this in
};

const App = () => {
  const [state, setState] = useState({
    loading: false,
    card: {}
  });

  useEffect(() => {
    getRandomCard();
  }, []);

  return (
    <div>
      <Loader />
      <br />
      <Card />
      <br />
      ---- components to implement -----
      <br />
      <br />
      <Button onClick={() => alert("implement me")}>Hello</Button>
    </div>
  );
};

export default App;
