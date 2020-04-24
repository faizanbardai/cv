import React from "react";

import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Contact from "./contact/Contact";

export default function Main() {
  return (
    <div>
      <Header />
      <Greeting />
      <Contact />
    </div>
  );
}
