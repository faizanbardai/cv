import React from "react";

import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Contact from "./contact/Contact";

export default function Main() {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Contact />
    </div>
  );
}
